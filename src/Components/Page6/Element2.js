import React from 'react'
import { useState } from 'react'
import { TextField } from '@material-ui/core';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';


function Element2() {
    const initialValues = {
        id:0,
        HT_RTO_Date : " ",
        Order_Placed_To_Ptt_Date : " ",
        Ptt_Service_Delivered_Date : " ",
    }
    const [Values, setValues] = useState(initialValues);

    const handleDateChange = (event)=>{
        const {name,value} = event.target
        setValues({
            ...Values,
            [name] : value
        })
        console.log("name : "+name+"--- value : "+value);
    }

    const handleShow = (event) => {
        event.preventDefault();
        console.log(Values);
      };

    return (
        <>
            <TextField
                            id="date1"
                            label="HT RTO Date : "
                            type="date"
                            value={Values.HT_RTO_Date}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            name= "HT_RTO_Date"
                            onChange={handleDateChange}
            />

            <TextField
                            id="date2"
                            label="Order Placed To Ptt Date : "
                            type="date"
                            value={Values.Order_Placed_To_Ptt_Date}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            name= "Order_Placed_To_Ptt_Date"
                            onChange={handleDateChange}
            />
            
            <TextField
                            id="date3"
                            label="Ptt Service Delivered Date : "
                            type="date"
                            value={Values.Ptt_Service_Delivered_Date}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            name= "Ptt_Service_Delivered_Date"
                            onChange={handleDateChange}
            />

            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                id="outlined-uncontrolled"
                label="Ptt Service Delivered Date : "
                value={selectedDate}
                onChange={handleDateChange}
                />
            </MuiPickersUtilsProvider> */}
        </>

    )
}

export default Element2


