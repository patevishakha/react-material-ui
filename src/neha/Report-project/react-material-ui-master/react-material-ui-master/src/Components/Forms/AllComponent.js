import React from 'react'
import { CssBaseline, Container, Paper, Box, Typography } from "@material-ui/core";
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import FormElement from './FormElement';
import FormElement2 from './FormElement2';
import theme from '../Theme';
import {ThemeProvider} from '@material-ui/core/styles';


const useStyle = makeStyles(theme=>({
    
    backgroundColourClass:{
            backgroundColor: '#eee',
    },
    typographyClass: {
          fontWeight: 'bold'
      },
    rootClass : {

        '& .MuiFormControl-root' : {
        width:'90%',
        margin:theme.spacing(1)
        },

        '& .MuiTypography-root' : {
            width:'90%',
            }
        
    }
}))



function AllComponent() {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <Container  component={Box} p={3}>
                <Paper component={Box} p={3}
             > */}
                
               
            {/* <Box
                boxShadow={10}
                bgcolor="background.paper"
                // bgcolor="primary.light"
                //bgcolor={classes.backgroundCOlourClass}
                p={4}
                m={5}>   */}
                
                <form className={classes.rootClass}>
                    <Grid container>
                       
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                        <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Workflow Status</Typography>
                            <FormElement/>
                        </Grid>

                        
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Workflow Basic Parameter</Typography>
                            <FormElement2/> 
                        </Grid>
            
                    </Grid>
                </form>

                {/* </Paper>
            </Container>     */}
            {/* </Box> */}

        </ThemeProvider>
    )
}

export default AllComponent;
