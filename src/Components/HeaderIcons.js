import React from 'react'
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {IconButton, Badge} from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const useStyles = makeStyles({
       BatchColourClass:{
      // backgroundColor : '#fff',
      color : '#fff'
    },
})

function HeaderIcons() {
    const classes = useStyles();
    return (
        <>
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
        </>
    )
}

export default HeaderIcons
