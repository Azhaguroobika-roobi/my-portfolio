import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const options = ['January','February','March','April','May','June','July','August','September','October','Novomber','December'];
function Header() {
return (
  <header>
    <Stack sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center', flexGrow: 1 }}>
      <h1 style={{ textAlign:'center' }}>Create an Account</h1>
     <Grid container spacing={2} width={500}>
      <Grid size={6}>
        <TextField fullWidth label="First Name" id="fullWidth" />
      </Grid>
      <Grid size={6}>
        <TextField fullWidth label="Last Name" id="fullWidth" />
      </Grid>
      <Grid size={12}>
        <TextField fullWidth label="Email" id="fullWidth" />
      </Grid>
      <Grid size={12}>
        <TextField fullWidth label="Password" id="fullWidth"/>
      </Grid>
      <Grid size={4}>
        <Autocomplete
  disablePortal
  options={options}
  sx={{ width: 155 }}
  renderInput={(params) => <TextField {...params} label="Month" />}
/>
      </Grid>
      <Grid size={4}>
        <TextField fullWidth label="Date" id="fullWidth" />
      </Grid>
      <Grid size={4} >
        <TextField fullWidth label="Year" id="fullWidth" /> 
      </Grid>
      <Grid size={12}>
        <TextField fullWidth label="Country" id="fullWidth" />
      </Grid>
       <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Please Contact me via email" />
      </FormGroup>
      <p>By clicking Create Account,I agree the terms and policy</p>
      <Grid size={12}>
        <Button variant='contained' fullWidth> Create Account</Button>
      </Grid>
       <p>Don't Hanve an Account? <span><a href="#home" sx={{textDecoration:'none',color: 'purple'}}>Sign up</a></span></p>
       </Grid> 
        </Stack>
  </header>
);
}

export default Header;
