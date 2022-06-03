import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Box,Drawer,CssBaseline,Toolbar,Divider,Typography,IconButton,Button} from "@mui/material";
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {List,ListItemText,ListItemIcon,ListItem,ListItemButton,Collapse,AppBar} from "@mui/material";
import {BrowserRouter , Routes, Route, Link } from "react-router-dom";

import { Avatar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import SearchBarCompo from "./SearchBarCompo";
import HeaderIcons from "./HeaderIcons";
import BreadCrumCompo  from "./BreadCrumCompo";
//import { Main, AppBar, DrawerHeader } from "./PersistantFileStyles";
import Home from "./HomePage/Home";
import StepperApi from "./StepperApi";
import CorpScreen from './Corps/CorpScreen';
import Details from './Corps/Details';
import AccessNo from './Corps/AccessNo';
import EndPoints from './Corps/EndPoints';
import Combine from "./Report/Combine";
import Employees from "./AccessNo/pages/Employees";
import SearchBarUII from "./search/SearchBarUII";

import Fav from "./FavouritesTemplates/Fav"; 
import Profile from './FavouritesTemplates/dynamic-pages/Profile';
import User from './FavouritesTemplates/dynamic-pages/User';
import SelectedFav from "./FavouritesTemplates/SelectedFav";



const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  link: {
    textDecoration: "none",
    // color: "red",
  },
}));

