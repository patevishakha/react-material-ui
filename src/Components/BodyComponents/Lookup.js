import {
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React from "react";

import countries from './ReusabelComponents/Data/countries';
import SearchableDropDown from './ReusabelComponents/SearchableDropDown';


const useStyles=makeStyles((theme)=>({
    grid:{
        margin:"1.5em",
        marginBottom:"2em"
    }
}))



function Lookup() {
    const classes=useStyles()
  return (
    <Grid container className={classes.grid}>
      <Grid item container xs={12} justifyContent="center">
        <Grid item container xs={12}>
          <RadioGroup name="radio-group" defaultValue="first">
            <FormControlLabel
              value="first"
              label="BT or Supplier Owned Number"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="second"
              label="Customer Owned Number"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="third"
              label="Pre Built Number"
              control={<Radio color="primary" />}
            />
          </RadioGroup>
        </Grid>
        <Grid item container xs={12}>
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="Auto Look Up?"
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={2}>
        <Grid item container xs={6}>
          <SearchableDropDown label="Search Type:" options={countries} />
        </Grid>
        <Grid item container xs={6}>
          <SearchableDropDown label="Country:" options={countries} />
        </Grid>
        <Grid item container xs={6}>
          <SearchableDropDown label="Switch:" options={countries} />
        </Grid>
        <Grid item container xs={6}>
          <SearchableDropDown label="Search Number:" options={countries} />
        </Grid>
        <Grid item container xs={6}>
          <TextField
            type="number"
            variant="outlined"
            label="Quantity"
            style={{ width: "75%" }}
          />
        </Grid>
        <Grid item container xs={6}>
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="Exact?"
          />
        </Grid>
      </Grid>
      <Grid item container xs={12}>
          
      </Grid>
    </Grid>
  );
}
export default Lookup;
