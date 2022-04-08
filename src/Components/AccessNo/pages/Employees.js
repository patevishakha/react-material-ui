import React, {useState} from 'react'
import EmployeeForm from "../pages/EmployeeForm";
// import PageHeader from "../../components/PageHeader";
//import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles} from '@material-ui/core';
import Table2 from "../Table2/Table2";
import Table1 from "../Table1/Table1";
 import Table3 from "../Table3/Table3";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(3),
        background:"#F0F0F0"

    }
}))


export default function Employees() {

    const classes= useStyles();

    
   

    return (
        <>
            
            <Paper className={classes.pageContent}>
                
               <EmployeeForm />  <br/> <br/>
              <Table1/>  <br/> <br/>
               <Table2/> <br/> <br/> 
               <Table3/>    
            {/* //    <Table3 copy/>  */}
             
               
            </Paper>
        </>
    )
}