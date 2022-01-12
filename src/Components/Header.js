import React from 'react'
import { useState } from 'react';
import {AppBar,Toolbar,Box, Typography, Grid, IconButton, Badge} from '@material-ui/core';
import {useScrollTrigger,Drawer} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {Menu} from '@material-ui/icons';


import DehazeIcon from '@mui/icons-material/Dehaze';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles({
    AppBarClass:{
      position: "fixed",
      backgroundColor : 'primary',
      // backgroundImage: 'linear-gradient(147deg, #923cb5 0%, #000000 74%)'
    },
    BatchColourClass:{
      // backgroundColor : '#fff',
      color : '#fff'
    },
    MarginClass:{
      marginRight : '1%',
    },
    
    GridClass:{
      display:'flex',
      justifyContent : 'space-between',
      width:'100%'
    },

    DrawerStyleClass:{
      width : '250px',
      height:'100%',
      color : '#000',
      // backgroundImage: 'linear-gradient(147deg, #923cb5 0%, #000000 74%)',
      backgroundImage: 'linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%)',
      textAlign : 'center',
    
    }
})

function Header() {
  const classes = useStyles();
  const [open,setOpen] = useState(false);

  const handleDrawer = ()=>{
    setOpen(true);
  }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll>
        <AppBar className={classes.AppBarClass}>
          <Toolbar>
          <Box className={classes.GridClass}> 
                <Box >         
                <IconButton onClick={handleDrawer} className={classes.MarginClass}>
                  <Badge className={classes.BatchColourClass}>
                      <DehazeIcon/>
                  </Badge>
                </IconButton>
                

                <Drawer
                  anchor = "left"
                  open={open}
                  onClose={()=>{setOpen(false);}}
                >
                 <div className={classes.DrawerStyleClass}>
                    <h4>This is newly Created Drawer</h4>
                 </div>
                </Drawer>  
                
                </Box>
                {/* <Grid item sm></Grid>   */}
                <Box>
                    <Typography variant="h4" style={{marginTop:'4px'}}>Call Traffic Controller</Typography>
                </Box>
              <Box>
                    <IconButton>
                          <Badge badgeContent={2} className={classes.BatchColourClass}>
                              <NotificationsIcon/>
                          </Badge>
                    </IconButton>
                    <IconButton>
                          <Badge  className={classes.BatchColourClass}>
                              <HomeIcon/>
                          </Badge>
                    </IconButton>
                    <IconButton>
                          <Badge className={classes.BatchColourClass}>
                              <SettingsIcon/>
                          </Badge>
                    </IconButton>
                    <IconButton>
                          <Badge className={classes.BatchColourClass}>
                              <AccountCircleIcon/>
                          </Badge>
                    </IconButton>
                </Box>

            </Box>
          </Toolbar>
        </AppBar>
        </ElevationScroll>
        </Box>
    )
}

export default Header
