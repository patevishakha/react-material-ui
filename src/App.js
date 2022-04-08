import { CssBaseline } from '@material-ui/core';
import './App.css';
import Store from "./Components/GlobalData/Store";

import { makeStyles } from '@material-ui/core/styles';
import Persistant from './Components/Persistant';



const useStyles = makeStyles(theme=>({
    toolbarMargin : {
        ...theme.mixins.toolbar
    },
 
  }))    

function App() {
  const classes = useStyles();
  return (
    <Store>
    <div className="App">
        <CssBaseline/>
        <Persistant/>
        {/* <Header/> */}
        <div  className={classes.toolbarMargin}/>
    </div>
    </Store>
  );
}

export default App;
