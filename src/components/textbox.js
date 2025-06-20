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
import Divider from '@mui/material/Divider';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// import SignIn from "./sign_in";



function Textbox() {
const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

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
            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
            // p: 4,,
        // mx: "auto",
        // mt: 5,
        fontFamily:'"Roboto", sans-serif',
      }}
    >

        <h1> Register</h1>
        <p>Please enter your details to sign up</p>
        <Divider>Or</Divider>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
         InputLabelProps={{
          style: { fontSize: "14px", fontWeight: 500 },
        }}
        InputProps={{
            style: { width:300, height:50, },
          endAdornment: (
            <InputAdornment position="start">
              <PersonOutlineOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />

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
            <InputAdornment position="start">
               <EmailOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        type={showPassword ? "text" : "password"}
        InputLabelProps={{
          style: { fontSize: "14px", fontWeight: 500 },
        }}
        InputProps={{
          style: { width:300,height:50, },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePassword}>
                {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Confirm Password"
        variant="outlined"
        fullWidth
        type={showConfirmPassword ? "text" : "password"}
        InputLabelProps={{
          style: { fontSize: "14px", fontWeight: 500 },
        }}
        InputProps={{
          style: { width:300,height:50, },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleToggleConfirmPassword}>
                {showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={
          <Typography variant="body2">
            I Agree to <Link href="#" underline="hover">{'Terms & Privacy'}</Link>
          </Typography>
        }
      />

       <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#506EE4",
          height:50,
            width:300,
          color: "#FFFFFF",
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "16px",
          padding: "10px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#3D5EE1",
            // height:50,
            // width:300,
          },
        }}
      >
        Sign Up
      </Button>

      <Typography  textAlign="center">
        Already have an account? <Link href="./sign_in" underline="hover">
  {'Sign In'}
</Link>
      </Typography>

    </Box>



    );
}

export default Textbox;