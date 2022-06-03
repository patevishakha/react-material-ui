import React,{useState} from "react";
import{Tab,Tabs,Paper,Container,CssBaseline, Typography,Box,Grid} from "@material-ui/core";
import { withStyles,ThemeProvider} from "@material-ui/core/styles";
import Wrap from "../Wrap";
import theme from '../Theme';

import Details from './Details';
import RoutingPlan from "./RoutingPlan";
import AccessNo from "./AccessNo";
import EndPoints from "./EndPoints";


const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: "column"
  },
  indicator: {
    display: "none"
  }
}))(Tabs);

const MyTab = withStyles(theme => ({
  root: {
    backgroundColor: "#e6d8f3",
    borderRadius: "20px",
    // marginTop:"4px",
    padding:"4px",
    color:"#fff",
  },
  wrapper: {
    backgroundColor: "#5514B4",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius
  },
  selected: {
    // color: "#5514B4",
    // border: "2px solid #5514B4",
    fontWeight:"bold",
    backgroundColor: "#5514B4",
    color:"#fff",
    borderRadius: "10px",
  }
}))(Tab);

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 15,paddingLeft:"2px" }}>
      {props.children}
    </Typography>
  );
}

function CorpStaticTabs(){
  const [activetab,setActiveTab]=useState(0);

  const handleChange=(e,val)=>{
    setActiveTab(val);
  };
  
      return (
        <ThemeProvider theme={theme}>
       <CssBaseline />
       <Wrap heading="CORP SCREEN">
        <Container
          component={Box}
          style={{
            position: "relative",
            paddingLeft: "initial",
            zIndex: "1",
            // marginTop: "-80px",
            //marginTop: "-50px",
            marginTop: "-70px",
            //marginLeft: "10px",
            //marginRight: "4.5%",
            display: "flex",
            justifyContent: "center",
            
          }}
        >
          
         
          <Paper
            //alignSelf="center"
            display="flex"
            justifyContent=" center"
            elevation={4}
            component={Box}
            sx={{
              borderRadius: "13px",
              border: "1px solid #5514B4",
              width: "90%",
              //marginTop: "100px",
              overflow : "hidden"
            }}
            p={4}
           
           
          >
          {/* style={{backgroundColor:"#fff",height:"520px",marginTop:"3%"}} */}
        <Grid item lg={2} xs={2} style={{marginTop:"15%"}}>
        <VerticalTabs value={activetab} onChange={handleChange}>
          <MyTab label="Details" />
          <MyTab label="Routing Plan" />
          <MyTab label="Access No" />
          <MyTab label="End Points"/>
        </VerticalTabs>
        </Grid>
        <Grid item lg={10} xs={10}  style={{}}>
        {activetab === 0 && <TabContainer><Details/></TabContainer>}
        {activetab === 1 && <TabContainer><RoutingPlan/></TabContainer>}
        {activetab === 2 && <TabContainer><AccessNo/></TabContainer>}
        {activetab === 3 && <TabContainer><EndPoints/></TabContainer>}
        </Grid>
        
      </Paper>
      </Container>
      </Wrap>
      </ThemeProvider>
    );
  }




export default CorpStaticTabs;



// ===========================================================================
// import React,{useState} from "react";
// import {CssBaseline,Container,Paper,Box,Typography,Tooltip} from "@material-ui/core";
// import {Drawer, List, ListItem,ListItemIcon, ListItemText} from "@material-ui/core";
// import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,styled,tableCellClasses,tableRowClasses,Button,} from "@mui/material";
// import { ThemeProvider } from "@material-ui/core/styles";
// import {useNavigate , Routes, Route, Link } from "react-router-dom";
// import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core";
// import SearchBar from "material-ui-search-bar";

// import MenuIcon from "@mui/icons-material/Menu";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import UploadIcon from '@mui/icons-material/Upload';

// import theme from "../Theme";
// import Wrap from "../Wrap";
// import SearchBarCompo from '../SearchBarCompo';
// import StepperApi from "../StepperApi";
// import StaticFavTemplate from "../FavouritesTemplates/StaticFavTemplate";
// const useStyle = makeStyles((theme) => ({
//   // drawerPaper: { width: 'inherit' },
//   link: {
//     textDecoration: 'none',
//     color: theme.palette.text.primary
//   },
//   backgroundColourClass: {
//     backgroundColor: "#eee",
//   },
//   typographyClass: {
//     // fontWeight: "bold",
//   },

