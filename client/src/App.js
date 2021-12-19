import "./App.css";
import React, { useState } from "react";
import SignUp from "./pages/Signup";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import NavBar from "./pages/NavBar";
import { useCookies } from "react-cookie";

function App() {
  const [auth, setAuth] = useState("NoAuth");
  const [role, setRole] = useState("User");
  const [userName, setUsername] = useState("");
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("English");
  const [cookies, setCookie] = useCookies(["token"]);

  const navigate = useNavigate();
  // handle function for logging out, passed as props to navbar
  const handleLogOut = async () => {
    setAuth("NoAuth");
    setRole("User");
    setUsername("");
    localStorage.removeItem("token");
    setCookie('token', "logout",{ path: '/', maxAge: 1, secure: true });
    navigate(`/`);
  };

  return (
    <div className="App">
      <NavBar
        auth={auth}
        handleLogOut={handleLogOut}
        userName={userName}
        setLanguage={setLanguage}
        language={language}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Login
              setName={setName}
              setAuth={setAuth}
              setRole={setRole}
              setUsername={setUsername}
              language={language}
              setCookie={setCookie}
            />
          }
        />

        <Route path="/signup" element={<SignUp language={language} />} />
        <Route
          path="/welcome"
          element={
            <Welcome
              language={language}
              auth={auth}
              role={role}
              name={name}
              userName={userName}
              cookies={cookies}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;