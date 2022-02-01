import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import {Box,Drawer,CssBaseline,Toolbar,Divider,Typography,IconButton} from '@mui/material';
import {List,ListItemText,ListItemIcon,ListItem,ListItemButton,Collapse} from '@mui/material';
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import InfoIcon from '@mui/icons-material/Info';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import AllComponent from './Forms/AllComponent';
import HeaderIcons from './HeaderIcons';
import {Main,AppBar ,DrawerHeader} from './PersistantFileStyles';
import StepperApi from './StepperApi';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarMargin : {
    ...theme.mixins.toolbar
  },
  link: {
    textDecoration: 'none',
    // color: theme.palette.text.primary
  }
}))

export default function Persistant() {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [expandlist, setexpandlist] = React.useState(false);
  const [selectedIndex,setSelectedIndex]=React.useState(1);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick=(event,Index)=>{
    setSelectedIndex(Index);
  };

  const handlelistopen = () => {
    setexpandlist(!expandlist);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
            Call Traffic Controller
          </Typography>
          <HeaderIcons/>
        </Toolbar>
      </AppBar>
    
      
      <BrowserRouter>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            color : '#000',

            // drawer backgrounf colour
             backgroundColor:'#F5F5F5',   
            //  #5D3FD3 , #1F51FF  ,#673ab7,#512da8 ,2196f3 ,8e24aa ,739AC5
            // backgroundImage: 'linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%)',
         
          },
          '& .MuiTypography-root':{
            // text in front of icon 
            fontWeight : 'Bolder',
            color:'#000',
          },
          '& .MuiSvgIcon-root':{
            // icon colour
            color:'#000',
          }

        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider style={{color:'#eee',border:'1px solid black'}} />
          
          
          {/* List present in sidebar menu  */}
          {/* {SidebarData.map((item, index) => {
              return <SidebarMenu item={item} key={index} />;
            })} */}
            <List>
              
              <ListItem button component={Link} to="/" className={classes.link}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleClick(event, 0)}>
                <ListItemIcon > <HomeIcon/> </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              

              <Link to="/inbox" className={classes.link}>
              <ListItem disablePadding 
                    selected={selectedIndex === 1}
                    onClick={(event) => handleClick(event, 1)}>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItemButton>
              </ListItem>
              </Link>
              

              <Link to="/drafts" className={classes.link}>
              <ListItem button 
                  selected={selectedIndex === 2}
                  onClick={(event) => handleClick(event, 2)}>
                <ListItemIcon > <DraftsIcon/> </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
              </Link>

              <Link to="/info" className={classes.link}>
              <ListItem button 
                  selected={selectedIndex === 3}
                  onClick={(event) => handleClick(event, 3)}>
                <ListItemIcon > <InfoIcon/> </ListItemIcon>
                <ListItemText primary="Info" />
              </ListItem>
              </Link> 

            <ListItem button component={Link} to="/newinfo" onClick={handlelistopen}>
              <ListItemIcon > <InfoIcon/> </ListItemIcon>
              <ListItemText primary="New Info" />
              {expandlist ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={expandlist} unmountOnExit timeout="auto">
              <List component="div" style={{ marginLeft: "20px" }}>
                <ListItem
                  button component={Link} to="/newinfo/person1"
                  selected={selectedIndex === 6}
                  onClick={(event) => handleClick(event, 6)}
                >
                  <ListItemIcon > <PersonIcon/> </ListItemIcon>
                  <ListItemText primary="Person1" />
                </ListItem>

                <ListItem
                  button component={Link} to="/newinfo/person2"
                  selected={selectedIndex === 4}
                  onClick={(event) => handleClick(event, 4)}
                >
                  <ListItemIcon > <PersonIcon/> </ListItemIcon>
                  <ListItemText primary="Person2" />
                </ListItem>

                <ListItem
                  button component={Link} to="/newinfo/person3"
                  selected={selectedIndex === 5}
                  onClick={(event) => handleClick(event, 5)}
                >
                  <ListItemIcon > <PersonIcon/> </ListItemIcon>
                  <ListItemText primary="Person3" />
                </ListItem>
              </List>
            </Collapse>


          </List>
          <Divider />  
         
          
      </Drawer>
    
      
      <Main open={open}>
          <DrawerHeader />
          {/* <div  className={classes.toolbarMargin}/> */}
            <Routes>
              <Route path="newinfo" element={`This is New Info Page`}/>
              <Route path="/" element={<StepperApi/>}/>
              <Route path="inbox" element={`This is Inbox Page`}></Route>
              <Route path="drafts" element={`This is Drafts Page`}/>
              <Route path="info" element={`This is Infooooo Page`}/>
              <Route path="/newinfo/person1" element={`This is Info of Person1`}/>
              <Route path="/newinfo/person2" element={`This is Info of Person2`}/>
              <Route path="/newinfo/person3" element={`This is Info of Person3`}/>
            </Routes>
              {/* <AllComponent/> */}
      </Main>

      </BrowserRouter>
    </Box>
  );
}

