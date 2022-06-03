import React from 'react';
import theme from '../Theme';

import {CssBaseline,Box,Grid,Paper,Container, Typography} from '@mui/material';
import { ThemeProvider ,makeStyles} from "@material-ui/core/styles";

import Wrap from '../Wrap';
import StaticFavTemplate from '../FavouritesTemplates/StaticFavTemplate';

function Details() {
    console.log("Details called");
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrap heading="DETAILS">
        <Container
          component={Box}
          style={{
            position: "relative",
            zIndex: "1",
            // marginTop: "-80px",
            //marginTop: "-50px",
            marginTop: "-70px",
            //marginLeft: "10px",
            //marginRight: "4.5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            //alignSelf="center"
            display="flex"
            justifyContent=" center"
            elevation={4}
            component={Box}
            sx={{
              borderRadius: "13px",
              border: "1px solid #5514B4",
              width: "90%",
              //marginTop: "100px",
            }}
            p={4}>
          <StaticFavTemplate name ='Details' label="Details"  space = {11}>
            <Box sx={{width: "90%",}}>  
                <Typography>This is Details Page</Typography>   
            </Box>
          </StaticFavTemplate>  
         
          </Paper>
        </Container>
      
      </Wrap>
    </ThemeProvider>
    </>
  )
}

export default Details;