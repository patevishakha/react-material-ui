import React,{useContext} from 'react'
import {Checkbox,FormControlLabel,Grid,makeStyles,Radio,RadioGroup,TextField,FormControl,FormLabel} from "@material-ui/core";

import { Context } from "../GlobalData/Store";
import Service1 from "../services/Service1";

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
    const [state, setState] = useContext(Context);

    const handleInputValues = (event, values) => {
        const { name, value } = event.target;
        
        setState({
        ...state,
        [name]:
            name === "isCaptureDialPlan"
            ? event.target.checked
            : value,
        });
        
        const id=state.id;
        Service1.updateData(state, id).then((res) => {});

    };

    return (
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={6}>
                
                <FormControl component="fieldset">
                    <RadioGroup
                            style={{display: "flex",
                            justifyContent: "center",}}
                            value={state.radio_appId}
                            name = "radio_appId"
                            onChange={handleInputValues}
                            row={true}
                            >
                                <FormControlLabel value="Existing AppId"  control={<Radio color="primary" />} label="Existing AppId" />
                                <FormControlLabel value="Generate AppId" control={<Radio  color="primary"/>} label="Generate AppId" />
                    </RadioGroup>
                </FormControl>        

            
                </Grid> 
                <Grid  item xs={12} md={12} lg={6}>  
                <FormControlLabel style={{align : 'left'}}
                        control={<Checkbox  color="primary" />}
                        label="Capture Dial Plan?"
                        name = "isCaptureDialPlan"
                        
                        checked={state.isCaptureDialPlan}
                        value={state.isCaptureDialPlan}
                        onChange={handleInputValues}
                />
                </Grid>
            </Grid>
    );
  }
  export default AppId;
  