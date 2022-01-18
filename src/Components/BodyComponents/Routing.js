import {
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React from "react";
import countries from './ReusabelComponents/Data/countries';
import SearchableDropDown from './ReusabelComponents/SearchableDropDown';

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "1.5em",
    marginBottom: "2em",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    borderRadius: 5,
  },
}));
const Routing=({disabled})=> {
  const classes=useStyles()
  return (
    <Grid
      container
      item
      className={classes.grid}
      spacing={2}
      style={disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}
    >
      <Grid item container xs={12}>
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          style={{ marginBottom: "1em" }}
        >
          <Typography variant="h6" color="primary">
            Routing Plan and End Point Parameters
          </Typography>
        </Grid>
        <Grid item container>
          <Grid
            item
            container
            xs={6}
            alignItems="center"
            justifyContent="center"
          >
            <Typography>Create a Routing Plan?</Typography>
          </Grid>
          <RadioGroup name="radio-group" defaultValue="first" row>
            <FormControlLabel
              value="first"
              label="Yes"
              control={<Radio color="primary" />}
            />

            <FormControlLabel
              value="second"
              label="No"
              control={<Radio color="primary" />}
            />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid item container xs={1}></Grid>
      <Grid item container xs={6} justifyContent="center">
        <SearchableDropDown
          label="Select a Routing Plan:"
          options={countries}
        />
      </Grid>
    </Grid>
  );
}

export default Routing;
