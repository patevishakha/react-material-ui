// import React, { useContext } from "react";
// import {
//   CssBaseline,
//   Container,
//   Paper,
//   Box,
//   Typography,
// } from "@material-ui/core";
// import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core";

// import theme from "../Theme";
// import { ThemeProvider, createStyles } from "@material-ui/core/styles";
// import { Col1 } from "./Col1";
// import { Col2 } from "./Col2";
// import { Col3 } from "./Col3";
// import { Button } from "@mui/material";

// import { Context1 } from "../GlobalData/Storereport";
// import DatesCol from "./DatesCol";


// import Wrap from "../Wrap";
// // import StaticFavTemplate from "../FavouritesTemplates/StaticFavTemplate";

// const useStyle = makeStyles((theme) => ({
//   backgroundColourClass: {
//     backgroundColor: "#eee",
//   },
//   typographyClass: {
//     // fontWeight: "bold",
//   },

//   rootClass: {
//     "& .MuiFormControl-root": {
//       width: "90%",
//       margin: theme.spacing(1),
//       //paddingTop: "100px",
//       //backgroundColor: "red",
//     },

//     "& .MuiTypography-root": {
//       width: "90%",
//       //backgroundColor: "red",
//     },
//     "& .MuiBox-root-19": {
//       display: "flex",
//       justifyContent: "center",
//     },
//   },
// }));

// function Combine() {
//   const classes = useStyle();
//   const showData = () => {
//     console.log(state1);
//   };
//   const [state1, setState1] = useContext(Context1);
//   //"#d7abf5"
//   // "#d4bcf8"
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Wrap heading="CUSTOMER REPORT">
//         <Container
//           component={Box}
//           style={{
//             position: "relative",
//             zIndex: "1",
//             // marginTop: "-80px",
//             //marginTop: "-50px",
//             marginTop: "-70px",
//             //marginLeft: "10px",
//             //marginRight: "4.5%",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Paper
//             //alignSelf="center"
//             display="flex"
//             justifyContent=" center"
//             elevation={4}
//             component={Box}
//             sx={{
//               borderRadius: "13px",
//               border: "1px solid #5514B4",
//               width: "90%",
//               //marginTop: "100px",
//             }}
//             p={4}
//           >
//           {/* <StaticFavTemplate name ='combine' label="Customer Reports"  space = {11}> */}
//             <form className={classes.rootClass}>
//               <Grid container>
//                 <Grid item lg={6} md={6} sm={12} xs={12}>
//                   <Col1 />
//                   <Col2 />
//                   <DatesCol />
//                 </Grid>
//                 {/* <Grid item lg={1} md={1}></Grid> */}
//                 <Grid item lg={6} md={6} sm={12} xs={12}>
//                   <Col3 />
//                 </Grid>
//               </Grid>
//             </form>
//           {/* </StaticFavTemplate>   */}
//           </Paper>
//         </Container>
//         {/* </Grid> */}
//       </Wrap>
//     </ThemeProvider>
//   );
// }

// export default Combine;

import React, { useContext } from "react";
import {
  CssBaseline,
  Container,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import theme from "../Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Col1 } from "./Col1";
import { Col2 } from "./Col2";
import { Col3 } from "./Col3";
import { Button } from "@mui/material";

import { Context1 } from "../GlobalData/Storereport";
import DatesCol from "./DatesCol";

import Wrap from "../Wrap";
import StaticFavTemplate from "../FavouritesTemplates/StaticFavTemplate";
const useStyle = makeStyles((theme) => ({
  backgroundColourClass: {
    backgroundColor: "#eee",
  },
  typographyClass: {
    // fontWeight: "bold",
  },

  rootClass: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
      //paddingTop: "100px",
      //backgroundColor: "red",
    },

    "& .MuiTypography-root": {
      width: "90%",
      //backgroundColor: "red",
    },
    "& .MuiBox-root-19": {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

function Combine() {
  const classes = useStyle();
  const showData = () => {
    console.log(state1);
  };
  const [state1, setState1] = useContext(Context1);
  //"#d7abf5"
  // "#d4bcf8"
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrap heading="CUSTOMER REPORT">
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
            p={4}
          >
            <StaticFavTemplate name ='combine' label="Customer Reports"  space = {11}>
            <form className={classes.rootClass}>
              <Grid container>
                {/* <Typography
                  variant="h6"
                  //align="left"
                  align="center"
                  color="primary"
                  style={{
                    marginBottom: "20px",
                    //  marginLeft: "50px",
                    marginLeft: "30px",
                    fontWeight: "Bold",
                  }}
                >
                  CUSTOMER REPORT
                </Typography> */}
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Col1 />
                  <Col2 />
                  <DatesCol />
                </Grid>
                {/* <Grid item lg={1} md={1}></Grid> */}
                <Grid item lg={5} md={5} sm={12} xs={12}>
                  <Col3 />
                </Grid>
              </Grid>
            </form>
            </StaticFavTemplate>
          </Paper>
        </Container>
        {/* </Grid> */}
      </Wrap>
    </ThemeProvider>
  );
}

export default Combine;
