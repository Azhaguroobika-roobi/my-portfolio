import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import EmailOutlined from '@mui/icons-material/EmailOutlined'
// import SignUp from "./sign_up";



function Textbox3() {
    return (
  <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 300, 
            padding: 3,
            borderRadius: 1,
            borderTop: "1px solid rgba(199, 200, 203, 0.6)",
            borderLeft: "1px solid rgba(199, 200, 203, 0.6)",
            borderRight: "1px solid rgba(199, 200, 203, 0.6)",
            borderBottom: "1px solid rgba(199, 200, 203, 0.6)",
            boxShadow: '4px 4px 8px rgba(244, 236, 236, 0.66)',
        fontFamily:'"Roboto", sans-serif',
      
      }}
    >
        <h1>Forgot Password?</h1>
        <p>If you forgot your password, well, then we’ll email you instructions to reset your password</p>

      <TextField
        label="Email Address"
        variant="outlined"
        fullWidth
         InputLabelProps={{
          style: { fontSize: "14px", fontWeight: 500 },
        }}
        InputProps={{
          style: { width:300,height:50, },
          endAdornment: (
            <InputAdornment position="end">
              <EmailOutlined />
            </InputAdornment>
          ),
        }}
      />

       <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#506EE4",
          color: "#FFFFFF",
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "16px",
          padding: "10px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#3D5EE1",
          },
        }}
      >
        Sign In
      </Button>

      <Typography  textAlign="center">
        Return to<Link href="/sign_up" underline="hover">
  {'Log In'}
</Link>
      </Typography>

    </Box>



    );
}

export default Textbox3;