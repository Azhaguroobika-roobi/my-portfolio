import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
// import top100Films from './top100Films';
// import Grid from '@mui/material/Grid';


// function Header() {
//   return (
//     <header style={{ width: '50%', margin: '1 auto', border: '1px solid black',borderRadius:'20px',textAlign:'center' }} > 
//       <h1 style={{ textAlign:'center' }}>Create an Account</h1>
//         <Stack spacing={2} direction="row" margin={3}>
//           <Box sx={{ width: 300, maxWidth: '100%',height:50}}>
//       <TextField fullWidth label="First Name" id="fullWidth" />
//     </Box>
//           <Box sx={{ width: 300, maxWidth: '100%',height:50}}>
//       <TextField fullWidth label="Last Name" id="fullWidth" />
//     </Box>
//           </Stack>
         
//           <Stack margin={2} padding={1} direction={'column'}>
//             <Box sx={{ width: 600, maxWidth: '100%' }}>
//       <TextField fullWidth label="Email" id="fullWidth" />
//       </Box>
//           </Stack>

//           <Stack margin={2} padding={1} direction={'column'}>
//             <Box sx={{ width: 600, maxWidth: '100%' }}>
//       <TextField fullWidth label="Password" id="fullWidth" />
//       </Box>
//           </Stack>

//     <Stack spacing={5} direction="row" margin={2} padding={1} width={600}>
//       <TextField id="outlined-basic" label="Month" variant="outlined" />
//       <TextField id="outlined-basic" label="Date" variant="outlined" />
//       <TextField id="outlined-basic" label="Year" variant="outlined" />
//     </Stack>
   

//     <Stack margin={2} padding={1} direction={'column'}>
//             <Box sx={{ width: 600, maxWidth: '100%' }}>
//       <TextField fullWidth label="Country" id="fullWidth" />
//       </Box>
//           </Stack>
//           <FormGroup>
//           <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
//           </FormGroup>

//           <p>By clicking Create Account,I agree the terms and policy</p>
//      <Button variant='contained'> Create Account</Button>
//      <p>Don't Hanve an Account? <span><a href="#home" style={{ color:'purple',textDecoration:'none',color: 'purple'}}>Sign up</a></span></p>
//     </header>
//   );
// }


function Header() {
return (
  <header>

    <Stack sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center', }}>
      <h1 style={{ textAlign:'center' }}>Create an Account</h1>
      <Box sx={{ display: 'flex', gap: 2 ,margin: 1,width: '40%' }}>
        <TextField fullWidth label="First Name" id="fullWidth" />
        <TextField fullWidth label="Last Name" id="fullWidth" />
      </Box>
        <Box sx={{ margin: 1,width: '40%' }}>
          <TextField fullWidth label="Email" id="fullWidth" />
          <TextField fullWidth label="Password" id="fullWidth" /> 
        </Box>
        <Box sx={{ margin: 1, gap :2 ,width: '40%' ,display:'flex' }}>
          <Autocomplete
  disablePortal
  options= {'January','February','March','April','May','June','July','August','September','October','Novomber','December'}
  sx={{ width: 600 }}
  renderInput={(params) => <TextField {...params} label="Month" />}
/>
          <TextField fullWidth label="Date" id="fullWidth" />
          <TextField fullWidth label="Year" id="fullWidth" /> 
        </Box>
        <Box sx={{ margin: 1,width: '40%'}}>
          <TextField fullWidth label="Country" id="fullWidth" />
          <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Please Cotact me via email" />
      </FormGroup>
       <p>By clicking Create Account,I agree the terms and policy</p>
       <Button variant='contained'sx={{ width: '100%' }}> Create Account</Button>
       <p>Don't Hanve an Account? <span><a href="#home" style={{ color:'purple',textDecoration:'none',color: 'purple'}}>Sign up</a></span></p>
        </Box >

       </Stack>
  </header>
);
}

export default Header;
