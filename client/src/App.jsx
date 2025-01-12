import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/logIn/LogIn";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
