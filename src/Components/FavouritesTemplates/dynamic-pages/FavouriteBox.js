import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";



const FavouriteBox = props =>{
    return (
        <Grid item lg={3} md={3} sm={6} xs={12}>
        <Box
        sx={{
            padding:2,
            margin:1,
            width: '95%',
            boxShadow: 5,
            borderRadius: 3,
            color:'white',
            background: 'linear-gradient(to right bottom, #1a237e, #ab47bc)',
            // backgroundColor: '#561571',
            '&:hover': {
            backgroundColor: '#561571',
            opacity: [0.8, 0.8, 0.8],
            },

        }}
        >       
           {props.children}
            
        </Box>
        </Grid>
    )
}

export default FavouriteBox;