import React from "react";
import {Checkbox,FormControlLabel,Grid,makeStyles,Radio,RadioGroup,TextField,} from "@material-ui/core";
import { useState } from 'react';
import { FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';

// import countries from '../ReusabelComponents/Data/countries';
// import SearchableDropDown from "../ReusabelComponents/SearchableDropDown";

  
  
  
  const useStyles=makeStyles((theme)=>({
      grid:{
          margin:"1.5em",
          marginBottom:"2em"
      }
  }))
  
  
  
  function Lookup() {
      const classes=useStyles();
      const initialValues = {
        id:0,
        radio_button_value : "Pre Built Number",
        auto_look_up : false,
        search_type : " ",
        country:" ",
        switch : " ",
        search_no : 0,
        quantity : 0,
        exact : false,
    }
    const [Values, setValues] = useState(initialValues);

    const handleChange = (event)=>{
        const {name,value} = event.target
        setValues({
            ...Values,
            [name] : value
        })
        console.log("name : "+name+"--- value : "+value);
    }

    return (
            <Grid>
                <RadioGroup value={Values.radio_button_value}
                    name = "radio_button_value"
                    onChange={handleChange} >
                    <FormControlLabel
                    value="BT or Supplier Owned Number"
                    label="BT or Supplier Owned Number"
                    control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                    value="Customer Owned Number"
                    label="Customer Owned Number"
                    control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                    value="Pre Built Number"
                    label="Pre Built Number"
                    control={<Radio color="primary" />}
                    />
                </RadioGroup>
                
                
                <FormControl variant="outlined"  size="small" >
                <InputLabel id="select-page3-1">Search Type : </InputLabel>
                        <Select
                            labelId="select-page3-1"
                            label="Search Type"
                            id="label-page3-1"
                            name= "search_type"
                            value={Values.search_type}
                            onChange={handleChange}
                            >
                                <MenuItem value="search1">search-type 1</MenuItem>
                                <MenuItem value="search2">search-type 2</MenuItem>
                                <MenuItem value="search3">search-type 3</MenuItem>
                                
                        </Select>
                </FormControl>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <FormControl variant="outlined"  size="small" >
                        <InputLabel id="select-page3-2">Country : </InputLabel>
                                <Select
                                    labelId="select-page3-2"
                                    label="country"
                                    id="label-page3-2"
                                    name= "country"
                                    value={Values.country}
                                    onChange={handleChange}
                                    >
                                        <MenuItem value="India">India</MenuItem>
                                        <MenuItem value="America">America</MenuItem>
                                        <MenuItem value="Japan">Japan</MenuItem>
                                        
                                </Select>
                        </FormControl>
                    </Grid>
                
                    <Grid item xs={12} md={6} lg={6}>
                        <FormControl variant="outlined"  size="small" >
                        <InputLabel id="select-page3-3">Switch </InputLabel>
                                <Select
                                    labelId="select-page3-3"
                                    label="Switch"
                                    id="label-page3-3"
                                    name= "switch"
                                    value={Values.switch}
                                    onChange={handleChange}
                                    >
                                        <MenuItem value="Switch1">Switch 1</MenuItem>
                                        <MenuItem value="Switch2">Switch 2</MenuItem>
                                        <MenuItem value="Switch3">Switch 3</MenuItem>
                                        
                                </Select>
                        </FormControl>
                    </Grid>
                </Grid>        
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                size = 'small'
                                type="number"
                                variant="outlined"
                                label="Search No"
                                value={Values.search_no}
                                name= "search_no"
                                onChange={handleChange}
                            />
                        </Grid> 
                        <Grid item xs={12} md={6} lg={6}>   
                        <TextField
                            size = 'small'
                            type="number"
                            variant="outlined"
                            label="Quantity"
                            value={Values.search_no}
                            name= "search_no"
                            onChange={handleChange}
                            // style={{ width: "75%" }}
                        /> 
                        </Grid>
                    </Grid>   

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={6}>
                            <FormControlLabel
                                control={<Checkbox  color="primary" />}
                                label="Auto Look Up?"
                                value={Values.auto_look_up}
                                onChange={handleChange}
                            /> 
                        </Grid>  
                        <Grid item xs={12} md={6} lg={6}>
                            <FormControlLabel
                                control={<Checkbox  color="primary" />}
                                label="Exact?"
                                value={Values.exact}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>    
                        
            </Grid>
    );
  }
  export default Lookup;
  