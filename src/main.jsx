import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import "./index.css"

// Fonts

import "@fontsource/poppins"; 
import "@fontsource/merriweather"; 
import "@fontsource/space-mono/700.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
