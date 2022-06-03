import React ,{useContext }from "react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {yellow } from '@mui/material/colors';
import { Context1 } from "../GlobalData/Favourites";
import { Grid } from '@material-ui/core';
import  {useLocation} from 'react-router-dom';





const StaticFavTemplate = (props)=>{

    const urlPath = useLocation().pathname.slice(1, );
    // console.log(urlPath);

    const [, , isFavouriteComponent , addToFavourites ,removeFavourites] = useContext(Context1);

    const onClickStar = e =>{
        removeFavourites(props.name)
    }

    const onClickBorderStar = e =>{
        addToFavourites({name:props.name , label:props.label , urlPath:urlPath})
    }

    

    return(
        <div>
            
            
            <Grid container>
                <br/>
            <Grid item lg={props.space} md={props.space} sm={12} xs={12} align="center" >
                {props.children}
            </Grid>
            <Grid item lg={12-props.space} md={12-props.space} sm={12} xs={12}  align={props.starPosition||"center"}>

                {/* {(!props.starPosition) ? < br/>: ""} */}

                {/* <Box
                sx={{
                    padding:0.5,
                    boxShadow: 4,
                    borderRadius: 3,
                    height:"45%",
                    width:"40%",
                    backgroundColor: '#561571',
                    '&:hover': {
                    backgroundColor: '#561571',
                    opacity: [0.8, 0.8, 0.8],
                    },
                }}
                >
                 {
                    isFavouriteComponent(props.name)? 
                    <StarIcon sx={{ color:yellow[500]  }}  fontSize="large" onClick={onClickStar}  /> :
                    // <StarBorderIcon onClick ={onClickBorderStar} fontSize="large" />
                    <StarIcon sx={{ color:grey[100]  }}  fontSize="large" onClick={onClickBorderStar}/> 

                }    
                </Box> */}
                {
                    isFavouriteComponent(props.name)? 
                    <StarIcon sx={{ color:yellow[800], margin:"10px" }}  fontSize="large" onClick={onClickStar}/> :
                    <StarBorderIcon sx={{  margin:1 }} onClick ={onClickBorderStar} fontSize="large" />
                } 
            </Grid>
          </Grid>
        </div>
    )
}

export default StaticFavTemplate;