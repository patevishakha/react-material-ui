const csvwriter = require("csv-writer");
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const fs = require("fs");
const fastcsv = require("fast-csv");
const logger = require("morgan");

url = "http://jsonplaceholder.typicode.com/todos";
var url_to_hit_service = "";
port = 8080;
//CROSS ORIGIN
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.download("./report.csv");
});

const generateId = () => {
  //The static Date.now() method returns the number of milliseconds
  //elapsed since January 1, 1970 00:00:00 UTC.
  return Date.now() + Math.random().toString().substring(2, 3);
};

const generateUrl = (mon, day, year, product_type_n, product_type_i, corps) => {
  url_to_hit_service =
    "http://localhost:7001/vlp-nsr-rest/reporting/sync?REPORT_TYPE=CUSTOMER_ACCESS_NUMBER&REPORT_FORMAT=csv&REPORT_ID=" +
    generateId() +
    "&selectedCols=none" +
    "&selectedDateFormat=" +
    (mon % 2) +
    "F" +
    (day % 2) +
    "F" +
    year +
    "&selectedCorps=" +
    corps[0].uid +
    "&selectedProductTypes=" +
    product_type_n +
    "selectedProductTypes=" +
    product_type_i;
  // console.log(url_to_hit_service);
  // return url_to_hit_service;
};

app.post("/create", function (req, res) {
  console.log(req.body);
  const created_date_from = new Date(req.body.date_created_from);
  const product_type_n = req.body.product_type_n_i_col1 ? 1 : 0;
  const product_type_i = req.body.product_type_i_i_col1 ? 1 : 0;
  const corps = req.body.corps;
  generateUrl(
    created_date_from.getUTCMonth(),
    created_date_from.getUTCDate(),
    created_date_from.getUTCFullYear(),
    product_type_n,
    product_type_i,
    corps
  );
});
//THIS IS THE METHOD I TESTED WHEN I AM WORKING
//THIS ACCEPTS A API URL ABOVE COMMENTED
//AND MAKES A REPORT

// const getJSON = (url, callback) => {
//   console.log("in get JSON", url_to_hit_service);
//   http
//     .request(url, function (res) {
//       var body = "";
//       res.headers = "application/json";
//       res.on("data", function (chunk) {
//         body += chunk;
//       });

//       res.on("end", function () {
//         var data = JSON.parse(body.toString());
//         callback(null, data);
//       });

//       res.on("error", callback);
//     })
//     .end();
// };

const getJSON = (url_to_hit_service, callback) => {
  // console.log(url_to_hit_service);
  http
    .get(
      {
        url: url_to_hit_service,
        headers: { "Content-Type": "application/octet-stream" },
      },
      function (res) {
        res.setEncoding("binary");
        var body = [];
        res.on("data", function (chunk) {
          body.push(chunk);
        });

        res.on("end", function () {
          var buffer = Buffer.concat(body);
          console.log(buffer.toString("base64"));
          callback(null, buffer);
        });

        res.on("error", callback);
      }
    )
    .end();
};

app.listen(port, console.log(`Server started on port ${port}`));
getJSON(url_to_hit_service, function (err, data) {
  if (err) {
    return console.log(err);
  }
  // console.log(data);
  const ws = fs.createWriteStream("report.csv");
  fastcsv.write(data, { headers: true }).pipe(ws);
});

module.exports = getJSON;
