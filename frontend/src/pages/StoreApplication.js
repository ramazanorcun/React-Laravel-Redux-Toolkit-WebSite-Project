import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { addTmpStore } from "../slice/tmpStoreSlice";
import { useState } from "react";

function StoreApplication() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [telefon_numarası, setPhone] = useState();
  const [email, setEmail] = useState();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const addAplication = (e) => {
    e.preventDefault();
    dispatch(addTmpStore({name,email,telefon_numarası}))
     .then(() => {
      alert("Mağaza Başvurunuz Alınmıştır. Onay Bekliyor..." )
    })
    .catch();;
  };

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
          Mağaza Başvuru
        </Typography>
        <Box>
          
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              type="text"
              name="name"
              onChange={onChangeName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Telefon numarası"
              name="telefon_numarası"
              onChange={onChangePhone}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={onChangeEmail}
            />
            <Button onClick={addAplication} variant="contained" fullWidth>
              Başvur
            </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default StoreApplication;
