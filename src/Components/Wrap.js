import React from "react";
import {
  CssBaseline,
  Container,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
function Wrap(props) {
  return (
    <Grid
    //sx={{ backgroundColor: "rgb(215, 215, 215)" }}
    >
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
          {props.heading}
        </Typography>
      </Paper>
      {props.children}
    </Grid>
  );
}
export default Wrap;
