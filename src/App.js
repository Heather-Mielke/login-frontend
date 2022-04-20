import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

const App = () => {
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/homepage" element={<Homepage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
