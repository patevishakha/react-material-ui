import React from 'react'
import {Checkbox,FormControlLabel,Grid,makeStyles,Radio,RadioGroup,TextField,} from "@material-ui/core";
import { useState } from 'react';
import { FormControl,InputLabel,Select,MenuItem,FormLabel} from '@material-ui/core';

function AppIdandRouting() {
      const initialValues = {
        id:0,
      
        isRoutingPlan : "No",
        routing_plan:" ",
        
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

            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
                
                {/* <RadioGroup aria-label="Create Routing Plan ?" value={Values.isRoutingPlan}
                    name = "isRoutingPlan"
                    onChange={handleChange} >
                    <FormLabel >Create Routing Plan ?</FormLabel>
                    <FormControlLabel
                    value="Yes"
                    label="Yes"
                    control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                    value="No"
                    label="No"
                    control={<Radio color="primary" />}
                    />
                </RadioGroup>  */}
                
                <FormControl component="fieldset">
                    <FormLabel style={{textAlign : 'left'}} component="legend">Create Routing Plan ?</FormLabel>
                        <RadioGroup
                            aria-label="Create Routing Plan ?"
                            name="isRoutingPlan"
                            value={Values.isRoutingPlan}
                            onChange={handleChange}
                            row={true}
                            >
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        </RadioGroup>
                </FormControl>        
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                <FormControl variant="outlined"  size="small" >
                <InputLabel id="select-page5-1">Routing Plan : </InputLabel>
                        <Select
                            labelId="select-page5-1"
                            label="Search Type"
                            id="label-page5-1"
                            name= "routing_plan"
                            value={Values.routing_plan}
                            onChange={handleChange}
                            >
                                <MenuItem value="routing1">Routing 1</MenuItem>
                                <MenuItem value="routing2">Routing 2</MenuItem>
                                <MenuItem value="routing3">Routing 3</MenuItem>
                                
                        </Select>
                </FormControl>
                </Grid>
                {/* <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>   </Grid>
                    <Grid item xs={12} md={6} lg={6}> </Grid>
                </Grid>                 */}
                
            </Grid>
    );
  }
  export default AppIdandRouting;
  