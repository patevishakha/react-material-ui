import React, { useState, useContext } from "react";
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import Pagination from "@mui/material/Pagination";

import { renderWeekPickerDay } from "../Report/DatesCol";
import {
  Grid,
  Button,
  Typography,
  Box,
  List,
  Divider,
  ListItem,
} from "@material-ui/core";
import { DatePicker } from "@mui/lab";
import TextField from "@material-ui/core/TextField";
import { Context1 } from "../GlobalData/Storereport";
import Autocomplete from "@mui/material/Autocomplete";
import RotateLeftSharpIcon from "@material-ui/icons/RotateLeftSharp";
import IconButton from "@material-ui/core/IconButton";
import { vi } from "date-fns/esm/locale";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../Theme";
const food = [
  {
    name: "Pizza",
    parent: "parent1",
    ObjectType: "Object1",
    date_modified: new Date(
      "Sat Jan 01 2022 12:00:00 GMT+0530 (India Standard Time)"
    ),
  },
  {
    name: "Ice Cream",
    parent: "parent2",
    ObjectType: "Object2",
    date_modified: new Date(
      "Sat Jan 01 2022 12:00:00 GMT+0530 (India Standard Time)"
    ),
  },
  {
    name: "Hot Dog",
    parent: "parent3",
    ObjectType: "Object2",
    date_modified: new Date(
      "Sat Jan 11 2022 12:00:00 GMT+0530 (India Standard Time)"
    ),
  },
  {
    name: "Hazelnut",
    parent: "parent3",
    ObjectType: "Object2",
    date_modified: new Date(
      "Sat Jan 11 2022 12:00:00 GMT+0530 (India Standard Time)"
    ),
  },
  {
    name: "Burger",
    parent: "parent4",
    ObjectType: "Object3",
    date_modified: new Date(
      "Sat Jan 15 2022 12:00:00 GMT+0530 (India Standard Time)"
    ),
  },
  {
    name: "Bagel",
    parent: "parent4",
    ObjectType: "Object3",
    date_modified: new Date(
      "Sat Jan 17 2022 12:00:00 GMT+0530 (India Standard Time)"
    ),
  },
  {
    name: "Hamburger",
    parent: "parent5",
    ObjectType: "Object3",
    date_modified: new Date(
      "Sat Jan 31 2022 12:00:00 GMT+0530 (India Standard Time)"
    ),
  },
  {
    name: "Fries",
    parent: "parent6",
    ObjectType: "Object1",
    date_modified: new Date(
      "Sat Jan 21 2022 12:00:00 GMT+0530 (India Standard Time)"
    ),
  },
];
const originalRows = food;
const options = [
  { title: "Object1" },
  { title: "Object2" },
  { title: "Object3" },
  { title: "Object4" },
];
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  gridStyles: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "left",

    textAlign: "justify",
    paddingLeft: "70px",
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          backgroundColor: "#fff",
        },
      },
    },
  },
}));
const initial = {
  search_text: "",
  object_type: null,
  date_from: new Date("2022-01-01T12:00:00"),
  date_to: new Date("2022-01-01T12:00:00"),
};
function SearchBarUII() {
  const [rows, setRows] = useState(originalRows);
  const [prevRows, setPrevRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const classes = useStyles();
  const [state1, setState1] = useContext(Context1);
  var default_date = new Date(
    "Sat Jan 01 2022 12:00:00 GMT+0530 (India Standard Time)"
  );
  const itemsPerPage = 5;
  const [page, setPage] = React.useState(1);
  const [noOfPages, setNoofPages] = useState(
    Math.ceil(rows.length / itemsPerPage)
  );
  const handleChange = (event, value) => {
    //console.log("i am fired");
    setPage(value);
  };
  const handleReset = () => {
    console.log("reset");
    //console.log(state1.search_text);
    setState1({ ...state1, ...initial });
    //console.log(state1.search_text);
    setRows(originalRows);
    handlePagesChange(originalRows);
  };
  const handlePagesChange = (rows) => {
    setNoofPages(Math.ceil(rows.length / itemsPerPage));
    setPage(1);
  };
  const reSearch = (searchText, object_type, date_from, date_to) => {
    var filteredRows = originalRows;
    console.log("before", filteredRows);
    if (
      date_from.toString() !== default_date.toString() &&
      date_to.toString() === default_date.toString()
    ) {
      filteredRows = originalRows.filter((row) => {
        if (row.date_modified >= date_from) {
          return row;
        }
      });
    } else if (
      date_from.toString() === default_date.toString() &&
      date_to.toString() !== default_date.toString()
    ) {
      filteredRows = originalRows.filter((row) => {
        if (row.date_modified >= date_from && row.date_modified <= date_to) {
          return row;
        }
      });
    } else if (
      date_from.toString() !== default_date.toString() &&
      date_to.toString() !== default_date.toString()
    ) {
      filteredRows = originalRows.filter((row) => {
        if (row.date_modified >= date_from && row.date_modified <= date_to) {
          return row;
        }
      });
    }
    console.log("after", filteredRows);
    if (searchText !== "") {
      filteredRows = filteredRows.filter((row) => {
        return row.name.toLowerCase().includes(searchText.toLowerCase());
      });
    }
    console.log(filteredRows);
    if (object_type !== null) {
      filteredRows = filteredRows.filter((row) => {
        return row.ObjectType.toLowerCase().includes(
          object_type.title.toLowerCase()
        );
      });
    }
    console.log(filteredRows);
    setRows(filteredRows);
    handlePagesChange(filteredRows);
  };

  const requestSearch = (searchedVal) => {
    setPrevRows(rows);
    const filteredRows = originalRows.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.parent.toString().includes(searchedVal.toString())
      );
    });
    setRows(filteredRows);
    handlePagesChange(filteredRows);
  };
  const objsearch = (searchedVal) => {
    //console.log(searchedVal);
    setPrevRows(rows);
    if (searchedVal == null) {
      setRows(prevRows);
      handlePagesChange(prevRows);
    } else {
      const filteredRows = rows.filter((row) => {
        return row.ObjectType.toLowerCase().includes(
          searchedVal.title.toLowerCase()
        );
      });
      setRows(filteredRows);
      handlePagesChange(filteredRows);
    }
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
    setState1({
      ...state1,
      ["search_text"]: "",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        style={{
          borderBottom: "3px solid #5514b4",
          borderLeft: "3px solid #5514b4",
          borderRight: "3px solid #5514b4",
        }}
        //sx={{ backgroundColor: "rgb(215, 215, 215)" }}
      >
        {/* {props.children} */}

        <Paper style={{ backgroundColor: "#5514b4" }}>
          <br />
          <Grid
            item
            container
            md={12}
            lg={12}
            xs={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "8px",
            }}
          >
            <SearchBar
              style={{
                width: "98%",
                justifyContent: "center",
                marginBottom: "20px",
                border: "1px solid #5514b4",
              }}
              value={state1.search_text || ""}
              onChange={(searchVal) => {
                //requestSearch(searchVal);
                // console.log(
                //   searchVal,
                //   state1.object_type,
                //   state1.date_from,
                //   state1.date_to
                // );
                reSearch(
                  searchVal,
                  state1.object_type,
                  state1.date_from,
                  state1.date_to
                );
                setState1({
                  ...state1,
                  ["search_text"]: searchVal,
                });
              }}
              onCancelSearch={() => cancelSearch()}
            />
            <br />
            <br />
            <Grid
              container
              item
              xs={12}
              md={12}
              sm={12}
              lg={12}
              spacing={2}
              style={{
                // backgroundColor: "rgb(215,215,215)",
                backgroundColor: "#fff",
                //paddingLeft: "120px",
              }}
            >
              <Grid
                item
                container
                md={4}
                lg={4}
                xs={4}
                sm={4}
                //style={{ backgroundColor: "#fff", padding: "0px" }}
              >
                <Autocomplete
                  variant="standard"
                  options={options}
                  //classes={classes}
                  //className={classes.inputStyles}
                  //inputProps={{ className: classes.inputStyles }}
                  sx={{
                    width: "100%",
                    // "&.MuiInputBase-root": {
                    //   backgroundColor: "whitesmoke",
                    // },
                    ".MuiAutocomplete-hasPopupIcon.css-dd2h8b-MuiAutocomplete-root .MuiOutlinedInput-root, .MuiAutocomplete-hasClearIcon.css-dd2h8b-MuiAutocomplete-root .MuiOutlinedInput-root":
                      {
                        backgroundColor: "#fff",
                      },
                  }}
                  getOptionLabel={(option) =>
                    option.title ? option.title : ""
                  }
                  value={state1.object_type}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="object_type"
                      color="primary"
                      label="Object"
                      variant="outlined"
                      // inputProps={{ className: classes.components }}
                      //className={classes.components}
                      sx={{ padding: "0px" }}
                      //size="large"
                      //   sx={{ paddingBottom: "12.5px" }}
                      style={{
                        paddingBottom: "11.5px",
                        //backgroundColor: "#fff",
                      }}
                    />
                  )}
                  onChange={(e, v) => {
                    //console.log(v);
                    objsearch(v);
                    // reSearch(
                    //   state1.search_text,
                    //   v,
                    //   state1.date_from,
                    //   state1.date_to
                    // );
                    setState1({
                      ...state1,
                      ["object_type"]: v,
                    });
                  }}
                />
              </Grid>
              <Grid item container md={3} lg={3} xs={3} sm={3}>
                <DatePicker
                  renderDay={renderWeekPickerDay}
                  value={state1.date_from}
                  onChange={(newValue) => {
                    //console.log(newValue);

                    setState1({
                      ...state1,
                      ["date_from"]: newValue,
                    });
                    setPrevRows(rows);
                    //dateSearchFrom(newValue);
                    reSearch(
                      state1.search_text,
                      state1.object_type,
                      newValue,
                      state1.date_to
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      color="primary"
                      name="date_from"
                      // style={{ backgroundColor: "#fff", }}
                      {...params}
                      variant="outlined"
                      fullWidth
                      label="From"
                    />
                  )}
                />
              </Grid>
              <Grid item container md={3} lg={3} xs={3} sm={3}>
                <DatePicker
                  renderDay={renderWeekPickerDay}
                  value={state1.date_to}
                  onChange={(newValue) => {
                    //console.log(newValue);
                    // console.log(state1.date_from > newValue);

                    setState1({
                      ...state1,
                      ["date_to"]: newValue,
                    });
                    setPrevRows(rows);
                    //dateSearchTo(newValue);
                    reSearch(
                      state1.search_text,
                      state1.object_type,
                      state1.date_from,
                      newValue
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      color="primary"
                      name="date_to"
                      {...params}
                      variant="outlined"
                      fullWidth
                      label="To"
                    />
                  )}
                />
              </Grid>
              <Grid
                item
                container
                md={2}
                lg={2}
                xs={2}
                sm={2}
                style={{
                  display: "flex",
                  //justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  style={{
                    color: "#fff",
                    width: "100px",
                    height: "40px",
                    marginLeft: "16px",
                  }}
                  //className={classes.BatchColourClass}
                  onClick={handleReset}
                  endIcon={<RotateLeftSharpIcon />}
                >
                  RESET
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center ",
              //backgroundColor: "rgba(215,215,215)",
              backgroundColor: "#fff",
            }}
          >
            <Grid
              container
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              display="flex"
              justifyContent="center"
              style={{
                backgroundColor: "#fff",
                // display: "flex",
                // justifyContent: "center",
                border: "2px solid #5514b4",
                borderRadius: "5px",
              }}
            >
              <Grid
                item
                container
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{
                  backgroundColor: "rgba(215,215,215)",
                  border: "2px solid #5514b4",
                  borderRadius: "5px",
                  display: "flex",
                  height: "40px",
                }}
              >
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  // className={classes.gridStyles}
                  // direction="row"
                  // justifyContent="center"
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignSelf: "center",
                    // direction: "column",
                    paddingLeft: "120px",
                  }}
                >
                  <Typography
                    // className={`${classes.rootClass} ${classes.typographyClass}`}
                    variant="h7"
                    color="primary"
                    // style={{
                    //   display: "flex",
                    //   justifyContent: "center",
                    //   alignSelf: "center",
                    //   // direction: "column",
                    // }}
                  >
                    Name
                  </Typography>
                  {/* <TableCell>name</TableCell> */}
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignSelf: "center",
                    paddingLeft: "100px",
                    // direction: "column",
                  }}
                >
                  {/* <TableCell align="right">parent</TableCell> */}
                  <Typography
                    // className={`${classes.rootClass} ${classes.typographyClass}`}
                    variant="h7"
                    color="primary"
                    // style={{
                    //   display: "flex",
                    //   justifyContent: "center",
                    //   alignSelf: "center",
                    //   // direction: "column",
                    // }}
                  >
                    parent
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignSelf: "center",
                    // direction: "column",
                    paddingLeft: "60px",
                  }}
                >
                  {/* <TableCell align="right">Type&nbsp;(g)</TableCell> */}
                  <Typography
                    // className={`${classes.rootClass} ${classes.typographyClass}`}
                    variant="h7"
                    color="primary"
                    // style={{
                    //   display: "flex",
                    //   justifyContent: "center",
                    //   alignSelf: "center",
                    //   // direction: "column",
                    // }}
                  >
                    Object Type
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    paddingLeft: "35px",
                    alignSelf: "center",
                    // direction: "column",
                  }}
                >
                  {/* <TableCell align="right">Date&nbsp;(g)</TableCell> */}
                  <Typography
                    // className={`${classes.rootClass} ${classes.typographyClass}`}
                    variant="h7"
                    color="primary"
                    // style={{
                    //   display: "flex",
                    //   justifyContent: "center",
                    //   alignSelf: "center",
                    //   // direction: "column",
                    // }}
                  >
                    Date Modified
                  </Typography>
                </Grid>
              </Grid>
              <div
                style={{
                  padding: "0px",
                  width: "100%",
                  height: "260px",
                }}
              >
                <div
                  style={{
                    padding: "0px",
                    width: "100%",
                    //backgroundColor: "red",
                    height: "200px",
                  }}
                >
                  <List component="span">
                    {rows
                      .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                      .map((projectItem) => {
                        const labelId = `list-secondary-label-${projectItem.projectName}`;
                        return (
                          <ListItem
                            key={projectItem.projectID}
                            button
                            onClick={() => console.log("")}
                          >
                            <Grid
                              item
                              container
                              xs={11}
                              sm={11}
                              md={11}
                              lg={11}
                              style={{
                                display: "flex",
                                justifyContent: "center ",
                                //backgroundColor: "red",
                                marginLeft: "35px",
                              }}
                            >
                              <Grid
                                item
                                xs={3}
                                sm={3}
                                md={3}
                                lg={3}
                                className={classes.gridStyles}
                                // sx={{ gridStyles }}
                                // style={{ display: "flex", alignSelf: "left" }}
                              >
                                {/* <TableCell component="th" scope="row"> */}
                                {projectItem.name}
                                {/* </TableCell> */}
                              </Grid>
                              <Grid
                                item
                                xs={3}
                                sm={3}
                                md={3}
                                lg={3}
                                className={classes.gridStyles}
                              >
                                {/* <TableCell align="right"> */}
                                {projectItem.parent}
                                {/* </TableCell> */}
                              </Grid>
                              <Grid
                                item
                                xs={3}
                                sm={3}
                                md={3}
                                lg={3}
                                className={classes.gridStyles}
                              >
                                {projectItem.ObjectType}
                              </Grid>
                              <Grid
                                item
                                xs={3}
                                sm={3}
                                md={3}
                                lg={3}
                                className={classes.gridStyles}
                              >
                                {/* <TableCell align="right"> */}
                                {Date.parse(projectItem.date_modified) > 0
                                  ? projectItem.date_modified.getDate() +
                                    "/" +
                                    projectItem.date_modified.getMonth() +
                                    1 +
                                    "/" +
                                    projectItem.date_modified.getFullYear()
                                  : "null"}
                                {/* </TableCell> */}
                              </Grid>
                            </Grid>
                            {/* <ListItemAvatar>
                            <Avatar
                              alt={`Avatar n°${projectItem + 1}`}
                              src={projectItem.projectImage}
                              className={classes.avatar}
                            />
                          </ListItemAvatar> */}
                          </ListItem>
                        );
                      })}
                  </List>
                </div>
                <Divider />
                <Box
                  component="span"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    //alignItems: "center",
                  }}
                >
                  <Pagination
                    count={noOfPages}
                    page={page}
                    onChange={handleChange}
                    defaultPage={1}
                    style={{ height: "150px" }}
                    sx={{
                      ".css-1mtig89-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
                        { backgroundColor: "#5514b4" },
                      ".css-1mtig89-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover":
                        { backgroundColor: "#5514b4" },
                    }}
                    color={"secondary"}
                    size="large"
                    showFirstButton
                    showLastButton
                    //classes={{ ul: classes.paginator }}
                  />
                </Box>
              </div>
              {/* </TableBody>
          </Table>
        </TableContainer> */}
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <br />
    </ThemeProvider>
  );
}

export default SearchBarUII;