//   rootClass: {
//     '& .MuiPaper-root':{
//       paddingLeft: "initial",
//     },
//     "& .MuiFormControl-root": {
//       width: "90%",
//       margin: theme.spacing(1),
//       //paddingTop: "100px",
//       //backgroundColor: "red",
//     },

//     "& .MuiTypography-root": {
//       width: "90%",
//       //backgroundColor: "red",
//     },
//     "& .MuiBox-root-19": {
//       display: "flex",
//       justifyContent: "center",
    
//     },
    
//     '& .MuiDrawer-paper': {
//       width:"120px",        
//       color : '#000',
//       marginTop: "55%",
//       marginLeft:"0%",
//       height: "87%",
//       display: "flex",
//       zIndex: "55555",
//       position: "relative",
//       overflow: 'auto',
//       paddingLeft: "initial",
//       // border: "2px solid #5514B4",
//       backgroundColor:"#eee"
//     },
//     '& .MuiTypography-root': {
//       textAlign: "center",
//       color: "#000",
//       fontWeight: "bold",
//     },
//     '& .MuiList-padding':{
//       paddingTop:"90px",
//     },
//     '& .MuiListItem-button': {
//       backgroundColor: "#c6abed75",
//       // border:"1px solid #5514B4",
//       border:"1px solid rgba(85, 20, 180,0.2)",
//       borderRadius : "10px",
//       marginTop: "2%",
//       },
     
//   },
// }));

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//    [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#5514B4",
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     //   backgroundColor: "#e4d6fa",
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
//   [`&.${tableRowClasses.hover}`]: {
//     fontSize: 14,
//     "&:hover": {
//       backgroundColor: "#e4d6fa",
//     },
//   },
// }));

 

// function createData(id, name, active, dategiven) {
//   return { id, name, active, dategiven };
// }

// const originalrows = [
//   createData("id_11", "User 1", "Y", "30-05-2019"),
//   createData("id_12", "User 2", "Y", "31-03-2021"),
//   createData("id_13", "User 3", "N", "12-02-2020"),
//   createData("id_14", "User 4", "Y", "30-04-2022"),
//   createData("id_15", "User 5", "N", "15-05-2020"),
//   createData("id_16", "User 1", "Y", "30-05-2019"),
//   createData("id_17", "User 2", "Y", "31-03-2021"),
//   createData("id_18", "User 3", "N", "12-02-2020"),
//   createData("id_19", "User 4", "Y", "30-04-2022"),
//   createData("id_20", "User 5", "N", "15-05-2020"),
// ];

// function CorpScreen() {

//   const editCell=(e,e_id)=>{
//     console.log("Edit Button CLicked");
//     // console.log(e);
//     // console.log(e_id);
//     // console.log("-----------");
//   }

//   const deleteCell=(e,e_id)=>{
//     console.log("Delete Button CLicked");
//   }

//   const classes = useStyle();
//   const navigate= useNavigate();

//   //search compo related
//   const [searched, setSearched] = useState("");
//   const [rows, setRows] = useState(originalrows);

//   const requestSearch = (searchedVal) => {
//     const filteredRows = originalrows.filter((row) => {
//       return row.name.toLowerCase().includes(searchedVal.toLowerCase());
//     });
//     setRows(filteredRows);
//   };

//   const cancelSearch = () => {
//     setSearched("");
//     requestSearch(searched);
//   };
//  //--------------------------
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Wrap heading="CORP Screen : Routing Plan">
//         <Container
//           component={Box}
//           style={{
//             position: "relative",
//             paddingLeft: "initial",
//             zIndex: "1",
//             // marginTop: "-80px",
//             //marginTop: "-50px",
//             marginTop: "-70px",
//             //marginLeft: "10px",
//             //marginRight: "4.5%",
//             display: "flex",
//             justifyContent: "center",
            
//           }}
//         >
          
         
//           <Paper
//             //alignSelf="center"
//             display="flex"
//             justifyContent=" center"
//             elevation={4}
//             component={Box}
//             sx={{
//               paddingLeft: "initial",
//               borderRadius: "13px",
//               border: "1px solid #5514B4",
//               width: "90%",
//               //marginTop: "100px",
//               overflow : "hidden"
//             }}
//             p={4}
           
           
//           >
         
