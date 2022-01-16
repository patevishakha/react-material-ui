import * as React from 'react';
import {useTheme } from '@mui/material/styles';
import {Box,Drawer,CssBaseline,Toolbar,Divider,Typography,IconButton} from '@mui/material';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import {List,ListItemText,ListItemIcon,ListItem,ListItemButton} from '@mui/material';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';


// // import {MenuIcon,ChevronLeftIcon,ChevronRightIcon,InboxIcon,MailIcon} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DraftsIcon from '@mui/icons-material/Drafts';

import AllComponent from './Forms/AllComponent';
import HeaderIcons from './HeaderIcons';
import {Main,AppBar ,DrawerHeader} from './PersistantFileStyles';
// import StepApi from '../StepApi';
import StepperApi from './StepperApi';
const drawerWidth = 240;

export default function Persistant() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            color : '#000',
             backgroundColor:'#8e24aa',
            //  #5D3FD3 , #1F51FF  ,#673ab7,#512da8
            // backgroundImage: 'linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%)',
         
          },
          '& .MuiTypography-root':{
            fontWeight : 'Bolder',
            color:'#fff',
          },
          '& .MuiSvgIcon-root':{
            color:'#fff',
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
          <Divider style={{color:'#eee'}} />
          <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItemButton>
              </ListItem>
              <ListItem button>
                <ListItemIcon > <DraftsIcon/> </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
          </List>
          <Divider />  
         
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
         
      </Drawer>

        <Main open={open}>
          <DrawerHeader />
              <StepperApi/>
              {/* <AllComponent/> */}
        </Main>
    </Box>
  );
}