export default function Persistant() {
  const theme = useTheme();
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const [expandlist1, setexpandlist1] = React.useState(false);
  const [expandlist2, setexpandlist2] = React.useState(false);
  const [selectedIndex1, setSelectedIndex1] = React.useState(1);

    // Opening Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };  
  // -------------

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const handleClickOnSelectedItem = (event, Index) => {
    setSelectedIndex1(Index);
  };

  const handlelistopen1 = () => {
    setexpandlist1(!expandlist1);
  };

  const handlelistopen2= () => {
    setexpandlist2(!expandlist2);
  };

  return (
    <>
    <Box >
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open1}
        style={{ backgroundColor: "#5514B4" }}
      >
        <Toolbar>
          <>
          <Button
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
            aria-controls={open1 ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? 'true' : undefined}
            edge="start"
            // sx={{ mr: 1, ...(open1 && { display: 'none' }) }}
            endIcon={<KeyboardArrowDownIcon />}

          >
            {/* <MenuIcon /> */}
            MENU
          </Button>
          </>
          <Avatar sx={{marginLeft:"1%"}}>L</Avatar>
          <Typography variant="h5" noWrap component="div" sx={{marginLeft:"1%"}}>
            Call Traffic Controller
          </Typography>
          <Box sx={{marginLeft:"60%"}}>
            {/* <SearchBarCompo  /> */}
            <HeaderIcons/>
          </Box>
        </Toolbar>
      </AppBar>

      {/* <Box style={{marginLeft:"250px"}}><BreadCrumCompo/></Box> */}
      {/* <CarouselCompo/> */}
      <Box >
        {/* <Box style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      }}> */}
        <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open1}
              onClose={handleClose}
              // onClick={handleClose}
              PaperProps={{
              elevation: 0,
              sx: {

                ".css-bshv44-MuiButtonBase-root-MuiListItem-root.Mui-selected:hover":{
                    backgroundColor: "#e4d6fa",
                  },
                ".css-1b954x2-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":{
                  marginTop:"50px",
                },
                ".css-bshv44-MuiButtonBase-root-MuiListItem-root.Mui-selected": {
                    backgroundColor: "#e4d6fa",
                    //color: white;
                    "& .MuiTypography-root": {
                      // text in front of icon
                      fontWeight: "bold",
                      color: "#5514b4",
                      padding:"0px"
                    },
                    "& .MuiSvgIcon-root": {
                      // icon colour
                      color: "#5514b4",
                    },
                },
                
                ".css-bshv44-MuiButtonBase-root-MuiListItem-root":{
                  paddingLeft : "5px",
                  paddingRight : "5px",
                  paddingTop : "0px",
                  paddingBottom : "0px",

                  "& .MuiTypography-root": {
                      // text in front of icon
                      // fontWeight: "bold",
                      color: "#000",
                    },
      
                },
                ".css-9mgopn-MuiDivider-root": {
                    borderWidth: "2px",
                    borderColor : "rgba(0,0,0,0.22)",
                   
                },

                "& .MuiSvgIcon-root": {
                  // icon colour
                  // color: "#4d5151",
                   color: "#000",
                },

                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.82))',
                  marginTop: "14px",
                  marginLeft:"0px",
                  border:"2px solid #5514b4",
                  borderRadius : "10px",
                  
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
             <List>
                {/* ------------------------------MAIN MENU : References--------------------------------------- */}
                <ListItem  button 
                  // component={Link}
                  // to="/"
                  onClick={handlelistopen1}
                >
                  <ListItemText style={{fontWeight:"bold"}} primary="References" />
                  {expandlist1 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={expandlist1} unmountOnExit timeout="auto">
                  <List component="div" style={{ marginLeft: "10px" }}>
                    <ListItem button component={Link}
                      to="/references/WorkFlow"
                      selected={selectedIndex1 === 11}
                      onClick={(event) => handleClickOnSelectedItem(event, 11)}
                    >
                      <ListItemText primary="WorkFlow" />
                    </ListItem>
                    <ListItem button component={Link}
                      to="/references/Reports"
                      selected={selectedIndex1 === 12}
                      onClick={(event) => handleClickOnSelectedItem(event, 12)}
                    >
                      <ListItemText primary="Reports" />
                    </ListItem>
                    <ListItem button component={Link}
                      to="/references/CorpScreen"
                      selected={selectedIndex1 === 13}
                      onClick={(event) => handleClickOnSelectedItem(event, 13)}
                    >
                      <ListItemText primary="CorpScreen" />
                    </ListItem>
                   
                    {/* <ListItem button component={Link}
                      to="/references/inboundAccessType"
                      selected={selectedIndex1 === 11}
                      onClick={(event) => handleClickOnSelectedItem(event, 11)}
                    >
                      <ListItemText primary="Inbound Access Type" />
                    </ListItem>
                    <ListItem button component={Link}
                      to="/references/switches"
                      selected={selectedIndex1 === 12}
                      onClick={(event) => handleClickOnSelectedItem(event, 12)}
                    >
                      <ListItemText primary="Switches" />
                    </ListItem> 
                                        
                    <ListItem button component={Link}
                      to="/references/barredCCCombination"
                      selected={selectedIndex1 === 13}
                      onClick={(event) => handleClickOnSelectedItem(event, 13)}
                    >
                      <ListItemText primary="Barred CC Combination" />
                    </ListItem>
                    */}
                    <ListItem button component={Link}
                      to="/references/sbcLocation"
                      selected={selectedIndex1 === 14}
                      onClick={(event) => handleClickOnSelectedItem(event, 14)}
                    >
                      <ListItemText primary="SBC Location" />
                    </ListItem>
                    <ListItem button component={Link}
                      to="/references/industry"
                      selected={selectedIndex1 === 15}
                      onClick={(event) => handleClickOnSelectedItem(event, 15)}
                    >
                      <ListItemText primary="Industry" />
                    </ListItem>
                    <ListItem button component={Link}
                      to="/references/order"
                      selected={selectedIndex1 === 16}
                      onClick={(event) => handleClickOnSelectedItem(event, 16)}
                    >
                      <ListItemText primary="Order" />
                    </ListItem>
                    <ListItem button component={Link}
                      to="/references/callSimulator"
                      selected={selectedIndex1 === 17}
                      onClick={(event) => handleClickOnSelectedItem(event, 17)}
                    >
                      <ListItemText primary="Call Simulator Plan" />
                    </ListItem>
                    <ListItem button component={Link}
                      to="/references/bpm"
                      selected={selectedIndex1 === 18}
                      onClick={(event) => handleClickOnSelectedItem(event, 18)}
                    >
                      <ListItemText primary="BPM" />
                    </ListItem>
                  </List>
                </Collapse>
                <Divider/>
              {/* ----------------------------Main Menu : Utilities ------------------------------- */} 
                <ListItem button 
                  // component={Link}
                  // to="/"
                  onClick={handlelistopen2}
                >
                  <ListItemText style={{fontWeight:"bold"}}  primary="Utilities" />
                  {expandlist2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem> 
                <Collapse in={expandlist2} unmountOnExit timeout="auto">
                  <List component="div" style={{ marginLeft: "10px" }}>
                    <ListItem button component={Link}
                      to="/utilities/activateIndividualPlans"
                      selected={selectedIndex1 === 21}
                      onClick={(event) => handleClickOnSelectedItem(event, 21)}
                    >
                      <ListItemText primary="Activate Individual Plans" />
                    </ListItem>
                    <ListItem button component={Link}
                      to="/utilities/activateSets"
                      selected={selectedIndex1 === 22}
                      onClick={(event) => handleClickOnSelectedItem(event, 22)}
                    >
                      <ListItemText primary="Activate Sets" />
                    </ListItem>
                    <ListItem button component={Link}
                      to="/utilities/updatePhoneEndpoints"
                      selected={selectedIndex1 === 23}
                      onClick={(event) => handleClickOnSelectedItem(event, 23)}
                    >
                      <ListItemText primary="Update Phone Endpoints" />
                    </ListItem>
                    <ListItem button component={Link}
                      to="/utilities/createAnDualBuild"
                      selected={selectedIndex1 === 24}
                      onClick={(event) => handleClickOnSelectedItem(event, 24)}
                    >
                      <ListItemText primary="Create An Dual Build" />
                    </ListItem>
                    <ListItem button component={Link}
                      to="/utilities/updateAccessNo"
                      selected={selectedIndex1 === 25}
                      onClick={(event) => handleClickOnSelectedItem(event, 25)}
                    >
                      <ListItemText primary="Update Access No" />
                    </ListItem>
                    
                   
                  </List>  
                </Collapse>  
            </List>  
                {/* -------------------------------------------------------------------- */}
            {/* <List style={{maxHeight: '100%', overflow: 'auto'}}>    
             <Link to="/" className={classes.link}>
                  <ListItem
                    disableRipple
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleClickOnSelectedItem(event, 1)}
                  >
                    <ListItemIcon>
                      {" "}
                      <HomeIcon />{" "}
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                </Link>
                <ListItem
                  button
                  disableRipple
                  component={Link}
                  to="/general"
                  onClick={handlelistopen}
                >
                  <ListItemIcon>
                    {" "}
                    <AssignmentIcon />{" "}
                  </ListItemIcon>
                  <ListItemText primary="General Tab" />
                  {expandlist ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={expandlist} unmountOnExit timeout="auto">
                  <List component="div" style={{ marginLeft: "20px" }}>
                    <ListItem
                      button
                      disableRipple
                      component={Link}
                      to="/general/Reports"
                      selected={selectedIndex === 2}
                      onClick={(event) => handleClickOnSelectedItem(event, 2)}
                    >
                      <ListItemIcon>
                        {" "}
                        <SummarizeIcon />{" "}
                      </ListItemIcon>
                      <ListItemText primary="Reports" />
                    </ListItem>

                    <ListItem
                      button
                      disableRipple
                      component={Link}
                      to="/general/WorkFlow"
                      selected={selectedIndex === 3}
                      onClick={(event) => handleClickOnSelectedItem(event, 3)}
                    >
                      <ListItemIcon>
                        {" "}
                        <DisplaySettingsIcon />{" "}
                      </ListItemIcon>
                      <ListItemText primary="WorkFlow" />
                    </ListItem>

                    <ListItem
                      button
                      disableRipple
                      component={Link}
                      to="/general/AccessNo"
                      selected={selectedIndex === 4}
                      onClick={(event) => handleClickOnSelectedItem(event, 4)}
                    >
                      <ListItemIcon>
                        {" "}
                        <AssignmentIcon />{" "}
                      </ListItemIcon>
                      <ListItemText primary="Access No" />
                    </ListItem>
                  </List>
                </Collapse>

                <Link to="/info" className={classes.link}>
                  <ListItem
                    disableRipple
                    button
                    selected={selectedIndex === 5}
                    onClick={(event) => handleClickOnSelectedItem(event, 5)}
                  >
                    <ListItemIcon>
                      {" "}
                      <InfoIcon />{" "}
                    </ListItemIcon>
                    <ListItemText primary="Info" />
                  </ListItem>
                </Link>
              </List> */}
            </Menu>  


          <Routes>
            <Route path="/" element={<Home/>} />

            
            <Route path="searchAdv" element={<SearchBarUII/>}/>
            
            <Route path="references/Reports" element={<Combine />} />
            <Route path="references/WorkFlow" element={<StepperApi />} />
            <Route path="references/CorpScreen" element={<CorpScreen />}/>
            {/* <Route path="references/favourites" element={<SelectedFav/>} /> */}
            <Route path="references/CorpScreen/AccessNo" element={<AccessNo/>}/>
            <Route path="references/CorpScreen/RoutingPlan" element={<CorpScreen />}/>
            <Route path="references/CorpScreen/Details" element={<Details/>}/>
            <Route path="references/CorpScreen/EndPoints" element={<EndPoints/>}/>

            {/* <Route path="general/Reports" element={<Combine />} />
            <Route path="general/WorkFlow" element={<StepperApi />} />
            <Route path="general/CorpScreen" element={<CorpScreen />} />
            <Route path="general/CorpScreen/Details" element={`Details Tab`}/>
            <Route path="general/CorpScreen/AccessNo" element={`Access No Tab`}/>
            <Route path="general/CorpScreen/RoutingPlan" element={<CorpScreen />}/>
            <Route path="general/CorpScreen/EndPoints" element={`End Points Tab`}/>
            <Route path="general/AccessNo" element={<Employees />} />
            <Route path="general/profile" element={<Profile />} />
            <Route path="general/profile/:id" element={<User/>} /> */}
           
          </Routes>
          {/* <AllComponent/> */}
        
      </Box>
    </Box>
    </>
  );
}

