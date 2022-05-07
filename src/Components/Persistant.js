import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import {
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
  ListItemButton,
  Collapse,
} from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import InfoIcon from "@mui/icons-material/Info";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import SearchBarCompo from "./SearchBarCompo";
import HeaderIcons from "./HeaderIcons";
import { Main, AppBar, DrawerHeader } from "./PersistantFileStyles";
import StepperApi from "./StepperApi";
import Combine from "./Report/Combine";
import Employees from "./AccessNo/pages/Employees";

import Storereport from "./GlobalData/Storereport";
const drawerWidth = 240;

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
  const [open, setOpen] = React.useState(false);
  const [expandlist, setexpandlist] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event, Index) => {
    setSelectedIndex(Index);
  };

  const handlelistopen = () => {
    setexpandlist(!expandlist);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#5514B4" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, paddingLeft: "80px" }}
          >
            Call Traffic Controller
          </Typography>
          <SearchBarCompo style={{ padding: "2px" }} />
          <HeaderIcons />
        </Toolbar>
      </AppBar>

      <BrowserRouter>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              marginTop: "64px",
              boxSizing: "border-box",
              color: "#000",

              // drawer backgrounf colour
              backgroundColor: "#fff",
              //backgroundColor: "rgba(23,52,57,0.5)",
              //  #5D3FD3 , #1F51FF  ,#673ab7,#512da8 ,2196f3 ,8e24aa ,739AC5
              // backgroundImage: 'linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%)',
            },
            // ".css-bshv44-MuiButtonBase-root-MuiListItem-root.Mui-selected": {
            //   color: "#5514B4",
            // },
            ".css-bshv44-MuiButtonBase-root-MuiListItem-root.Mui-selected:hover":
              {
                backgroundColor: "#e4d6fa",
                // "& .MuiTypography-root": {
                //   // text in front of icon
                //   fontWeight: "Bolder",
                //   color: "#5514B4",
                //   //backgroundColor: "#BB95F3",
                // },
              },

            ".css-bshv44-MuiButtonBase-root-MuiListItem-root.Mui-selected": {
              backgroundColor: "#e4d6fa",
              //color: white;
              "& .MuiTypography-root": {
                // text in front of icon
                fontWeight: "Bolder",
                color: "#5514b4",
              },
              "& .MuiSvgIcon-root": {
                // icon colour
                color: "#5514b4",
              },
            },
            "& .MuiTypography-root": {
              // text in front of icon
              fontWeight: "Bolder",
              color: "#4d5151",
            },

            "& .MuiSvgIcon-root": {
              // icon colour
              color: "#4d5151",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider style={{ color: "#eee", border: "1px solid black" }} />

          {/* List present in sidebar menu  */}
          {/* {SidebarData.map((item, index) => {
              return <SidebarMenu item={item} key={index} />;
            })} */}
          <List>
            <ListItem
              disableRipple
              button
              component={Link}
              to="/"
              className={classes.link}
              selected={selectedIndex === 0}
              onClick={(event) => handleClick(event, 0)}
            >
              <ListItemIcon>
                {" "}
                <HomeIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

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
                  onClick={(event) => handleClick(event, 2)}
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
                  onClick={(event) => handleClick(event, 3)}
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
                  onClick={(event) => handleClick(event, 4)}
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
                onClick={(event) => handleClick(event, 5)}
              >
                <ListItemIcon>
                  {" "}
                  <InfoIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Info" />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>

        <Main open={open} sx={{ padding: "0px" }}>
          <DrawerHeader />
          {/* <div  className={classes.toolbarMargin}/> */}
          <Routes>
            <Route path="/" element={`Home Tab`} />
            <Route path="general" element={`General Tab`} />
            <Route path="general/Reports" element={<Combine />} />
            <Route path="general/WorkFlow" element={<StepperApi />} />
            <Route path="general/AccessNo" element={<Employees />} />

            <Route path="info" element={`This is Info Page`} />
          </Routes>
          {/* <AllComponent/> */}
        </Main>
      </BrowserRouter>
    </Box>
  );
}
