import React from "react";
import Navbar from "../components/Navbar";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import Signup from "./Signup";

function Main() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Main;
