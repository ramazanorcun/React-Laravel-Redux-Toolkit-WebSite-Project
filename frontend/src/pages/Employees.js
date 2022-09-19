import React, { useState } from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import {getEmployees} from "../slice/EmployeesSlice"

function Employees() {
  const dispatch = useDispatch();
  const [email, setEmail]= useState();

  const onChangeEmail = (e)=>{
    setEmail(e.target.value);

  }
  const employessEkle = (e)=>{
    
    e.preventDefault();
    dispatch (getEmployees({email}))
    console.log(email)
    // .then(()=>{
    //   alert ("başvurunuz alınmıştır. Onay bekliyor...")
    // })
    // .catch();
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
         Çalışan Ekle
        </Typography>
        <Box>
          
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              type="text"
              name="email"
              onChange={onChangeEmail}
        
            />
            <Button onClick={employessEkle} variant="contained" fullWidth>
              Ekle
            </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Employees

