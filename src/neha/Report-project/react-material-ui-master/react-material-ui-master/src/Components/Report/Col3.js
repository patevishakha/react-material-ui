import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
import { DatePicker } from "@mui/lab";

import FileDownload from "js-file-download";
import { initialValues } from "../GlobalData/Storereport";
import axios from "axios";
import theme from "../Theme";

import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { ThemeProvider } from "@material-ui/core/styles";
import PickersDay, {
  PickersDayProps,
  pickersDayClasses,
} from "@mui/lab/PickersDay";
export const Col3 = () => {
  const [state1, setState1] = useContext(Context1);

  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
  //const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const renderWeekPickerDay = (
    date: Date,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>
  
  ) => {
    return (
      <PickersDay
        {...pickersDayProps}
        sx={{
          [`&&.${pickersDayClasses.selected}`]: {
            backgroundColor: "#5514B4",
          },
        }}
      />
    );
  };

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
      },
      " .css-bkrceb-MuiButtonBase-root-MuiPickersDay-root.Mui-selected": {
        backgroundColor: "#5514B4",
      },
    },
  }));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const downloadCsv = () => {
    // e.preventDefault();
    setOpen(true);
    //   axios({
    //     url: "http://localhost:8083",
    //     method: "GET",
    //     responseType: "blob",
    //   }).then((res) => {
    //     console.log(res);
    //     FileDownload(res.data, "generatedReport.csv");
    //   });
    //   setState1(initialValues);
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
      <Grid container>
        <Grid item lg={3} md={3} sm={12} xs={12} className={classes.rootClass}>
          <br />
          <Typography
            align="left"
            style={{ marginLeft: "24px", fontWeight: "bold" }}
          >
            Product Type
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
            <FormGroup>
              <FormControlLabel
                // sx={{ m: 15 }}
                label="National"
                labelPlacement="end"
                control={
                  <Checkbox
                    name="product_type_n_i_col1"
                    style={{ color: "#5514B4" }}
                    checked={state1.product_type_n_i_col1 ? true : false}
                    // style={{ paddingLeft: "10px" }}
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
                    //style={{color:"#5514B4"}}
                    name="product_type_i_i_col1"
                    checked={state1.product_type_i_i_col1 ? true : false}
                  />
                }
                onChange={handleChange}
              />
            </FormGroup>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12} className={classes.rootClass}>
          <br />
          {/* <InputLabel>Additional Parameters</InputLabel> */}
          <Typography
            align="left"
            style={{ marginLeft: "24px", fontWeight: "bold" }}
          >
            Additional Parameters
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
            <FormGroup>
              <FormControlLabel
                // sx={{ m: 1 }}
                labelPlacement="end"
                control={
                  <Checkbox
                    style={{ color: "#5514B4" }}
                    name="show_external_code"
                    checked={state1.show_external_code ? true : false}
                  />
                }
                label=" Show External Code "
                onChange={handleChange}
              />
              <FormControlLabel
                labelPlacement="end"
                control={
                  <Checkbox
                    style={{ color: "#5514B4" }}
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
        <Grid item lg={5} md={5} sm={12} xs={12} className={classes.rootClass}>
          <br />
          <Typography
            align="left"
            style={{ marginLeft: "24px", fontWeight: "bold" }}
          >
            Gaining Suppliers
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
            <FormGroup>
              <FormControlLabel
                // sx={{ m: 1 }}
                control={
                  <Checkbox
                    style={{ color: "#5514B4" }}
                    name="show_dialed_access_no"
                    checked={state1.show_dialed_access_no ? true : false}
                  />
                }
                label=" Show Dialed AccessNo Suppliers "
                onChange={handleChange}
              />
              <FormControlLabel
                // sx={{ m: 1 }}
                control={
                  <Checkbox
                    style={{ color: "#5514B4" }}
                    name="show_network_address_suppliers"
                    checked={
                      state1.show_network_address_suppliers ? true : false
                    }
                  />
                }
                label=" Show Network Address Suppliers "
                onChange={handleChange}
              />
            </FormGroup>
          </Box>
        </Grid>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <br />
            <label>Date created From :</label>
            <DatePicker
              // className={classes.DatePicker}
              renderDay={renderWeekPickerDay}
              //className={classes.rootClass}
              value={state1.date_created_from}
              onChange={(newValue) => {
                setState1({
                  ...state1,
                  ["date_created_from"]: newValue,
                });
              }}
              renderInput={(params) => (
                <TextField name="date_created_from" sx={{}} {...params} />
              )}
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <br />
            <label>Date created To :</label>
            <DatePicker
              renderDay={renderWeekPickerDay}
              value={state1.date_created_to}
              onChange={(newValue) => {
                setState1({
                  ...state1,
                  ["date_created_to"]: newValue,
                });
              }}
              renderInput={(params) => (
                <TextField name="date_created_to" {...params} />
              )}
            />
          </Grid>
          <Grid container item justifyContent={"center"}>
            <Button
              // align="center"
              sx={{ m: 4, backgroundColor: "#5514B4" }}
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
      </Grid>
    </ThemeProvider>
  );
};
