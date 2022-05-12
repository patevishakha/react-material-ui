import React from "react";
import { useState, useEffect, useContext } from "react";
import { Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";
import {
  Grid,
  Paper,
  Box,
  Container,
  CssBaseline,
  Button,
  Typography,
} from "@material-ui/core";

import Service1 from "./services/Service1";
import { Context } from "./GlobalData/Store";

import AllComponent from "./Forms/AllComponent";
import AllComponent3 from "./Page3/AllComponent3";
import AllComponent4 from "./Page4/AllComponent4";
import AllComponent5 from "./Page5/AllComponent5";
import AllComponent6 from "./Page6/AllComponent6";
import AllComponent7 from "./Page7/AllComponent7";
import Wrap from "./Wrap";

const useStyle = makeStyles((theme) => ({
  rootClass: {
    "& .MuiPaper-root": {
      //background : '#caabf6',
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#5514B4",
    },
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "#5514B4",
    },
  },
  customTextField: {
    "& input::placeholder": {
      fontWeight: "bold",
    },
  },
}));

function getSteps() {
  return ["Step1", "Step2", "Step3", "Step4", "Step5", "Step6"];
}

function getForms(step_no) {
  switch (step_no) {
    case 0:
      return <AllComponent />;
    case 1:
      return <AllComponent3 />;
    case 2:
      return <AllComponent4 />;
    case 3:
      return <AllComponent5 />;
    case 4:
      return (
        <>
          <AllComponent6 />
        </>
      );
    case 5:
      return (
        <>
          <AllComponent7 />
        </>
      );
    default:
      return "Defalut Case";
  }
}

function StepperApi() {
  const classes = useStyle();
  const [activeStep, setActiveStep] = useState(0);
  const eachsteps = getSteps();

  const [state, setState] = useContext(Context);
  const id = state.id;

  const nextStep = (id) => {
    setActiveStep(activeStep + 1);
    Service1.updateData(state, id).then((res) => {});
  };
  const previousStep = () => {
    setActiveStep(activeStep - 1);
    Service1.updateData(state, id).then((res) => {});
  };

  useEffect(() => {
    Service1.getDataById(id)
      .then((res) => res.data)
      .then((res) => {
        setState((prev) => ({ ...prev, ...res }));
      });
  }, []);

  return (
    <>
      <Wrap heading="WORKFLOW">
      <Grid
        container
        direction="row"
        className={`${classes.rootClass} ${classes.customTextField}`}
      >
        <CssBaseline />
      
          <Container
            component={Box}
            style={{
              position: "relative",
              zIndex: "1",
              // marginTop: "-80px",
              //marginTop: "-50px",
              marginTop: "-70px",
              //   marginLeft: "4.5%",
              //   marginRight: "4.5%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={4}
              component={Box}
              sx={{
                borderRadius: "13px",
                border: "1px solid #5514B4",
                width: "90%",
                //marginTop: "100px",
              }}
              p={4}
            >
              {activeStep === 6 ? (
                <Typography>THANKS</Typography>
              ) : (
                <>
                  <Stepper activeStep={activeStep}>
                    {eachsteps.map((step_name, index) => {
                      return (
                        <Step key={index} style={{ color: "#5514B4" }}>
                          <StepLabel>{step_name}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                  <form>{getForms(activeStep)}</form>
                  <Button
                    style={{
                      marginRight: "2%",
                      marginTop: "2%",
                      backgroundColor: "#5514B4",
                      color: "#FFF",
                    }}
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={previousStep}
                  >
                    BACK
                  </Button>
                  <Button
                    style={{
                      marginTop: "2%",
                      backgroundColor: "#5514B4",
                      color: "#FFF",
                    }}
                    variant="contained"
                    onClick={() => nextStep(id)}
                  >
                    {activeStep === 5 ? "FINISH" : "NEXT"}
                  </Button>
                </>
              )}
            </Paper>
          </Container>
      </Grid>
        </Wrap>
    </>
  );
}
export default StepperApi;
