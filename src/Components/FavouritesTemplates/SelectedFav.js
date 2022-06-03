import React,{useContext} from "react";
import {
    CssBaseline,
    Container,
    Paper,
    Box,
    Typography,
  } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import Wrap from '../Wrap';
import theme from '../Theme';
import FavouriteBox from "./dynamic-pages/FavouriteBox";

import { Context1 } from "../GlobalData/Favourites";
import StaticFavTemplate from "./StaticFavTemplate";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
`;

const SelectedFav = () =>{
    const [favData , setFavData] = useContext(Context1);

    return(
        <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Wrap heading="FAVOURITES">
        <Container
          component={Box}
          style={{
            position: "relative",
            zIndex: "1",
            // marginTop: "-80px",
            //marginTop: "-50px",
            marginTop: "-60px",
            //marginLeft: "10px",
            //marginRight: "4.5%",
            display: "flex",
            justifyContent: "center",
          }}
        > */}
        <Grid container item>
          <Grid item lg={12} xs={12}>
          <Typography style={{color:"#5514B4",fontSize:"1.3rem",fontWeight:"bold"}}>Favourites</Typography>
          </Grid>
          <Grid item lg={12} xs={12}>
          <Paper
            //alignSelf="center"
            display="flex"
            justifyContent=" center"
            elevation={4}
            component={Box}
            sx={{
              borderRadius: "13px",
              border: "1px solid #5514B4",
              width: "100%",
              //marginTop: "100px",
            }}
            p={4}
          >
            
            <Grid container spacing={2}>
              {favData.length ==0 && <Typography  variant="h6" color="primary" align="center">No Favourites added</Typography>
              }
            {favData.map(data=>(
                <FavouriteBox>
                    <StaticFavTemplate key={data.name} name = {data.name} label = {data.label} starPosition = "left" space = {8}>
                        <StyledLink to={"/"+data.urlPath} ><h4>{data.label}</h4></StyledLink>
                    </StaticFavTemplate>
                </FavouriteBox>
            ))}
            </Grid>
          </Paper>
          </Grid>
        </Grid>  
        {/* </Container>
      </Wrap> */}
    </ThemeProvider>
    );
}
export default SelectedFav;