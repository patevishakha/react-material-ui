import React from 'react'
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import FormElement from './FormElement';
import NewStateElement2 from './NewStateElement2';
import theme from '../Theme';
import {ThemeProvider} from '@material-ui/core/styles';


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
            },
        
    }
}))



function NewStateAllComponent() {
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
                            <NewStateElement2/> 
                        </Grid>
            
                    </Grid>
                </form>

                {/* </Paper>
            </Container>     */}
            {/* </Box> */}

        </ThemeProvider>
    )
}

export default NewStateAllComponent;
