import React, { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Store from "./Components/GlobalData/Store";
import Favourites from "./Components/GlobalData/Favourites";

import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter} from "react-router-dom";
import Persistant from "./Components/Persistant";

import Storereport from "./Components/GlobalData/Storereport";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";



const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
 
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Store>
        <Storereport>
          <Favourites>
          {/* <div className={classes.toolbarMargin} /> */}
            <CssBaseline />
            <div className={classes.toolbarMargin} />
            <Persistant />
            
           
            {/* <Header/> */}
            <div className={classes.toolbarMargin} />
          </Favourites>
        </Storereport>
      </Store>
    </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;