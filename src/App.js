import React from "react";
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
//import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;