import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home.jsx";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {

  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute >
              <Dashboard />
            </PrivateRoute>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
