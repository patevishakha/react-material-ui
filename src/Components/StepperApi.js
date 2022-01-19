import React from "react";
import { useState } from "react";
import {Stepper,Step,StepLabel, makeStyles} from "@material-ui/core";
import {Grid,Paper,Box,Container,CssBaseline,Button,Typography} from "@material-ui/core";

// import Workflowbasicparameters from "./BodyComponents/Workflowbasicparameters";
// import Lookup from "./BodyComponents/Lookup";
// import Routing from "./BodyComponents/Routing";

import AllComponent from "./Forms/AllComponent";
import AllComponent3 from "./Page3/AllComponent3";
import AllComponent4 from "./Page4/AllComponent4";
import AllComponent5 from "./Page5/AllComponent5";
import AllComponent6 from "./Page6/AllComponent6";
import AllComponent7 from "./Page7/AllComponent7";


function getSteps(){
    return[
        "Step1",
        "Step2",
        "Step3",
        "Step4",
        "Step5",
        "Step6"
    ];
}

function getForms(step_no){
    switch(step_no){
        case 0:
            return(<AllComponent/>);
        case 1:
            return(<AllComponent3/>); 
        case 2:
            return(<AllComponent4/>);       
        case 3:
            return(<AllComponent5/>);
        case 4:
            return(<><AllComponent6/></>);
        case 5:
            return(<><AllComponent7/></>);                 
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
                    
                    {activeStep===6?(
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
                                {activeStep===5 ? "FINISH" : "NEXT"}
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
