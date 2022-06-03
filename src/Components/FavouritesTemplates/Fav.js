import React,{useContext} from "react";
import { Context1 } from "../GlobalData/Favourites";
import StaticFavTemplate from "./StaticFavTemplate";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from '@mui/material/Box';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
`;

const Fav =() =>{
    const [favData , setFavData] = useContext(Context1);

    return( 
        <div>   
        <h1 align="center">Favourites</h1>
        
        <Box
        sx={{
            padding:5,
            marginLeft:1,
            width: 400,
            boxShadow: 4,
            borderRadius: 3,
            backgroundColor: '#561571',
            '&:hover': {
            backgroundColor: '#561571',
            opacity: [0.8, 0.8, 0.8],
            },
            
        }}
        
        >
            {favData.map(data=>(
              
            <StaticFavTemplate  key={data.name} name = {data.name} label = {data.label} starPosition = "left" space = {6}>
             
                <StyledLink to={"/"+data.urlPath} ><h4>{data.label}</h4></StyledLink>
                
            </StaticFavTemplate>
            
            ))}
        </Box>
        </div> 
    )
}

export default Fav;
