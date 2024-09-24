import React, { useContext, useEffect } from 'react';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages.jsx/Home";
import Appointment from "./Pages.jsx/Appointment";
import AboutUs from "./Pages.jsx/AboutUs";
import Register from "./Pages.jsx/Register";
import Login from "./Pages.jsx/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "./main";
import axios from "axios";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true); 
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  
  return (
    <>
      <Router>
        <Navbar /> {/* Use the Navbar component */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer /> 
        <ToastContainer position='top-center' />
      </Router>
    </>
  );
};

export default App;
