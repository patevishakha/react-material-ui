import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Store from "./Components/GlobalData/Store";

import { makeStyles } from "@material-ui/core/styles";
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Store>
        <Storereport>
          <div className="App">
            <CssBaseline />
            <Persistant />
            {/* <Header/> */}
            <div className={classes.toolbarMargin} />
          </div>
        </Storereport>
      </Store>
    </LocalizationProvider>
  );
}

export default App;
