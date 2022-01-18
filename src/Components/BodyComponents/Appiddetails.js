import { Box, Checkbox, Divider, FormControlLabel, Grid, makeStyles, Radio, RadioGroup, Typography } from "@material-ui/core";
import React from "react"
const useStyles = makeStyles((theme) => ({
  grid: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    borderRadius: 5,
    margin: "1.5em",
    marginBottom: "2em",
  },
}));
function Appiddetails(){
    const classes=useStyles()
    return (
      <>
        <Grid container item xs={12} className={classes.grid}>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            style={{ marginBottom: "1em" }}
          >
            <Typography variant="h6" color="primary">
              App id Details
            </Typography>
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <RadioGroup name="radio-group" defaultValue="first">
              <FormControlLabel
                value="first"
                label="Existing App id:"
                control={<Radio color="primary" />}
              />
              <FormControlLabel
                value="second"
                label="Generate App id:"
                control={<Radio color="primary" />}
              />
            </RadioGroup>
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="center"
            alignItems="flex-start"
          >
            <FormControlLabel
              control={<Checkbox defaultChecked color="primary" />}
              label="Multi Build?"
            />
          </Grid>
        </Grid >
       
      </>
    );
}
export default Appiddetails;