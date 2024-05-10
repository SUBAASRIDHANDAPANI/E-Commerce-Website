// import React, { useState } from 'react';
// import { Button, TextField, Typography, FormControl, Radio, RadioGroup, FormControlLabel, Stack, Container, Box, Paper } from '@mui/material';

// const RegistrationForm = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setconfirmPassword] = useState('');
  
//   const [dob, setDob] = useState(null); // Initialize with null

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here, e.g., send a request to your server
//     const userData = { name, age, gender, email, password, dob ,confirmpassword};
//     console.log(userData); // For testing, you can log the user data
//   };

//   return (
//     <Container>
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         height="100vh"
//         padding="60px"
//       >
//         <Paper elevation={10} style={{ padding: '40px' }}> {/* Add padding to create space around the form */}
//           <form onSubmit={handleSubmit}>
//             <Typography variant="h5" gutterBottom>
//               Create an Account
//             </Typography>
//             <Stack direction="column" spacing={2} style={{ width: "500px" }}>
//               <TextField
//                 label="Full Name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <TextField
//                 label="Age"
//                 type="number"
//                 required
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//               />
//               <FormControl component="fieldset">
//                 <Typography variant="subtitle1">Gender</Typography>
//                 <RadioGroup
//                   row
//                   aria-label="gender"
//                   name="gender"
//                   value={gender}
//                   onChange={(e) => setGender(e.target.value)}
//                 >
//                   <FormControlLabel
//                     value="male"
//                     control={<Radio />}
//                     label="Male"
//                   />
//                   <FormControlLabel
//                     value="female"
//                     control={<Radio />}
//                     label="Female"
//                   />
//                 </RadioGroup>
//               </FormControl>
//               <TextField
//                 label="Email"
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {/* Date Picker */}
//               <TextField
//                 label="Date of Birth"
//                 type="date"
//                 required
//                 value={dob}
//                 onChange={(date) => setDob(date.target.value)}
//                 // Use the appropriate type for date input
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//               <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <TextField
//                 label="Confirm Password"
//                 type="password"
//                 fullWidth
//                 required
//                 value={confirmpassword}
//                 onChange={(e) => setconfirmPassword(e.target.value)}
//               />
//             </Stack>

//             <Box mt={2}>
//               <Button type="submit" variant="contained" color="primary">
//                 Register
//               </Button>
//             </Box>
//           </form>
//         </Paper>
//       </Box>
//     </Container>
//   );
// };

// export default RegistrationForm;


import React, { useState } from 'react';
import { Button, TextField, Typography, FormControl, Radio, RadioGroup, FormControlLabel, Stack, Container, Box, Paper } from '@mui/material';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState(null); // Initialize with null
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmpassword) {
      setPasswordError(true);
      return; // Don't proceed with registration if passwords don't match
    }

    // Handle registration logic here, e.g., send a request to your server
    const userData = { name, age, gender, email, password, dob, confirmpassword };
    console.log(userData); // For testing, you can log the user data
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        padding="60px"
      >
        <Paper elevation={10} style={{ padding: '40px' }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom>
              Create an Account
            </Typography>
            <Stack direction="column" spacing={2} style={{ width: "500px" }}>
              <TextField
                label="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Age"
                type="number"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <FormControl component="fieldset">
                <Typography variant="subtitle1">Gender</Typography>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                label="Email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Date of Birth"
                type="date"
                required
                value={dob}
                onChange={(date) => setDob(date.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                required
                value={confirmpassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setPasswordError(false); // Reset password error when typing in confirm password
                }}
                error={passwordError} // Apply error style if passwords don't match
              />
            </Stack>
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
