import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/Loginpage";
import { Route, Routes, Navigate } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import Booking from "./pages/Booking";
import Booking2 from "./pages/Booking2";
// import React, { useState } from "react";
// import axios from "axios";
// import "./LoginPage.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking2" element={<Booking2 />} />
      </Routes>
    </>
  );
}

export default App;
//  {/* <LoginPage /> */}
//  <Navbar />
