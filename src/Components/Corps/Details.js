import React,{useState} from "react";
import {CssBaseline,Container,Paper,Box,Typography,Tooltip} from "@material-ui/core";
import {Drawer, List, ListItem,ListItemIcon, ListItemText} from "@material-ui/core";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,styled,tableCellClasses,tableRowClasses,Button,} from "@mui/material";
import { ThemeProvider } from "@material-ui/core/styles";
import {useNavigate , Routes, Route, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";

import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from '@mui/icons-material/AddBox';
import UploadIcon from '@mui/icons-material/Upload';

import StaticFavTemplate from "../FavouritesTemplates/StaticFavTemplate";
const useStyle = makeStyles((theme) => ({
  // drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  backgroundColourClass: {
    backgroundColor: "#eee",
  },
  typographyClass: {
    // fontWeight: "bold",
  },

  rootClass: {
    '& .MuiPaper-root':{
      paddingLeft: "initial",
    },
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
      //paddingTop: "100px",
      //backgroundColor: "red",
    },

    "& .MuiTypography-root": {
      width: "90%",
      //backgroundColor: "red",
    },
    "& .MuiBox-root-19": {
      display: "flex",
      justifyContent: "center",
    
    },
    
    '& .MuiDrawer-paper': {
      width:"120px",        
      color : '#000',
      marginTop: "55%",
      marginLeft:"0%",
      height: "87%",
      display: "flex",
      zIndex: "55555",
      position: "relative",
      overflow: 'auto',
      paddingLeft: "initial",
      // border: "2px solid #5514B4",
      backgroundColor:"#eee"
    },
    '& .MuiTypography-root': {
      textAlign: "center",
      color: "#000",
      fontWeight: "bold",
    },
    '& .MuiList-padding':{
      paddingTop:"90px",
    },
    '& .MuiListItem-button': {
      backgroundColor: "#c6abed75",
      // border:"1px solid #5514B4",
      border:"1px solid rgba(85, 20, 180,0.2)",
      borderRadius : "10px",
      marginTop: "2%",
      },
     
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5514B4",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    //   backgroundColor: "#e4d6fa",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  [`&.${tableRowClasses.hover}`]: {
    fontSize: 14,
    "&:hover": {
      backgroundColor: "#e4d6fa",
    },
  },
}));

 

function createData(id, name, active, dategiven) {
  return { id, name, active, dategiven };
}

const originalrows = [
  createData("id_11", "User 1", "Y", "30-05-2019"),
  createData("id_12", "User 2", "Y", "31-03-2021"),
  createData("id_13", "User 3", "N", "12-02-2020"),
  createData("id_14", "User 4", "Y", "30-04-2022"),
  createData("id_15", "User 5", "N", "15-05-2020"),
  createData("id_16", "User 1", "Y", "30-05-2019"),
  createData("id_17", "User 2", "Y", "31-03-2021"),
  createData("id_18", "User 3", "N", "12-02-2020"),
  createData("id_19", "User 4", "Y", "30-04-2022"),
  createData("id_20", "User 5", "N", "15-05-2020"),
];

function Details
() {

  const editCell=(e,e_id)=>{
    console.log("Edit Button CLicked");
    // console.log(e);
    // console.log(e_id);
    // console.log("-----------");
  }

  const deleteCell=(e,e_id)=>{
    console.log("Delete Button CLicked");
  }

  const classes = useStyle();
  const navigate= useNavigate();

  //search compo related
  const [searched, setSearched] = useState("");
  const [rows, setRows] = useState(originalrows);

  const requestSearch = (searchedVal) => {
    const filteredRows = originalrows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
 //--------------------------
  return (
    <>
            
            <StaticFavTemplate name ='EndPoints' label="End Points"  space = {11}/>
            <Box sx={{marginTop:"1%",border: "1px solid #5514B4",height:"500px"}}>
              <Grid item lg={12} md={12} sm={12} xs={12} >
                  <Typography style={{color:"#000",fontWeight:"bold"}}>Details Page</Typography>
              </Grid>
            
          </Box>
          
    </>
  );
}

export default Details
;
