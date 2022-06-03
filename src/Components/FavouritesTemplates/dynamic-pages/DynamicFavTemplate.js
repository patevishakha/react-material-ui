import React ,{useContext , useState}from "react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {yellow ,grey} from '@mui/material/colors';
import { Grid } from '@material-ui/core';
import  {useLocation} from 'react-router-dom';
import {Context1} from '../../GlobalData/Favourites';



const DynamicFavTemplate = (props)=>{

    const ParentUrl = useLocation().pathname.slice(1, );
    // console.log(ParentUrl);

    const [, , isFavouriteComponent , addToFavourites ,removeFavourites] = useContext(Context1);

    const onClickStar = e =>{
        console.log(props.id)
        removeFavourites(props.id)
    }

    const getUrl=(url,id)=> (url+'/'+id)

    const onClickBorderStar = e =>{
        addToFavourites({name:props.id ,
                        label:props.label ,
                        urlPath: getUrl(ParentUrl,props.id)})
                }
    return(
        <div>
            
            
            <Grid container>
                <br/>
            <Grid item lg={props.space} md={props.space} sm={12} xs={12} align="center" >
                {props.children}
            </Grid>
            <Grid item lg={12-props.space} md={12-props.space} sm={12} xs={12}  align={props.starPosition||"center"}>

                {(!props.starPosition) ? < br/>: ""}

                {
                    isFavouriteComponent(props.id)? 
                    <StarIcon sx={{ color:yellow[500], margin:1 }}  fontSize="large" onClick={onClickStar}/> :
                    <StarBorderIcon sx={{  margin:1 }} onClick ={onClickBorderStar} fontSize="large" />
                } 
            </Grid>
          </Grid>
        </div>
    )
}

export default DynamicFavTemplate;