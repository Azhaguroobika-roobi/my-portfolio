import React from "react";
import Box from "@mui/material/Box";
import Aboutpreskool from "./card";
 
function LeftContent (){
    return( 
        <Box
        sx={{
          flex: 1,
          backgroundImage: 'url("https://preskool.dreamstechnologies.com/html/template/assets/img/authentication/authentication-01.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          opacity:'initial',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width:'50%',
          position: 'fixed',
          // filter: 'blur(2px)',
        }}
      >
        <Box sx={{backgroundColor: 'rgba(75, 111, 255, 0.6)',
          // width: '100%',
          // height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
           flex: 1,
          opacity:'initial',
          height: '100vh',
          width:'50%',
          position: 'fixed',
}}>
        <Box
          sx={{
            color: 'white',
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          <Aboutpreskool />
        </Box>
        </Box>
      </Box> 
    );

}

export default LeftContent;