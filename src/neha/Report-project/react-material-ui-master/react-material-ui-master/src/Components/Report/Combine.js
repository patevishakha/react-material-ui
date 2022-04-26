import React, { useContext } from "react";
import {
  CssBaseline,
  Container,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import theme from "../Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Col1 } from "./Col1";
import { Col2 } from "./Col2";
import { Col3 } from "./Col3";
import { Button } from "@mui/material";

import { Context1 } from "../GlobalData/Storereport";

const useStyle = makeStyles((theme) => ({
  backgroundColourClass: {
    backgroundColor: "#eee",
  },
  typographyClass: {
   // fontWeight: "bold",
  },

  rootClass: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
    },

    "& .MuiTypography-root": {
      width: "90%",
    },
  },
}));

function Combine() {
  const classes = useStyle();
  const showData = () => {
    console.log(state1);
  };
  const [state1, setState1] = useContext(Context1);
//"#d7abf5" 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper
          component={Box}
          p={4}
          style={{ background: "#caabf6"}}
        >
          <form className={classes.rootClass}>
            <Grid container>
              <Grid container item xs={12}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Col1 />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Col2 />
                </Grid>
              </Grid>
              <Grid>
                <Grid>
                  <Col3 />
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Combine;
