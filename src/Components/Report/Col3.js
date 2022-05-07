import React, { useState, useContext } from "react";

import { TextField } from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@material-ui/core";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Button } from "@mui/material";
import { Context1 } from "../GlobalData/Storereport";

import FileDownload from "js-file-download";
import { initialValues } from "../GlobalData/Storereport";
import axios from "axios";
import theme from "../Theme";

import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { ThemeProvider } from "@material-ui/core/styles";
export const Col3 = () => {
  const [state1, setState1] = useContext(Context1);

  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
  //const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState1({
      ...state1,
      [name]: event.target.checked,
    });
  };
  const useStyle = makeStyles((theme) => ({
    rootClass: {
      "& .MuiTypography-root": {
        width: "auto",

        //ml: "3",
      },
    },
  }));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    // setOpen(true);
    //handleClickOpen();
    e.preventDefault();
    axios
      .post("http://localhost:8083/create", state1)
      .then((res) => {
        // console.log("response in gui ",res.data)
        FileDownload(res.data, "generatedReport.csv");
      })
      .catch((err) => {
        console.log(err);
      });
    setState1(initialValues);
  };

  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ marginLeft: "7%" }}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.rootClass}
          //backgroundColor="red"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography
            align="left"
            color="secondary"
            style={{
              marginLeft: "40px",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            Product Type:
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 12 }}>
            <FormGroup>
              <FormControlLabel
                // sx={{ m: 15 }}
                label="National"
                labelPlacement="end"
                control={
                  <Checkbox
                    name="product_type_n_i_col1"
                    //style={{ color: "#5514B4" }}
                    checked={state1.product_type_n_i_col1 ? true : false}
                    // style={{ paddingLeft: "10px" }}
                    color="primary"
                  />
                }
                onChange={handleChange}
              />
              <FormControlLabel
                // sx={{ m: 1 }}
                label="International"
                labelPlacement="end"
                control={
                  <Checkbox
                    color={"primary"}
                    //style={{ color: "#5514B4" }}
                    name="product_type_i_i_col1"
                    checked={state1.product_type_i_i_col1 ? true : false}
                  />
                }
                onChange={handleChange}
              />
            </FormGroup>
          </Box>
          <br />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.rootClass}
        >
          <Typography
            align="left"
            color="secondary"
            style={{
              marginLeft: "40px",
              fontWeight: "bold",
            }}
          >
            Additional Parameters:
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 12 }}>
            <FormGroup>
              <FormControlLabel
                // sx={{ m: 1 }}
                labelPlacement="end"
                control={
                  <Checkbox
                    //style={{ color: "#5514B4" }}
                    name="show_external_code"
                    checked={state1.show_external_code ? true : false}
                    color="primary"
                  />
                }
                label=" Show External Code "
                onChange={handleChange}
              />
              <FormControlLabel
                labelPlacement="end"
                control={
                  <Checkbox
                    //style={{ color: "#5514B4" }}
                    color="primary"
                    name="sms_service"
                    checked={state1.sms_service ? true : false}
                  />
                }
                label=" SMS Service "
                onChange={handleChange}
              />
            </FormGroup>
          </Box>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.rootClass}
        >
          <br />
          <Typography
            align="left"
            color="secondary"
            style={{
              marginLeft: "40px",
              fontWeight: "bold",
            }}
          >
            Gaining Suppliers:
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 12 }}>
            <FormGroup>
              <FormControlLabel
                // sx={{ m: 1 }}
                control={
                  <Checkbox
                    //style={{ color: "#5514B4" }}
                    name="show_dialed_access_no"
                    checked={state1.show_dialed_access_no ? true : false}
                    color="primary"
                  />
                }
                label=" Show Dialed AccessNo Suppliers "
                onChange={handleChange}
              />
              <FormControlLabel
                // sx={{ m: 1 }}

                control={
                  <Checkbox
                    //style={{ color: "#5514B4" }}
                    name="show_network_address_suppliers"
                    checked={
                      state1.show_network_address_suppliers ? true : false
                    }
                    color="primary"
                  />
                }
                label=" Show Network Address Suppliers "
                onChange={handleChange}
                //color="#5514B4"
              />
            </FormGroup>
          </Box>
        </Grid>

        <Grid item justifyContent={"center"}>
          <Button
            //align="right"
            sx={{
              marginTop: 10,
              backgroundColor: "#5514B4",
              marginLeft: "-50px",
            }}
            variant="contained"
            onClick={
              // ()=>{
              // console.log(state1);
              // setState1(initialValues)}
              handleSubmit
            }
          >
            submit
          </Button>
          {/* <Dialog
              // fullScreen={fullScreen}
              open={open}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Downloading in progress..."}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>please wait...</DialogContentText>
              </DialogContent>
            </Dialog>
            {/* <Button onClick={downloadCsv}>download</Button>
          <Dialog
            // fullScreen={fullScreen}
            open={open}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Downloading in progress..."}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>please wait...</DialogContentText>
            </DialogContent>
          </Dialog> */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
