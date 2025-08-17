import React ,{useState,useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Components/Header/Header';
import Service from './Pages/Services/Service';
import Carriers from './Pages/Carriers/Carriers';
import Contact from './Pages/Contact/Contact';
import { Box } from '@mui/material';
import Preloader from './Components/Preloader/Preloader'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;
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
