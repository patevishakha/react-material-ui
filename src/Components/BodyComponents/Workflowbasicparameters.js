import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";
import countries from './ReusabelComponents/Data/countries';
import SearchableDropDown from './ReusabelComponents/SearchableDropDown';

function Workflowbasicparameters() {
  return (
    <Box>
      <Grid item container spacing={1} xs={12}>
        <Grid container item xs={12}>
          <Grid item container xs={6} justifyContent="center">
            <TextField
              variant="outlined"
              label="Request Number:"
              style={{ width: "75%", size: "1.2em" }}
            ></TextField>
          </Grid>
          <Grid item container xs={6} justifyContent="center">
            <SearchableDropDown
              options={countries}
              label="Country Of Origin:"
            />
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item container xs={6} justifyContent="center">
            <SearchableDropDown
              label="Inbound Access Type:"
              options={countries}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="center">
            <SearchableDropDown
              label="Bulk Access No WorkFlow:"
              options={countries}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item container xs={6} justifyContent="center">
            <SearchableDropDown
              label="SIO Accepatance Date:"
              options={countries}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="center">
            <SearchableDropDown
              label="Customer Auto Commit Date:"
              placeholder="Will Be Auto Generated If Left Blank"
              options={countries}
            />
          </Grid>
        </Grid>
        <Grid style={{ marginLeft: "6%", padding: "0.5em" }}>
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="Multi Build?"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
export default Workflowbasicparameters;
