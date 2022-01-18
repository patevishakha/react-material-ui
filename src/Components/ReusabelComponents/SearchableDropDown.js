import { TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import React from "react";
export default function SearchableDropDown(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.options}
      sx={{ width: "75%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          placeholder={props.placeholder}
        />
      )}
    />
  );
}
