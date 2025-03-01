import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Components/Header/Header';
import Service from './Pages/Services/Service';
import Carriers from './Pages/Carriers/Carriers';
import Contact from './Pages/Contact/Contact';
import { Box } from '@mui/material';
const App = () => {
  return (
    <>
      <Box sx={{
      }}>
        <Header />
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/careers" element={<Carriers />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </>
  )
} 

export default App
