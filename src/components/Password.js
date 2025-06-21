import React from 'react';
import Box from '@mui/material/Box';
import Textbox3 from './textbox3';
import LeftContentPass from './left_forgetPass';
import Typography from '@mui/material/Typography';
// import SignIn from './sign_in';

const ForgetPass = () => {
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
      <LeftContentPass/>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          placeItems:"center",
          // alignItems: "center",
          alignItems: "flex-start",
          p: 3,
          m:3,
          position: "relative",
          overflow: "visible", 
          zIndex: 1,   
          gap:2, 
          mb:2,

        }}
      >
        <Box
          sx={{
            justifyContent:"center",
            textAlign:"center",
             gap: "20px",
          }}
        >
           <img src='https://preskool.dreamstechnologies.com/html/template/assets/img/authentication/authentication-logo.svg' alt=''></img>
          <Textbox3/>
          <Typography variant="p" color="grey">
        Copyright © 2024 - Preskool
      </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgetPass;