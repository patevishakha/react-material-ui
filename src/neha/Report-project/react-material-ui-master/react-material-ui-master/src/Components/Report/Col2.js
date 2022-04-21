import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@mui/system/Box";
import { films } from "./Datafilms";
import { Context1 } from "../GlobalData/Storereport";
export const Col2 = () => {
  const [state1, setState1] = useContext(Context1);
  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(event)
    setState1({
      ...state1,
      [name]: event.target.checked,
    });
  };
  return (
    <div>
      <Autocomplete
        multiple={true}
        variant="standard"
        options={films}
        getOptionLabel={(option) => (option.title ? option.title : "")}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} name="country_code" label="Country Code" />
        )}
        value={state1.country_code}
        onChange={(e, v) => {
          // console.log(v)
          setState1({
            ...state1,
            ["country_code"]: v,
          });
        }}
      />
      <Autocomplete
        multiple={true}
        variant="standard"
        options={films}
        value={state1.inbound_accesstype}
        getOptionLabel={(option) => (option.title ? option.title : "")}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            name="inbound_accesstype"
            label="Inbound Access type"
          />
        )}
        onChange={(e, v) => {
          // console.log(v)
          setState1({
            ...state1,
            ["inbound_accesstype"]: v,
          });
        }}
      />
      {/* <Box>
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
      </Box> */}
    </div>
  );
};
