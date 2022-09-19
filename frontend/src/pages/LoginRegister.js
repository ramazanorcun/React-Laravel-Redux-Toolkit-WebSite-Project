import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";
import { register } from "../slice/authSlice";
import "../css/login.css"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";


const Auth = (props) => {

  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  const { setLoginFlag, loginFlag } = props;

  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");     

  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault(); 

    if (email && password) {
      dispatch(login({ email, password }))
        .then(() => {
          navigate("/MainPage");
        })
        .catch()
        .finally(() => setLoginFlag(!loginFlag));
    } else {
      alert("gerekli alanlar boş olamaz");
    }
   
  };

  const handleRegister = (e) => {
    e.preventDefault();

    console.log({ name, email, password });

    if (name && email && password) {
      dispatch(register({ name, email, password }))
        .then(() => {
          alert("Kayıt Oldunuz Giriş Sayfasına Gidiniz" )
          navigate("/Login")
        })
        .catch();
    }
     else {
      alert("gerekli alanlar boş olamaz");
    }
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
              onChange={onChangeEmail}
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              onChange={onChangePassword}
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                onClick={handleLogin}
                className="btn btn-primary"
              >
               Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Name"
            className="mb-3"
            onChange={onChangeName}
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
            onChange={onChangeEmail}
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            onChange={onChangePassword}
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              onClick={handleRegister}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
