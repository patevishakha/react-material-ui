import React from 'react'
import {Checkbox,FormControlLabel,Grid,makeStyles,Radio,RadioGroup,TextField,} from "@material-ui/core";
import { useState } from 'react';
import { FormControl,InputLabel,Select,MenuItem,FormLabel} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    groupClass: {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
    },
}))

function AppId() {
    const classes = useStyles();
      const initialValues = {
        id:0,
        radio_appId : "Existing AppId",
        isCaptureDialPlan : false,

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
                <Grid item xs={12} md={6} lg={6}>
                <RadioGroup value={Values.radio_appId}
                    name = "radio_appId"
                    onChange={handleChange} >
                    <FormControlLabel
                    value="Existing AppId"
                    label="Existing AppId"
                    control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                    value="Generate AppId"
                    label="Generate AppId"
                    control={<Radio color="primary" />}
                    />
                </RadioGroup>
                </Grid> 
                <Grid item xs={12} md={6} lg={6}>  
                <FormControlLabel
                        control={<Checkbox  color="primary" />}
                        label="Capture Dial Plan?"
                        value={Values.isCaptureDialPlan}
                        onChange={handleChange}
                />
                </Grid>
            </Grid>
    );
  }
  export default AppId;
  