import React from "react";
import { Breadcrumbs as MUIBreadcrumbs,Link,Typography } from "@mui/material";
import {useLocation,useNavigate } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../Components/Theme';

const BreadCrumCompo = props=>{
    // const {history,location} = props;
    // const {pathname} = location;

   

    const location = useLocation();
    const navigate = useNavigate();
    const pathnames= location.pathname.split("/").filter(x=>x);
    console.log(pathnames);
    return(
        <ThemeProvider theme={theme}>
        <MUIBreadcrumbs style={{color:"#fff",fontWeight: "Bold"}}>
                <Typography style={{color:"#fff",fontWeight: "Bold"}}>Path : </Typography>
                {pathnames.length > 0 ? (
                    <Link style={{cursor:"pointer",color:"#fff",fontWeight: "Bold"}} onClick={() => navigate("/")}>Home</Link>
                ) : (
                    <Typography style={{color:"#fff",fontWeight: "Bold"}}> Home </Typography>
                )}

                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                    <Typography key={name} style={{color:"#fff",fontWeight: "Bold"}}>{name}</Typography>
                    ) : (
                    <Link style={{cursor:"pointer",color:"#fff",fontWeight: "Bold"}} key={name} onClick={() => navigate(routeTo)}>
                        {name}
                    </Link>
                    );
                })}
        </MUIBreadcrumbs>
        </ThemeProvider>
    );
};

export default BreadCrumCompo;