import {Grid ,TextField } from '@material-ui/core';
import { FormControl,InputLabel,Select,MenuItem,FormControlLabel,Checkbox,Button} from '@material-ui/core';
import { useState } from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core';
import React from 'react'
import theme from '../Theme';



 const useStyle = makeStyles(theme=>({
     rootClass : {
 
         '& .MuiAutocomplete-root' : {
         width:'50%',
         margin:theme.spacing(1)
         },     
     }
 }))
 

const initialValues = {
    id:0,
    // tpRadioButtonGender : 'male',
    requestNO:'',
    countryOfOrigin : '',
    inboundAccessType : '',
    isMultiBuild : false,
    bulkAccessNoWorkflow : '',
    SIOAcceptatnceDate : '',
    customerCommitDate : '',
}

function FormElement2() {
    const classes = useStyle();
    const [Values, setValues] = useState(initialValues);

    const handleInputs = (event,values)=>{
        const {name,value} = event.target
        setValues({
            ...Values,
            [name] : value
        })
    }

    const handleShow = (event) => {
        event.preventDefault();
        console.log(Values);
        
      };
    
    return (
        
            <form>
                    <TextField
                        size = 'small'
                        variant="outlined"
                        label="Request No"
                        value={Values.requestNO}
                        name= "requestNO"
                        onChange={handleInputs}
                    />
                    <FormControl  variant="outlined"  size="small" onChange={handleInputs}>
                            <InputLabel id="select-label1">Country Of Origin</InputLabel>
                            <Select
                                labelId="select-label1"
                                value={Values.countryOfOrigin}
                                id="select1"
                                label="countryOfOrigin"
                                name= "countryOfOrigin"
                                onChange={handleInputs}
                            >
                                <MenuItem value="Value1">Value 1</MenuItem>
                                <MenuItem value="Value2">Value 2</MenuItem>
                                <MenuItem value="Value3">Value 3</MenuItem>

                            </Select>
                            
                    </FormControl>
                    
                        <FormControl variant="outlined"  size="small" >
                            <InputLabel id="select-label2">Inbound Access Type</InputLabel>
                            <Select
                                labelId="select-label2"
                                value={Values.inboundAccessType}
                                label="inboundAccessType"
                                id="select2"
                                name= "inboundAccessType"
                                onChange={handleInputs}
                            >
                                <MenuItem value="Value1">Value 1</MenuItem>
                                <MenuItem value="Value2">Value 2</MenuItem>
                                <MenuItem value="Value3">Value 3</MenuItem>
                                
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined"  size="small" >
                            <InputLabel id="select-label3">Bulk Access No Workflow</InputLabel>
                            <Select
                                labelId="select-label3"
                                value={Values.bulkAccessNoWorkflow}
                                label="bulkAccessNoWorkflow"
                                id="select3"
                                name= "bulkAccessNoWorkflow"
                                onChange={handleInputs}
                            >
                                <MenuItem value={1}>NO 1</MenuItem>
                                <MenuItem value={2}>NO 2</MenuItem>
                                <MenuItem value={3}>NO 3</MenuItem>
                                
                            </Select>
                        </FormControl>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={6}>
                                  
                                <TextField
                            size = 'small'
                            id="date1"
                            label="SIO Acceptatnce Date"
                            value={Values.SIOAcceptatnceDate}
                            type="date"
                            // defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name= "SIOAcceptatnceDate"
                            onChange={handleInputs}
            
                        />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                  <TextField
                            id="date1"
                            label="Customer Commit Date"
                            type="date"
                            value={Values.customerCommitDate}
                            // defaultValue="2017-05-24"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            name= "customerCommitDate"
                            onChange={handleInputs}
                        />
                            </Grid>
                        </Grid>  

                        
                        
                        <FormControlLabel 
                            control={
                                <Checkbox  
                                    value={Values.isMultiBuild}
                                    name="isMultiBuild"
                                    onChange={handleInputs}
                                />
                            } 
                            label="Multi Build" />

                        <Button variant="contained" color="primary" type="submit" onClick={handleShow}>
                            Show
                        </Button>
                    
            </form>
           
    )
}

export default FormElement2
