import React from 'react'
import { CssBaseline, Container, Paper, Box, Typography } from "@material-ui/core";
import { Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import theme from '../Theme';
import {ThemeProvider} from '@material-ui/core/styles';

import FormElement from '../NewState/FormElement';
import AppId from './AppId';
import Routing from './Routing';

const useStyle = makeStyles(theme=>({
    backgroundColourClass:{
            backgroundColor: '#eee',
    },
    typographyClass: {
          fontWeight: 'bold',
          color: "#5514B4",
      },
    rootClass : {

        '& .MuiFormControl-root' : {
        width:'90%',
        margin:theme.spacing(1)
        },

        '& .MuiTypography-root' : {
            width:'90%',
            textAlign : "center",
            }
        
    }
}))



function ActivateStateAllComponent() {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />                
                <form className={classes.rootClass}>
                    <Grid container>
                       
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                        <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Workflow Status</Typography>
                            <FormElement/>
                        </Grid>
        
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Routing Plan</Typography>
                                <Routing/> 
                            <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">App Id Details</Typography>
                                <AppId/>
                             
                        </Grid>

                        {/* <Grid item lg={12} sm={12} xs={12}>
                        <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Routing Plan</Typography>
                            <Routing/> 
                        </Grid> */}

                    </Grid>
                </form>
        </ThemeProvider>
    )
}

export default ActivateStateAllComponent;
