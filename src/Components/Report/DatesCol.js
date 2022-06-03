import React, { useState, useContext } from "react";
import { Context1 } from "../GlobalData/Storereport";
import { TextField } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { DatePicker } from "@mui/lab";
import Typography from "@material-ui/core/Typography";
import PickersDay, {
  PickersDayProps,
  pickersDayClasses,
} from "@mui/lab/PickersDay";

export const renderWeekPickerDay = (
  date: Date,
  selectedDates: Array<Date | null>,
  pickersDayProps: PickersDayProps<Date>
  // date: "",
  // selectedDates: [],
  // pickersDayProps: PickersDayProps<Date>
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
const DatesCol = () => {
  const [state1, setState1] = useContext(Context1);
  return (
    <>
      <Grid container>
        {/* <Grid lg={12} md={12}>
          <Typography
            //align="left"
            color="secondary"
            style={{
              // marginLeft: "24px",
              fontWeight: "bold",
            }}
          >
            Date Created From:
          </Typography>
        </Grid> */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
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
              <TextField
                name="date_created_from"
                sx={{}}
                {...params}
                variant="outlined"
                fullWidth
                label="Date Created From"
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid container>
        <br />
        {/* <Grid lg={12} md={12}>
          <Typography
            //align="left"
            color="secondary"
            style={{
              // marginLeft: "24px",
              fontWeight: "bold",
            }}
          >
            Date Created To:
          </Typography>
        </Grid> */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
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
              <TextField
                name="date_created_to"
                {...params}
                variant="outlined"
                fullWidth
                label="Date Created To"
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default DatesCol;
