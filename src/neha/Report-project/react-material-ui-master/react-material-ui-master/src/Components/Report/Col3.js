import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";

import { Button } from "@mui/material";
import { Context1 } from "../GlobalData/Storereport";
import { DatePicker } from "@mui/lab";

import FileDownload from "js-file-download";
import { initialValues } from "../GlobalData/Storereport";
import axios from "axios";

export const Col3 = () => {
  const [state1, setState1] = useContext(Context1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState1({
      ...state1,
      [name]: event.target.checked,
    });
  };

  const downloadCsv = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:8080",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "generatedReport.csv");
    });
    //setState1(initialValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/create", state1)
      .then(() => console.log("posted!!!"))
      .catch((err) => {
        console.log(err);
      });
     setState1(initialValues);
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <br />
      <br />
      <Grid item xs={6}>
        <Box>
          <InputLabel sx={{ m: 1 }}>Product Type </InputLabel>
          <FormControlLabel
            sx={{ m: 1 }}
            control={
              <Checkbox
                name="product_type_n_i_col1"
                checked={state1.product_type_n_i_col1 ? true : false}
              />
            }
            label="National"
            onChange={handleChange}
          />
          <FormControlLabel
            sx={{ m: 1 }}
            control={
              <Checkbox
                name="product_type_i_i_col1"
                checked={state1.product_type_i_i_col1 ? true : false}
              />
            }
            label="International"
            onChange={handleChange}
          />
        </Box>
        <br />
        <Box sx={{ m: 1 }}>
          <InputLabel sx={{ m: 1 }}>Additional Parameters</InputLabel>

          <FormControlLabel
            sx={{ m: 1 }}
            control={
              <Checkbox
                name="show_external_code"
                checked={state1.show_external_code ? true : false}
              />
            }
            label=" Show External Code "
            onChange={handleChange}
          />
          <br />
          <FormControlLabel
            control={
              <Checkbox
                name="sms_service"
                checked={state1.sms_service ? true : false}
              />
            }
            label=" SMS Service "
            onChange={handleChange}
          />
        </Box>
        <br />
        <Box>
          <InputLabel>Gaining Suppliers</InputLabel>

          <FormControlLabel
            sx={{ m: 1 }}
            control={
              <Checkbox
                name="show_dialed_access_no"
                checked={state1.show_dialed_access_no ? true : false}
              />
            }
            label=" Show Dialed AccessNo Suppliers "
            onChange={handleChange}
          />
          <br />
          <FormControlLabel
            sx={{ m: 1 }}
            control={
              <Checkbox
                name="show_network_address_suppliers"
                checked={state1.show_network_address_suppliers ? true : false}
              />
            }
            label=" Show Network address Suppliers "
            onChange={handleChange}
          />
        </Box>
      </Grid>
      <Grid container item alignItems="center" justifyContent="center" xs={6}>
        <Grid item>
          <label>Date created From :</label>
          <DatePicker
            value={state1.date_created_from}
            onChange={(newValue) => {
              setState1({
                ...state1,
                ["date_created_from"]: newValue,
              });
            }}
            renderInput={(params) => (
              <TextField name="date_created_from" {...params} />
            )}
          />
        </Grid>
        <Grid item>
          <label>Date created To :</label>
          <DatePicker
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
        <Grid>
          <Button
            sx={{ m: 4 }}
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
          <Button variant="contained" onClick={downloadCsv}>
            Download
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
