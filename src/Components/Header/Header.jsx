import React, { useState } from "react";
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

const slideIn = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const MotionTypography = motion(Typography);

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
        backgroundColor: "transparent",
        padding: "10px 20px",
        position: "absolute",
        top:"10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}

    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
          <MotionTypography
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              fontFamily: "'Merriweather', serif",
              fontWeight: "bold",
              gap: "10px",
              color: "#FFFFFF"
            }}
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
          
              }}
            />
            CEDAR
          </MotionTypography>
        </Link>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {["About Us", "Services", "Careers", "Contact Us"].map((text, index) => (
          <Link key={index} to={`/${text.toLowerCase().replace(" ", "")}`} style={{ textDecoration: "none", color: "inherit" }}>
            <MotionTypography
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              whileHover={{ scale: 1.1, color: "#fff" }}
              sx={{ fontSize: "15px", cursor: "pointer", fontWeight: "400",color:"#fff" }}
            >
              {text}
            </MotionTypography>
          </Link>
        ))}
      </Box>

      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          color: "#fff",
        }}
      >
        <MenuIcon sx={{ fontSize: "30px" }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <motion.div initial="hidden" animate="visible" variants={slideIn}>
          <List>
            {["About Us", "Services", "Careers", "Contact Us"].map((text, index) => (
              <ListItem key={index} button onClick={handleDrawerToggle}>
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
            ))}
          </List>
        </motion.div>
      </Drawer>
    </Box>
  );
};

export default Header;
