import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@mui/system/Box";
import { Context1 } from "../GlobalData/Storereport";
export const Col1 = () => {
  const [state1, setState1] = useContext(Context1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState1({
      ...state1,
      [name]: event.target.checked,
    });
    // console.log("name : " + name + "--- value : " + value);
    // console.log(event.target.checked);
  };
  const revenue_owners_data = [
    { title: "RO_334032_new", uid: 66351000817457 },
    { title: "RO_Test_Standard", uid: 66452248840875 },
    { title: "RO_Test1--GLOBAL", uid: 10361692165974 },
  ];
  const corps_data = [
    { title: "COEAP_23233334", uid: 66354036937016 },
    { title: "COEAPTEST", uid: 66358426770752 },
    { title: "SPAIN DUAL 1", uid: 66467894842309 },
    { title: "SPAIN DUAL_2", uid: 66467894935809 },
    { title: "COANWTEST", uid: 1558011163286 },
    { title: "CORP_PEP_TEST", uid: 1567596551066 },
    { title: "CORP_Test1", uid: 10361692731535 },
  ];
  return (
    <div>
      <Autocomplete
        multiple
        variant="standard"
        options={revenue_owners_data}
        getOptionLabel={(option) => (option.title ? option.title : "")}
        value={state1.revenue_owners}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} name="revenue_owners" label="Revenue Owners" />
        )}
        onChange={(e, v) => {
          // console.log(v)
          setState1({
            ...state1,
            ["revenue_owners"]: v,
          });
        }}
      />
      <Autocomplete
        multiple
        options={corps_data}
        value={state1.corps}
        getOptionLabel={(option) => (option.title ? option.title : "")}
        style={{ maxHeight: 90, overflow: "auto" }}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} name="corps" label="Corps" />
        )}
        onChange={(e, v) => {
          // console.log(v)
          setState1({
            ...state1,
            ["corps"]: v,
          });
        }}
      />
      <br />
      
    </div>
  );
};
