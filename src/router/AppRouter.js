import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

import React from 'react'
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />

            </Routes>
        </Router>
    </div>
  )
}

export default AppRouter
