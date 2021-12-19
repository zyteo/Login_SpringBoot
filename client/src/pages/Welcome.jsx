import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { text } from "../localisation/text";

import styled from "styled-components";

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
  
function Welcome({ language, auth, role, name, userName, cookies }) {
  const navigate = useNavigate();

  // only authenticated users can access welcome page
  useEffect(()=> {
    let token = localStorage.getItem("token");
    if (auth !== "Auth" || (!token) || (!cookies.token)){
      navigate("/");
    }
  },[])

  
  const handleLink = () => {
    window.location.href = "https://google.com/";
  };

  return (
    <>
      <h1>{text[language].welcome}</h1>
      <h1>
        {text[language].username} {userName}
      </h1>
      <h1>
        {text[language].name} {name}
      </h1>
      <h1>
        {text[language].role} {role}
      </h1>
      {role === "Manager" ? (
        <Button onClick={() => handleLink()}>{text[language].link}</Button>
      ) : (
        <></>
      )}
    </>
  );
}

export default Welcome;