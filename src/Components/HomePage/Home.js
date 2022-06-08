import React from 'react';
import Wrap from '../Wrap';
import theme from '../Theme';

import {CssBaseline,Box,Grid,Paper,Container} from '@mui/material';
import { ThemeProvider ,makeStyles} from "@material-ui/core/styles";
import MagicBell, {FloatingNotificationInbox} from "@magicbell/magicbell-react";

import SelectedFav from '../FavouritesTemplates/SelectedFav';

/**
 * You can use userExternalId instead of the userEmail - https://bit.ly/3oiDSAe
 */


const useStyles = makeStyles((theme) => ({

}));
const newtheme = {
      "icon":{"borderColor":"#6113A3","width":"30px" ,"height":"30px"},
      "unseenBadge":{"backgroundColor":"#DF4759"},
      "header":{"backgroundColor":"#6113A3","textColor":"#ffffff","borderRadius":"16px"},
      "footer":{"backgroundColor":"#6113A3","textColor":"#6113A3","borderRadius":"16px"},
      "notification":{"default":{"textColor":"#15091F","borderRadius":"8px","backgroundColor":"#6113A3"},
      "unseen":{"backgroundColor":"#6113A3"},"unread":{"backgroundColor":"#6113A3"}},
    };

function Home() {
  const classes = useStyles(); 
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrap heading="HOME">
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

            <Box sx={{width: "100%",}}>  
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                  <SelectedFav />
                </Box>
                <Box style={{marginTop:"50%",marginLeft:"95%"}}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <MagicBell 
                          // serverURL="https://api.magicbell.dev"
                          // apiKey="b0ff0bfc5cf159e6f5daa3f6b7c390eda4e5a69e"
                          // userEmail="josue@magicbell.io"

                          // actionURL="https://magicbell.com/docs"
                          serverURL="https://api.magicbell.com"
                          apiKey = "4a916985f855b4b5fd0fe23779ab5ffc4352ddb7"
                          userEmail="patevishakha@gmail.com"
                          // userExternalId = "https://bit.ly/3oiDSAe"
                          userKey="4ECKNcDPt1GNFpo/8R/lq6tWmHx8hECHw4ceYAlsxMw="
                          onNewNotification={(notification) => {
                            console.log(notification.title);
                            console.log(notification.content);
                          }}
                          theme={newtheme}
                          //defaultIsOpen
                          bellCounter="unread"
                        >
                          {(props) => (
                            <FloatingNotificationInbox
                            placement="top-start"   //auto-end,top,bottom-end
                              height={400}
                              width={400}
                              {...props}
                            />
                          )}
                      </MagicBell>
                    </Grid>
                </Box>    
            </Box>
         
          </Paper>
        </Container>
      
      </Wrap>
    </ThemeProvider>
    </>
  )
}

export default Home

//================================================================================================

/*

     <Grid item lg={12} >
                  <h4>Home Page</h4> 
                  <SelectedFav/>
              </Grid>

              <Grid item lg={12}  style={{marginTop:"50%",marginLeft:"80%"}}>
                <MagicBell 
                    // serverURL="https://api.magicbell.dev"
                    // apiKey="b0ff0bfc5cf159e6f5daa3f6b7c390eda4e5a69e"
                    // userEmail="josue@magicbell.io"

                    // actionURL="https://magicbell.com/docs"
                    serverURL="https://api.magicbell.com"
                    apiKey = "4a916985f855b4b5fd0fe23779ab5ffc4352ddb7"
                    userEmail="patevishakha@gmail.com"
                    // userExternalId = "https://bit.ly/3oiDSAe"
                    userKey="4ECKNcDPt1GNFpo/8R/lq6tWmHx8hECHw4ceYAlsxMw="
                    onNewNotification={(notification) => {
                      console.log(notification.title);
                      console.log(notification.content);
                    }}
                    theme={newtheme}
                    // defaultIsOpen
                    bellCounter="unread"
                  >
                    {(props) => (
                      <FloatingNotificationInbox
                      placement="top-start"   //auto-end,top,bottom-end
                        height={400}
                        width={400}
                        {...props}
                      />
                    )}
                  </MagicBell>
                </Grid>



 */
