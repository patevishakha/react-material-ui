import React from "react";
import {
  CssBaseline,
  Container,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import BreadCrumCompo from "./BreadCrumCompo";

function Wrap(props) {
  return (
    <Grid item lg={12}
    //sx={{ backgroundColor: "rgb(215, 215, 215)" }}
    >
      <Paper
        component={Box}
        sx={{
          width: "100%",
          height: "150px",
          borderRadius: "0px",
          
        }}
        style={{ backgroundColor: "#5514B4",position: "relative", zIndex: "1" }}
      >
      <Grid container item lg={12}>
      <Grid item lg={6} xs={6}>
        <Typography
          variant="h6"
          align="left"
          style={{
            color: "#fff",
            // paddingTop: "30px",
            paddingTop: "40px",
            // marginBottom: "20px",
            marginLeft: "100px",
            fontWeight: "Bold",
          }}
        >
          {props.heading}
        </Typography>
        </Grid>
        <Grid item lg={6} xs={6} style={{display:"flex",justifyContent:"center"}}>
        <Typography
          variant="h6"
          align="right"
          style={{
            color: "#fff",
           
            paddingTop: "40px",
            // marginBottom: "20px",
            marginLeft: "90px",
            fontWeight: "Bold",
          }}
        >
          {<BreadCrumCompo/>}
        </Typography>
        </Grid>
        </Grid>
      </Paper>
      {props.children}
    </Grid>
  );
}
export default Wrap;
