import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import * as THREE from 'three';

// You can replace this with your actual logo path
const logo = "https://img.icons8.com/fluency/96/cedar.png";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

const slideIn = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const MotionTypography = motion(Typography);

// Three.js Background Component - Minimal floating particles
const ThreeBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 200, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, 200);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create minimal floating particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 30; // Keep it minimal
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;     // x
      positions[i + 1] = (Math.random() - 0.5) * 8;  // y
      positions[i + 2] = Math.random() * 8 - 4;      // z
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 5;

    // Store refs
    sceneRef.current = scene;
    rendererRef.current = renderer;
    particlesRef.current = particles;

    // Minimal animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (particlesRef.current) {
        // Very slow rotation
        particlesRef.current.rotation.y += 0.0005;
        
        // Gentle floating motion
        const positions = particlesRef.current.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.0008 + positions[i]) * 0.0008;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (rendererRef.current) {
        rendererRef.current.setSize(window.innerWidth, 200);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.6
      }}
    />
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: isMobile ? "calc(100% - 120px)" : "calc(100% - 300px)",
        margin:"0 auto",
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: "10px 20px",
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "80px",
        zIndex: 10,
        overflow: "hidden",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Logo Section */}
      <Box sx={{ display: "flex", alignItems: "center", zIndex: 2 }}>
        <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
          <MotionTypography
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              fontFamily: "'Merriweather', serif",
              fontWeight: "bold",
              gap: "10px",
              color: "#FFFFFF",
              textShadow: "0 0 10px rgba(255,255,255,0.3)"
            }}
          >
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))"
                }}
              />
            </motion.div>
            CEDAR
          </MotionTypography>
        </Link>
      </Box>

      {/* Desktop Navigation */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          zIndex: 2
        }}
      >
        {["About Us", "Services", "Careers", "Contact Us"].map((text, index) => (
          <Link key={index} to={`/CEDAR/${text.toLowerCase().replace(" ", "")}`} style={{ textDecoration: "none", color: "inherit" }}>
            <MotionTypography
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              whileHover={{ 
                scale: 1.1, 
                color: "#fff",
                textShadow: "0 0 10px rgba(255,255,255,0.8)"
              }}
              transition={{ duration: 0.2 }}
              sx={{ 
                fontSize: "15px", 
                cursor: "pointer", 
                fontWeight: "400",
                color: "#fff",
                position: "relative"
              }}
            >
              {text}
            </MotionTypography>
          </Link>
        ))}
      </Box>

      {/* Mobile Menu Button */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        style={{ zIndex: 2 }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            color: "#fff",
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255,255,255,0.1)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)"
            }
          }}
        >
          <MenuIcon sx={{ fontSize: "30px" }} />
        </IconButton>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(20px)",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
          <motion.div
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </motion.div>
        </Box>

        <motion.div initial="hidden" animate="visible" variants={slideIn}>
          <List>
            {["About Us", "Services", "Careers", "Contact Us"].map((text, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <ListItem button onClick={handleDrawerToggle}>
                  <Link to={`/${text.toLowerCase().replace(" ", "")}`} style={{ textDecoration: "none", color: "black", width: "100%" }}>
                    <ListItemText
                      primary={text}
                      sx={{
                        textAlign: "center",
                        fontSize: "18px",
                        fontWeight: "500",
                        "&:hover": { color: "#1976D2" },
                      }}
                    />
                  </Link>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </motion.div>
      </Drawer>
    </Box>
  );
};

export default Header;