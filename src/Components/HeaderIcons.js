


import React from 'react'
import {Box,Menu,MenuItem,Typography,Tooltip} from '@material-ui/core';
import { BrowserRouter, Link ,useNavigate} from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import {IconButton, Badge,ListItemIcon} from '@material-ui/core';


import NotificationsIcon from '@mui/icons-material/Notifications';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';


const useStyles = makeStyles({
       BatchColourClass:{
      // backgroundColor : '#fff',
      color : '#fff'
    },
    
    rootclass:{
        '& .MuiMenu-paper':{
            // marginTop:"40px",
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            border : "2px solid #5514B4",
            marginTop : "2px",
            marginRight:"0px",
            '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 50,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
            
        },
        '& .MuiListItem-root:hover':{
            backgroundColor:"#7841c1",
            color:"#fff",
            fontWeight:"bold",
            '& .MuiListItemIcon-root':{
                color:"#fff",
                fontWeight:"bold",
            },
        },
        '& .MuiListItemIcon-root':{
            minWidth : "30px",
            color:"#000",
        } ,
        '& .MuiList-root':{
            color:"#000",
        }

    }
})

function HeaderIcons() {
    const classes = useStyles();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate= useNavigate();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    const [selectedInSettingIcon,setSelectedInSettingIcon]=React.useState(0);
    const handleSelectedItem=(event,index)=>{
        setSelectedInSettingIcon(index);
    }  



    return (
        <>
             <Box>
                    <IconButton onClick={()=>navigate("/searchAdv")} >
                        <Badge className={classes.BatchColourClass} >
                            <SearchIcon />
                        </Badge>
                    </IconButton>

                    <IconButton
                        // component={Link}
                        // to="/"
                        // style={{textDecoration:"none"}}
                        onClick={()=>navigate("/")}
                        >
                          <Badge  className={classes.BatchColourClass}>
                              <HomeIcon/>
                          </Badge>
                    </IconButton>
                    
                    <>
                        <Tooltip title="Open settings">
                            <IconButton  onClick={handleOpenUserMenu}>
                                <Badge className={classes.BatchColourClass}>
                                    <AccountCircleIcon/>
                                </Badge>
                            </IconButton>
                        </Tooltip>    
                        <Menu
                                className={classes.rootclass}
                                getContentAnchorEl={null}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                id="account-menu"
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                
                                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

                               
                                
                            >
                                {/* if setting is the array of eveything you want to display like : const settings = ['Profile', 'Settings','Dashboard', 'Logout'];
                                
                                {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography >{setting}</Typography>
                                </MenuItem>
                                ))} */}
                                <MenuItem onClick={(event) => handleSelectedItem(event, 1)}>
                                    <ListItemIcon >
                                        <AccountCircleIcon fontSize="small" />
                                    </ListItemIcon>
                                    Profile
                                </MenuItem>

                                <MenuItem onClick={(event) => handleSelectedItem(event, 2)}>
                                    <ListItemIcon >
                                        <SettingsIcon fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>

                                <MenuItem onClick={(event) => handleSelectedItem(event, 3)}>
                                    <ListItemIcon >
                                        <DashboardIcon fontSize="small" />
                                    </ListItemIcon>
                                    DashBoard
                                </MenuItem>

                                <MenuItem onClick={(event) => handleSelectedItem(event, 4)}>
                                    <ListItemIcon >
                                        <LogoutIcon fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>

                                <MenuItem onClick={(event) => handleSelectedItem(event, 5)}>
                                    <ListItemIcon >
                                        {/* <LogoutIcon fontSize="small" /> */}
                                    </ListItemIcon>
                                    Help
                                </MenuItem>
                        </Menu>
                            
                    </>
                </Box>  
        </>
    )
}

export default HeaderIcons
