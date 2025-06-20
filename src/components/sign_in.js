import React from 'react';
import Box from '@mui/material/Box';
import Textbox2 from './textbox2';
import Typography from '@mui/material/Typography';
import LeftSignIn from './left_sigin_in';

const SignIn = () => {
  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "block" },
        }}
      > 
      <LeftSignIn/>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        <Box sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          placeItems:"center",
          // alignItems: "center",
          alignItems: "flex-start",
          padding:3,
          m:3,
          position: "relative",
          overflow: "visible", 
          zIndex: 1,   
          gap:2, 
          mb:2,
         }}>
           <Box  sx={{
            justifyContent:"center",
            textAlign:"center",
             gap: "20px",
             
          }}> 
             <img src='https://preskool.dreamstechnologies.com/html/template/assets/img/authentication/authentication-logo.svg' sx={{marginBottom: "20px",}}></img>
          <Textbox2 sx={{marginBottom: "20px", }}/>
           <Typography variant="p" color="grey">
        Copyright © 2024 - Preskool
      </Typography>
      </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
