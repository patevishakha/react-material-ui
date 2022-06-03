const csvwriter = require("csv-writer");
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
//const fs = require("fs");
const logger = require("morgan");

let url = "http://jsonplaceholder.typicode.com/todos";
let restPathAndQuery;
let options ={};
let appPort = 8083;

//app.use(
//  cors({
//    origin: "http://172.25.25.100:3000",
//    credentials: false,
//  })
//);

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.download("./report.csv");
});

const generateId = () => {
  return Date.now() + Math.random().toString().substring(2, 3);
};

const generatePathAndParameters = (mon, day, year, product_type_n, product_type_i, corps,revenue_owners) => {    
options ={
  hostname: '172.25.25.59',
  port: 82,
  path: "/mule/rest/vlp-nsr-rest/reporting/sync?REPORT_TYPE=CUSTOMER_ACCESS_NUMBER&REPORT_FORMAT=csv&REPORT_ID=",
  method: 'POST',
  headers: {
    'Content-Type': 'application/xml'
  }
}

restPathAndQuery = options.path +
    generateId() +
    "&selectedCols=none" +
    "&selectedDateFormat=" + (mon % 2) + "F" + (day % 2) + "F" + year;
    let tempQuery;
    if(corps!=null && corps.length!=0){
      restPathAndQuery += corps.reduce((accumulator,currVal,index)=>{
        if(index==0) return accumulator+currVal.uid;
        return accumulator+"&selectedCorps="+currVal.uid;
      },"&selectedCorps=");
    }
    if(revenue_owners!=null && revenue_owners.length!=0){
      restPathAndQuery += revenue_owners.reduce((accumulator,currVal,index)=>{
        if(index==0) return accumulator+currVal.uid;
        return accumulator+"&selectedROs="+currVal.uid;
      },"&selectedROs=");
    }
    restPathAndQuery += "&selectedProductTypes=" + product_type_n;
    //+ "selectedProductTypes=" + product_type_i;

    options.path = restPathAndQuery;
    console.log(`fetching data from ${options.hostname}:${options.port}${options.path}${restPathAndQuery}`);
};

app.post("/create", function(req,res){
  let corps;
  let revenue_owners;
  const created_date_from = new Date(req.body.date_created_from);
  const product_type_n = req.body.product_type_n_i_col1 ? 1 : 0;
  const product_type_i = req.body.product_type_i_i_col1 ? 1 : 0;
  if(req.body.hasOwnProperty("corps")){
     corps= req.body.corps;
  }
  if(req.body.hasOwnProperty("revenue_owners")){
    revenue_owners=req.body.revenue_owners;
  }
  generatePathAndParameters(
    created_date_from.getUTCMonth(),
    created_date_from.getUTCDate(),
    created_date_from.getUTCFullYear(),
    product_type_n,
    product_type_i,
    corps,
    revenue_owners
  );

  prepareDataForPost().then((data)=>{
    res.send(data);
  }).catch(err => {
    console.error("An error occured processing data");
  })
}
);

function prepareDataForPost(){
    return new Promise((resolve,reject)=>{
      http
      .request(
        options,
        function (response) {
          let body = "";
          response.on("data", function (chunk) {
            body += chunk;
          });
          response.on("end", function () {
            resolve(body.toString());
          });
          response.on("error", (err)=>{
            reject("An error occurred fetching data");
          });
        }
      )
      .end();
    })
}

app.listen(appPort, console.log(`Server started on port ${appPort}`));

//module.exports = getJSON;
