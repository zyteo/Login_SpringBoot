import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { text } from "../localisation/text";
import styled from "styled-components";
const bcrypt = require("bcryptjs");

const Label = styled.label`
  margin: 7px 5px;
`;
const Input = styled.input`
  font-family: "Spartan", sans-serif;
  margin: 5px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  @media only screen and (max-width: 600px) {
    border: 1px solid black;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    position: relative;
  }
`;
const Button = styled.button`
  font-family: "Spartan", sans-serif;
  font-weight: bold;
  padding: 10px;
  margin: 6px 2px;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  background-color: #EFBE93;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgb(228, 228, 228);
    transform: translateY(-0.5rem) scale(1.02);
    color: #000;
  }
  &:active {
    background-color: grey};
  }
  @media only screen and (max-width: 600px) {
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 10px;
    position: relative;
  }
  @media only screen and (max-width: 400px) {
    font-size: 8px;
  }
  @media only screen and (max-width: 300px) {
    font-size: 6px;
  }
  `;

function Login({
  setAuth,
  setRole,
  setUsername,
  setName,
  language,
  setCookie,
}) {
  const [login, setLogin] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setLogin({ ...login, username: value });
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setLogin({ ...login, password: value });
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    await axios
      .get(
        `https://login-java-springboot.herokuapp.com/api/user/${login.username}`
      )
      .then((res) => {
        // only login if username exists, AND that password is right
        if (
          res.status === 200 &&
          bcrypt.compareSync(login.password, res.data.password)
        ) {
          setCookie("token", login.username, {
            path: "/",
            maxAge: 86400,
            secure: true,
          });
          localStorage.setItem("token", "login");
          setAuth("Auth");
          setUsername(res.data.username);
          setName(res.data.name);
          if (res.data.role === "Manager") {
            setRole("Manager");
          }
          navigate(`/welcome`);
          setLoading(false);
        } else {
          alert(text[language].loginFail);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("err", err);
        alert(text[language].loginFail);
        setLoading(false);
      });
  };

  return (
    <>
      <h1>{text[language].login}</h1>
      {loading === false ? (<form onSubmit={handleSubmit}>
        <Label>{text[language].username}</Label>
        <Input
          type="text"
          name="username"
          value={login.username}
          onChange={handleUsernameChange}
          required
        ></Input>
        <br />
        <Label>{text[language].password}</Label>
        <Input
          type="password"
          name="password"
          value={login.password}
          onChange={handlePasswordChange}
          required
        ></Input>
        <br />

        <Button>{text[language].login}</Button>
      </form>) : <h3>Logging in...</h3>}
      
    </>
  );
}

export default Login;
