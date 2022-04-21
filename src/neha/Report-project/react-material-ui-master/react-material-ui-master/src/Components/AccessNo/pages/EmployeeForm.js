import React, { useState, useEffect } from 'react'
import { Grid, Typography, } from '@material-ui/core';
import Controls from "../controls/Controls";
import { useForm, Form } from "../controls/UseForm";
import * as employeeService from "../AccessNoServices/employeeService";
import * as switchId from "../AccessNoServices/originatingSwitchId";
import * as countryOrigin from "../AccessNoServices/countryOrigin"
import * as entryId from "../AccessNoServices/pointOfEntry";
import * as screeningPlan from "../AccessNoServices/activeScreeningPlan";
import * as endId from "../AccessNoServices/endPoint";
import { blue } from '@material-ui/core/colors';


const GenderItems = [
    { id: 'ANisprebuilt', title: 'AN is pre-built' },
    { id: 'ForWebRTC', title: 'For WebRTC' },
]
const initialFValues = {
    id:0,
    Label: '',
    ApplicationId: '',
    NetworkAddress: '',
    AccessNumber: '',
    Gender: 'ANisprebuilt',
    employeeService:'',
    VOIPChannel: '',
    excode:'',
    SwitchId:'',
    countryOrigin:'',
    entryId:'',
    AccessNumber:'',
    inCountryDailing:'',
    PTTrestrictedmode: false,
    SMSservice:false,
    smartNumbersEnabled:false,
    screeningPlan:'',
    endId:'',
    anset:'',
    FlexibleCLI:'',
    FlexibleFrame:'',
    switchId:'',
    OriginatingTruckID:'',
    Notes:'',

}

export default function EmployeeForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('Label' in fieldValues)
            temp.Label = fieldValues.Label ? "" : "This field is required."
        if ('ApplicationId' in fieldValues)
            temp.ApplicationId = fieldValues.ApplicationId.length > 10 ? "" : "ID is not valid."
        if ('NetworkAddress' in fieldValues)
            temp.NetworkAddress = fieldValues.NetworkAddress.length > 9 ? "" : "Minimum 10 numbers required."
        if ('AccessNumber' in fieldValues)
            temp.AccessNumber = fieldValues.AccessNumber.length != 0 ? "" : "This field is required."
        
            setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            employeeService.insertEmployee(values)
            resetForm()
        }
    }
    

    
    return (
        <Form onSubmit={handleSubmit}>
           <h2 style={{color:blue[700]}}>AN PARAMETERS</h2> 
            <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12} >
                
                    <Controls.Input
                        name="Label"
                        label="Label"
                        value={values.Label}
                        onChange={handleInputChange}
                        error={errors.Label}
                    
                    />
                    <Controls.Input
                        label="Application ID"
                        name="ApplicationId"
                        value={values.ApplicationId}
                        onChange={handleInputChange}
                        error={errors.ApplicationId}
                        
                    />
                    <Controls.Input
                        label="Network Address"
                        name="NetworkAddress"
                        value={values.NetworkAddress}
                        onChange={handleInputChange}
                        error={errors.NetworkAddress}
                    />
                    <Controls.Input
                        label="Access Number"
                        name="AccessNumber"
                        value={values.AccessNumber}
                        onChange={handleInputChange}
                        error={errors.AccessNumber}
                        
                    />
                    <Controls.RadioGroup
                        name="Gender"
                        value={values.Gender}
                        onChange={handleInputChange}
                        items={GenderItems}
                    />
                      <Controls.Select
                        name="employeeService"
                        label="Inbound Access Type"
                        value={values.employeeService}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        
                    />
                    <Controls.Input
                        label="VOIP Channel"
                        name="VOIPChannel"
                        value={values.VOIPChannel}
                        onChange={handleInputChange}
                        
                    />
                    <Controls.Input
                        label="External Code"
                        name="excode"
                        value={values.excode}
                        onChange={handleInputChange}
                        error={errors.excode}
                    />
                     <Controls.Select
                        name="screeningPlan"
                        label="Active Screening Plan"
                        value={values.screeningPlan}
                        onChange={handleInputChange}
                        options={screeningPlan.getDepartmentCollection()}
                    />
                    <Controls.Select
                        name="endId"
                        label="End point for Barred Calls"
                        value={values.endId}
                        onChange={handleInputChange}
                        options={endId.getDepartmentCollection()}
                    />
                      <div>
                      <h2 style={{color:blue[700]}}>ANSET</h2> 
                    <Controls.Input
                        label="anset"
                        name="anset"
                        value={values.anset}
                        onChange={handleInputChange}
                    />
                    </div>
                   

                </Grid>
                <Grid item sm={6}>
                <Controls.Select
                        name="switchId"
                        label="Originating Switch ID"
                        value={values.switchId}
                        onChange={handleInputChange}
                        options={switchId.getDepartmentCollection()}
                        
                    />
                    <Controls.Input
                        label="Originating Truck ID"
                        name="OriginatingTruckID"
                        onChange={handleInputChange}
                        value={values.OriginatingTruckID}
                        />
                    <Controls.Select
                        name="countryOrigin"
                        label="Country of Origin"
                        value={values.countryOrigin}
                     onChange={handleInputChange}
                        options={countryOrigin.getDepartmentCollection()}
                    />
                    <Controls.Select
                        name="entryId"
                        label="Point of Entry"
                        value={values.entryId}
                     onChange={handleInputChange}
                        options={entryId.getDepartmentCollection()}
                    />
                    
                    <Controls.Input
                        label="Notes"
                        name="Notes"
                        value={values.Notes}
                        onChange={handleInputChange}
                    />
                    <div >
                    <Controls.Checkbox
                        name="PTTrestrictedmode"
                        label="PTT restricted mode"
                        value={values.PTTrestrictedmode}
                        onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                        name="SMSservice"
                        label="SMS Service"
                        value={values.SMSservice}
                        onChange={handleInputChange}
                        
                    />
                     <Controls.Checkbox
                        name="smartNumbersEnabled"
                        label="Smart Number Enabled"
                        value={values.smartNumbersEnabled}
                        onChange={handleInputChange}
                        
                    />
                    </div >
                    <div>
                    <h2 style={{color:blue[700]}}>FLEXIBLE CLI</h2> 
                    <Controls.Input
                        name="FlexibleCLI"
                        label="Flexible CLI"
                        value={values.FlexibleCLI}
                        onChange={handleInputChange}
                        />
                   <Controls.Input
                        label="Flexible Frame"
                        name="FlexibleFrame"
                        value={values.FlexibleFrame}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                    
                  </Grid>
                  
                  
                    
                   
                
                    
                  
                  </Grid>
                 
            
        </Form>
    )
 }