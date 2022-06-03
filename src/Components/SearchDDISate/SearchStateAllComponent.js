import React from 'react'
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import theme from '../Theme';
import {ThemeProvider} from '@material-ui/core/styles';

import FormElement from '../NewState/FormElement';
import SearchStateOrderDetails from './SearchStateOrderDetails';

const useStyle = makeStyles(theme=>({
    backgroundColourClass:{
            backgroundColor: '#eee',
    },
    typographyClass: {
          fontWeight: 'bold',
          color:"#5514b4",
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



function SearchStateAllComponent() {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <Container component={Box} p={4}>
                <Paper component={Box} p={4}
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

                        
                        {/* <Grid item lg={6} sm={6} xs={12}>
                        <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Order Details</Typography>
                            <Element2/> 
                        </Grid> */}
        
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography className={`${classes.rootClass} ${classes.typographyClass}`} variant="h6" color="primary">Order Details</Typography>
                            <SearchStateOrderDetails/> 
                        </Grid>
                    </Grid>
                </form>

                {/* </Paper>
            </Container>     */}
            {/* </Box> */}

        </ThemeProvider>
    )
}

export default SearchStateAllComponent;
