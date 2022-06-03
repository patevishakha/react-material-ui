import React from 'react';
import theme from '../Theme';

import {CssBaseline,Box,Grid,Paper,Container, Typography} from '@mui/material';
import { ThemeProvider ,makeStyles} from "@material-ui/core/styles";

import Wrap from '../Wrap';
import StaticFavTemplate from '../FavouritesTemplates/StaticFavTemplate';

function AccessNo() {
   
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrap heading="ACCESS NO">
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

            <StaticFavTemplate name ='AccessNo' label="Access No"  space = {11}>
            <Box sx={{width: "90%",}}>  
                <Typography>This is AccessNo Page</Typography>   
            </Box>
            </StaticFavTemplate>
         
          </Paper>
        </Container>
      
      </Wrap>
    </ThemeProvider>
    </>
  )
}

export default AccessNo;