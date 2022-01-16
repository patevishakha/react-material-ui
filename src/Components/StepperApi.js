import React from "react";
import { useState } from "react";
import {Stepper,Step,StepLabel, makeStyles} from "@material-ui/core";
import {Grid,Paper,Box,Container,CssBaseline,Button,Typography} from "@material-ui/core";

import AllComponent from "./Forms/AllComponent";
import AllComponent2 from "./Page6/AllComponent2";
import AllComponent3 from "./Page7/AllComponent3";


function getSteps(){
    return[
        "Step1",
        "Step2",
        "Step3",
    ];
}

function getForms(step_no){
    switch(step_no){
        case 0:
            return(<AllComponent/>);
        case 1:
            return(<AllComponent2/>);
        case 2:
            return(<><AllComponent3/></>);    
        default:
            return "Defalut Case";        

    }
}

function StepperApi() {

  const [activeStep, setActiveStep] = useState(0);
  const eachsteps = getSteps();

  const nextStep = () => {
    setActiveStep(activeStep+1);
  };
  const previousStep = () => {
    setActiveStep(activeStep-1);
  };
 
  return (
    <>
      <Grid container direction="row">
      <CssBaseline />
            <Container  component={Box} >
                <Paper component={Box} p={2}>
                    
                    {activeStep===3?(
                        <Typography>THANKS</Typography>
                    ):
                        <>  
                            <Stepper activeStep={activeStep}>
                                {
                                    eachsteps.map((step_name,index)=>{
                                        return(
                                            <Step>
                                                <StepLabel>{step_name}</StepLabel>
                                            </Step>
                                        )
                                    })
                                }
                            </Stepper>
                            <form>
                                {getForms(activeStep)}
                            </form>
                            <Button style={{marginRight:'2%',marginTop:'2%'}} variant="contained" color="primary" disabled={activeStep===0} onClick={previousStep}>BACK</Button>
                            <Button style={{marginTop:'2%'}} variant="contained" color="primary" onClick={nextStep}>
                                {activeStep===2 ? "FINISH" : "NEXT"}
                            </Button>
                        </>
                    }

                    
                </Paper>
            </Container>   
      </Grid>
    </>
  );
}
export default StepperApi;
