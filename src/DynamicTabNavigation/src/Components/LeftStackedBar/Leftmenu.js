import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  Collapse,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "../Routing/Home";
import Contact from "../Routing/Contact";
import About from "../Routing/About";

import { makeStyles } from "@material-ui/styles";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "inherit",
    backgroundColor: "inherit",
  },
}));

const drawerWidth = 240;
function Leftmenu(props) {
  const [open, setOpen] = useState(false);
  const [expandlist, setexpandlist] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const [listItems, setlistItems] = useState([]);
  const [k, setK] = useState(0);
  const navigate = useNavigate();
  const handleopen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlelistopen = () => {
    setexpandlist(!expandlist);
  };
  const routePath = (Index) => {
    switch (Index) {
      case 0:
        return { path: "/", text: "Home" };
        break;
      case 1:
        return { path: "/Contact", text: "Contact" };
        break;
      case 2:
        return { path: "/About", text: "About" };
        break;
      case 3:
        return { path: "/Info", text: "Info" };
        break;
    }
  };

  const handleClick = (event, Index) => {
    setSelectedIndex(Index);
    setlistItems([
      ...listItems,
      { path: routePath(Index).path, text: routePath(Index).text, keyval: k },
    ]);
    setK(k + 1);
  };
  const filterItems = (key) => {
    const index = listItems.findIndex((item) => item.keyval === key);

    const newItems = listItems.filter((item) => item.keyval !== key);
    // console.log(newItems.length)
    if (newItems.length === 0) {
      navigate("/");
    } else if (newItems.length === 1) {
      navigate(newItems[0].path);
    } else if (newItems.length > 1) {
      if (index === newItems.length) {
        navigate(listItems[index - 1].path);
      } else {
        navigate(listItems[index + 1].path);
      }
    }
    setlistItems(newItems);
  };
  const classes = useStyles();
  return (
    <>
      <MenuOpenIcon onClick={handleopen}></MenuOpenIcon>
      <div style={{ display: "flex" }}>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          style={{
            width: drawerWidth,
            backgroundColor: "lightpink",
            marginLeft: drawerWidth,
          }}
          classes={{ paper: classes.drawerPaper }}
        >
          <KeyboardDoubleArrowLeftIcon onClick={handleClose} />
          <List>
            <ListItem
              button
              component={Link}
              to="/"
              onClick={(event) => handleClick(event, 0)}
            >
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/Contact"
              onClick={(event) => handleClick(event, 1)}
            >
              <ListItemText>contact</ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/About"
              onClick={(event) => handleClick(event, 2)}
            >
              <ListItemText>About </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <h3>STACK</h3>
              </ListItemText>
            </ListItem>
            {listItems.map((item) => (
              <Grid container key={item.keyval}>
                <Grid item xs={8}>
                  <ListItem button component={Link} to={item.path}>
                    <ListItemText>{item.text} </ListItemText>
                  </ListItem>
                </Grid>
                <Grid item xs={4}>
                  <IconButton
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                    onClick={() => {
                      filterItems(item.keyval);
                    }}
                  >
                    <Close />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </List>
        </Drawer>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}
export default Leftmenu;
