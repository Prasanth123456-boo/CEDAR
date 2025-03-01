import React, { useState, useEffect } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import HeroImg from "../../assets/Hero_img.png"
import { useTheme } from "@mui/material/styles";
import ScrollableCards from "../../Components/ScrollCards/ScrollableCards";

const letterAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.05 },
  }),
};

const fadeAnimation = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.8 } },
  exit: { opacity: 0, y: 10, transition: { duration: 1.8 } },
};

const texts = [
  "Empowering Businesses with Innovative IT Solutions.",
  "Transforming Ideas into Reality with Cutting-Edge Technology.",
  "Your Trusted Partner for Scalable and Secure IT Services.",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            // width: "calc(100% - 300px)",
            width: isMobile ? "calc(100% - 120px)" : "calc(100% - 400px)",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "100vh",

          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flex: 1, // Takes available space
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div key={index} variants={fadeAnimation} initial="hidden" animate="visible" exit="exit">
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: "40px", md: "65px" },
                    fontWeight: "bold",
                    fontFamily: "'Merriweather', serif",
                    maxWidth: "100%",
                    margin: "0 auto",
                    lineHeight: "1.3",
                    background: "linear-gradient(90deg, rgb(237, 237, 237), rgb(236, 236, 236))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "flex",
                    flexWrap: "wrap",
                    textAlign: "center",
                  }}
                >
                  {texts[index].split("").map((char, i) => (
                    <motion.span key={i} custom={i} variants={letterAnimation} initial="hidden" animate="visible">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </Typography>
              </motion.div>
            </AnimatePresence>

            <Box
              sx={{
                display: 'flex',
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px"
              }}
            >
              <Typography sx={{
                textAlign: "center",
                fontSize: isMobile ? "17px" : "24px",
                color: '#fff'
              }}>India's first profit driven trading academy. We are confident because we  are Enigma trader</Typography>
              <Button
                sx={{
                  backgroundColor: "#fff",
                  color: " #050914",
                  width: "220px",
                  padding: "10px",
                  borderRadius: "100px"
                }}
              >Get Started</Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderTopLeftRadius: "55px",
          borderTopRightRadius: "55px",
          position: "relative",
          top: "-54px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Be Vietnam Pro",
            fontWeight: 600,
            fontSize: "254.54px",
            lineHeight: "286px",
            letterSpacing: "0%",
            color: "white", // Text color
            WebkitTextStroke: "2px #e3e3e3c2", // Border effect
           
            position: "absolute",
            top: "40px"
          }}
        >
          ABOUT
        </Typography>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          width: isMobile ? "calc(100% - 120px)" : "calc(100% - 400px)",
          margin: "0 auto",
          gap: "3rem",
          zIndex: '1',
          padding: "100px",
          flexDirection:isMobile? "column":"row",

        }}>
          <Typography
            sx={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "54px",
              letterSpacing: "0%",
            }}
          >About</Typography>
          <Typography sx={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 100,
            fontSize: isMobile? "19px" : "25px",
            lineHeight: "39.15px",
            letterSpacing: "0%",
          }}>Welcome to Trading School, where our mission is to evolve individuals with the knowledge and skills needed to achieve financial independence through trading. Our academy is dedicated to delivering results-driven education, focusing on practical trading strategies and real-world application rather than merely selling courses. We have our own methodology of trading strategy, that is why we are confident to announce pay after profit training program.</Typography>
        </Box>
      </Box>
      <Box>
        {/* third box */}
        <ScrollableCards/>
      </Box>
      
    </>
  );
};

export default Home;