//           <Drawer 
//             className={classes.rootClass}
//             variant="persistent"
//             open={true}>
//               <List>
//                 <ListItem button onClick={()=>navigate("/references/CorpScreen/Details")}>
//                     <ListItemText primary={"Details"} />
//                 </ListItem>
//                 <ListItem button onClick={()=>navigate("/references/CorpScreen/AccessNo")}>
//                     <ListItemText primary={"Access No"} />
//                 </ListItem>
//                 <ListItem button onClick={()=>navigate("/references/CorpScreen/RoutingPlan")}>
//                     <ListItemText primary={"Routing Plan"} />
//                 </ListItem>
//                 <ListItem button onClick={()=>navigate("/references/CorpScreen/EndPoints")}>
//                     <ListItemText primary={"End Points"} />
//                 </ListItem>
//               </List>
//           </Drawer>
//            {/* marginLeft:"1%" */}
           
//           <Box sx={{width: "85%",}}>  
//             <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
//               <SearchBar
//                 value={searched}
//                 onChange={(searchVal) => requestSearch(searchVal)}
//                 onCancelSearch={() => cancelSearch()}
//                 style={{
//                     width:"80%",
//                     border : "1px solid #5514B4",
//                     height:"40px",
//                 }}
//               />

//               <Tooltip title="Add New"  placement="top" arrow>
//                 <Button>
//                     <AddBoxIcon style={{color: "#5514B4",height:"30px",width:"30px"}}/>
//                 </Button>
//               </Tooltip>

//               <Tooltip title="Uplaod"  placement="top" arrow>
//                 <Button>
//                     <UploadIcon style={{color: "#5514B4",height:"30px",width:"30px"}}/>
//                 </Button>
//               </Tooltip>
//               <StaticFavTemplate name ='CorpScreen' label="CORP"  space = {11}/>
//             </Box>

//             <Box sx={{marginTop:"1%",border: "1px solid #5514B4"}}>
//               <Grid item lg={12} md={12} sm={12} xs={12}>
//               <TableContainer sx={{height:"450px"}}>
//                 <Table sx={{ height: "max-content"}} stickyHeader aria-label="simple table">
      
//                   <TableHead>
//                     <StyledTableRow>
//                       <StyledTableCell align="right">Id</StyledTableCell>
//                       <StyledTableCell align="right">Name</StyledTableCell>
//                       <StyledTableCell align="right">Active</StyledTableCell>
//                       <StyledTableCell align="right">Date</StyledTableCell>
//                       <StyledTableCell align="right">Edit</StyledTableCell>
//                       <StyledTableCell align="right">Edit</StyledTableCell>
//                       <StyledTableCell align="right">Delete</StyledTableCell>
//                     </StyledTableRow>
//                   </TableHead>
//                   <TableBody sx={{padding:"0px"}}>
//                     {originalrows.map((row) => (
//                       <StyledTableRow
//                         hover
//                         key={row.id}
//                         sx={{
//                           "&:last-child td, &:last-child th": { border: 0 },
//                         }}
                        
//                       >
//                         <StyledTableCell
//                           align="right"
//                           component="th"
//                           scope="row"
//                         >
//                           {row.id}
//                         </StyledTableCell>
//                         <StyledTableCell align="right">
//                           {row.name}
//                         </StyledTableCell>
//                         <StyledTableCell align="right">
//                           {row.active}
//                         </StyledTableCell>
//                         <StyledTableCell align="right">
//                           {row.dategiven}
//                         </StyledTableCell>
//                         <StyledTableCell align="right">
//                           <Button style={{color: "#5514B4"}} onClick={(e)=>editCell(row.id)}>
//                             <MenuIcon />
//                           </Button>
//                         </StyledTableCell>
//                         <StyledTableCell align="right">
//                           <Button style={{color: "#5514B4"}} onClick={(e)=>editCell(row.id)}>
//                             <EditIcon />
//                           </Button>
//                         </StyledTableCell>
//                         <StyledTableCell align="right">
//                           <Button style={{color: "#5514B4"}} onClick={(e)=>deleteCell(row.id)}>
//                             <DeleteIcon />
//                           </Button>
//                         </StyledTableCell>
//                       </StyledTableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>  
//               </Grid>
//               {/* <Grid item lg={6} md={6} sm={6} xs={6}>
//               </Grid> */}
            
//             </Box>
//           </Box>
          
          
//           </Paper>
//         </Container>
//       </Wrap>
//     </ThemeProvider>
//   );
// }

// export default CorpScreen;
