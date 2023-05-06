import React, { useState } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
const Component = styled(Box)`
  width: 400px;
  margin: 0 auto;
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "0 auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 25px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;
function Login() {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const [account, toggleAccount] = useState("login");

  const toggleSignup = (value) => {
    toggleAccount(value);
  };
  return (
    <div>
      <Component>
        <Box>
          <Image src={imageURL} alt="" />
          {account === "login" ? (
            <Wrapper>
              <TextField
                id="standard-basic"
                label="Enter username"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Enter password"
                variant="standard"
              />
              <LoginButton variant="contained">Login</LoginButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <SignupButton onClick={() => toggleSignup("signup")}>Create an account</SignupButton>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                id="standard-basic"
                label="Enter Name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Enter Username"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Enter Password"
                variant="standard"
              />
              <SignupButton>Signup</SignupButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <LoginButton variant="contained" onClick={() => toggleSignup("login")}>
                Already have an account
              </LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </div>
  );
}

export default Login;
