import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';


function Header() {
  return (
    <header style={{ width: '50%', margin: '1 auto', border: '1px solid black',borderRadius:'20px',textAlign:'center' }} > 
      <h1 style={{ textAlign:'center' }}>Create an Account</h1>
        <Stack spacing={2} direction="row" margin={3}>
          <Box sx={{ width: 300, maxWidth: '100%',height:50}}>
      <TextField fullWidth label="First Name" id="fullWidth" />
    </Box>
          <Box sx={{ width: 300, maxWidth: '100%',height:50}}>
      <TextField fullWidth label="Last Name" id="fullWidth" />
    </Box>
          </Stack>
         
          <Stack margin={2} padding={1} direction={'column'}>
            <Box sx={{ width: 600, maxWidth: '100%' }}>
      <TextField fullWidth label="Email" id="fullWidth" />
      </Box>
          </Stack>

          <Stack margin={2} padding={1} direction={'column'}>
            <Box sx={{ width: 600, maxWidth: '100%' }}>
      <TextField fullWidth label="Password" id="fullWidth" />
      </Box>
          </Stack>

    <Stack spacing={5} direction="row" margin={2} padding={1} width={600}>
      <TextField id="outlined-basic" label="Month" variant="outlined" />
      <TextField id="outlined-basic" label="Date" variant="outlined" />
      <TextField id="outlined-basic" label="Year" variant="outlined" />
    </Stack>
   

    <Stack margin={2} padding={1} direction={'column'}>
            <Box sx={{ width: 600, maxWidth: '100%' }}>
      <TextField fullWidth label="Country" id="fullWidth" />
      </Box>
          </Stack>

          <Box style={{textAlign:'left'}}><Checkbox/></Box>

          <p>By clicking Create Account,I agree the terms and policy</p>
     <Button variant='contained'> Create Account</Button>
     <p>Don't Hanve an Account? <span><a href="#home" style={{ color:'purple',textDecoration:'none',color: 'purple'}}>Sign up</a></span></p>
    </header>
  );
}

export default Header;
