import React from 'react'
import { useState } from 'react';
import { FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';

// import { FormControl,Select,MenuItem ,InputLabel} from '@material-ui/core'

function Element() {
    const initialValues = {
        id:0,
        Created_Access_No:" ",
    }
    const [Values, setValues] = useState(initialValues);

    const handleSelectChange = (event)=>{
        const {name,value} = event.target
        setValues({
            ...Values,
            [name] : value
        })
        console.log("name : "+name+"--- value : "+value);
    }
    return (
          <div>
            <form>
                <FormControl variant="outlined"  size="small" >
                <InputLabel id="select-label-page7">Created Access No : </InputLabel>
                        <Select
                            labelId="select-label-page7"
                            label="Created Access No"
                            id="select-page7"
                            name= "Created_Access_No"
                            value={Values.Created_Access_No}
                            onChange={handleSelectChange}
                            >
                                <MenuItem value="Value1">Value 1</MenuItem>
                                <MenuItem value="Value2">Value 2</MenuItem>
                                <MenuItem value="Value3">Value 3</MenuItem>
                                
                            </Select>
                        </FormControl>
            </form>
        </div>
    )
}

export default Element
