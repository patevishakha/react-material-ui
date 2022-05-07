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
import DatesCol from "./DatesCol";

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
      //paddingTop: "100px",
      //backgroundColor: "red",
    },

    "& .MuiTypography-root": {
      width: "90%",
      //backgroundColor: "red",
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
  // "#d4bcf8"
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid sx={{ backgroundColor: "rgb(215, 215, 215)" }}>
        <Paper
          component={Box}
          sx={{
            backgroundColor: "#5514B4",
            width: "100%",
            height: "150px",
            borderRadius: "0px",
          }}
          style={{ position: "relative", zIndex: "1" }}
        >
          <Typography
            variant="h6"
            align="left"
            style={{
              color: "white",
              // paddingTop: "30px",
              paddingTop: "40px",
              marginBottom: "20px",
              marginLeft: "90px",
              // fontWeight: "Bold",
            }}
          >
            CUSTOMER REPORT
          </Typography>
        </Paper>
        <Container
          component={Box}
          style={{
            position: "relative",
            zIndex: "1",
            // marginTop: "-80px",
            //marginTop: "-50px",
            marginTop: "-70px",
            marginLeft: "4.5%",
            marginRight: "4.5%",
          }}
        >
          <Paper
            //alignSelf="center"
            elevation={4}
            component={Box}
            sx={{
              borderRadius: "13px",
              border: "1px solid #5514B4",
              width: "90%",
              //marginTop: "100px",
            }}
            p={4}

            //style={
            // {
            //backgroundImage:
            // "linear-gradient(to right top, #ededed, #ededed, #ededed, #ededed, #ededed, #e8e7ee, #e4e1f0, #e0dbf1, #d8cdf3, #d0c0f5, #cab2f5, #c4a3f5)",
            // backgroundImage:
            //   "linear-gradient(to right top, #d9d9d9, #d9d9d9, #d9d9d9, #d9d9d9, #d9d9d9, #d6d5dc, #d3d0df, #d1cce2, #ccc2e8, #c9b8ed, #c6aef1, #c4a3f5)",
            // backgroundImage:
            //   "linear-gradient(to right top, #d9d9d9, #d9d9d9, #d9d9d9, #d9d9d9, #d9d9d9, #d6d5dc, #d3d0df, #d1cce2, #ccc2e8, #c9b8ed, #c6aef1, #c4a3f5);background-image: linear-gradient(to right top, #d9d9d9, #d9d9d9, #d9d9d9, #d9d9d9, #d9d9d9, #d6d5dc, #d3d0df, #d1cce2, #ccc2e8, #c9b8ed, #c6aef1, #c4a3f5)",
            //}
            //}
          >
            <form className={classes.rootClass}>
              <Grid container>
                {/* <Typography
                  variant="h6"
                  //align="left"
                  align="center"
                  color="primary"
                  style={{
                    marginBottom: "20px",
                    //  marginLeft: "50px",
                    marginLeft: "30px",
                    fontWeight: "Bold",
                  }}
                >
                  CUSTOMER REPORT
                </Typography> */}
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Col1 />
                  <Col2 />
                  <DatesCol />
                </Grid>
                {/* <Grid item lg={1} md={1}></Grid> */}
                <Grid item lg={5} md={5} sm={12} xs={12}>
                  <Col3 />
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Grid>
    </ThemeProvider>
  );
}

export default Combine;
