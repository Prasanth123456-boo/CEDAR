import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, useMediaQuery, Card, CardContent, Avatar, Rating } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HeroImg from "../../assets/Hero_img.png"

const UIUX = "https://img.icons8.com/fluency/96/web-design.png";

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
  "Empowering Businesses with Smart Websites and Automation",
  "Empowering Businesses with Innovative IT Solutions.",
  "Transforming Ideas into Reality with Cutting-Edge Technology.",
  "Your Trusted Partner for Scalable and Secure IT Services.",
];

const services = [
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    title: "Trading Strategies",
    description: "Learn proven trading strategies that work in real market conditions with our comprehensive methodology."
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 40 }} />,
    title: "Educational Courses", 
    description: "From beginners to expert traders, our courses cover all elements of trading, equipping you with the right knowledge."
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    title: "Mentorship Program",
    description: "Get personalized guidance from experienced traders who have successfully navigated the markets."
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
    title: "Certification",
    description: "Earn recognized certifications that validate your trading skills and knowledge in the financial markets."
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Professional Trader",
    content: "The pay-after-profit model gave me confidence to start. Now I'm making consistent profits using their strategies.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Priya Sharma", 
    role: "Investment Analyst",
    content: "Enigma Trader's methodology is unique and practical. The real-world application focus makes all the difference.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Amit Patel",
    role: "Day Trader", 
    content: "Best trading education I've received. The mentors are experienced and the strategies actually work in live markets.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

const ScrollableCards = () => {
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 10 }}>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: 3 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, color: "#333" }}>
            Our Services
          </Typography>
          <Typography variant="h6" sx={{ color: "#666" }}>
            Comprehensive trading education and support
          </Typography>
        </Box>
        
        <Box sx={{ position: "relative" }}>
          <Button
            onClick={() => handleScroll('left')}
            sx={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              minWidth: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "white",
              boxShadow: 2,
              "&:hover": { backgroundColor: "#f5f5f5" }
            }}
          >
            <ArrowBackIosIcon />
          </Button>
          
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              pb: 2,
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none"
            }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: 300,
                  boxShadow: 3,
                  "&:hover": { boxShadow: 6 },
                  transition: "box-shadow 0.3s"
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      backgroundColor: "#e3f2fd",
                      width: 64,
                      height: 64,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      color: "#1976d2"
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "600", mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          
          <Button
            onClick={() => handleScroll('right')}
            sx={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              minWidth: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "white",
              boxShadow: 2,
              "&:hover": { backgroundColor: "#f5f5f5" }
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ backgroundColor: "white", py: 10 }}>
      <Box sx={{ maxWidth: "800px", margin: "0 auto", px: 3, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#333",
            fontSize: isMobile ? "2rem" : "3rem"
          }}
        >
          What our clients say about our services
        </Typography>
        <Typography variant="h6" sx={{ color: "#666", mb: 6 }}>
          Hear from traders who have transformed their financial future with us
        </Typography>
        
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: 4,
            p: 4,
            minHeight: 300,
            display: "flex",
            alignItems: "center",
            position: "relative"
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{ width: "100%" }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <Avatar
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  sx={{ width: 80, height: 80 }}
                />
              </Box>
              
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Rating
                  value={testimonials[currentTestimonial].rating}
                  readOnly
                  sx={{ color: "#ffc107" }}
                />
              </Box>
              
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontStyle: "italic",
                  color: "#555",
                  lineHeight: 1.6
                }}
              >
                "{testimonials[currentTestimonial].content}"
              </Typography>
              
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "600", color: "#333" }}>
                  {testimonials[currentTestimonial].name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  {testimonials[currentTestimonial].role}
                </Typography>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>
        
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 1 }}>
          {testimonials.map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              sx={{
                minWidth: 12,
                height: 12,
                borderRadius: "50%",
                p: 0,
                backgroundColor: index === currentTestimonial ? "#1976d2" : "#ccc",
                "&:hover": {
                  backgroundColor: index === currentTestimonial ? "#1565c0" : "#999"
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

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
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(5, 9, 20, 0.7), rgba(5, 9, 20, 0.7)), url(${HeroImg})`,
          // background: `linear-gradient(rgba(64, 107, 222, 0.7), rgba(73, 84, 113, 0.7))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            width: isMobile ? "calc(100% - 60px)" : "calc(100% - 200px)",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div key={index} variants={fadeAnimation} initial="hidden" animate="visible" exit="exit">
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: "1.2rem", md: "2.2rem" },
                  fontWeight: "bold",
                  fontFamily: "'Merriweather', serif",
                  lineHeight: "1.3",
                  color: "white",
                  mb: 4

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

          <Box sx={{ mb: 4 }}>
            <Typography sx={{
              fontSize: isMobile ? "1.1rem" : "1.5rem",
              color: '#fff',
              mb: 4,
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              Empower your business with the transformative power of intelligent automation.
            </Typography>
            <Button
              sx={{
                m:5,
                backgroundColor: "#fff",
                color: "#050914",
                px: 4,
                py: 2,
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                "&:hover": { backgroundColor: "#f5f5f5" }
              }}
            >
             Book Appointment
            </Button>
          </Box>
        </Box>
      </Box>

      {/* About Section */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderTopLeftRadius: "55px",
          borderTopRightRadius: "55px",
          position: "relative",
          top: "-54px",
          overflow: "hidden"
        }}
      >
        <Typography
          sx={{
            fontFamily: "Be Vietnam Pro",
            fontWeight: 600,
            fontSize: isMobile ? "120px" : "200px",
            color: "transparent",
            WebkitTextStroke: "2px #e3e3e3c2",
            position: "absolute",
            top: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 0,
            whiteSpace: "nowrap"
          }}
        >
          ABOUT
        </Typography>
        
        <Box sx={{
          maxWidth: isMobile ? "calc(100% - 60px)" : "calc(100% - 200px)",
          margin: "0 auto",
          py: 15,
          position: "relative",
          zIndex: 1
        }}>
          <Box sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
            gap: 6,
            alignItems: "start"
          }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: isMobile ? "2rem" : "2.5rem",
                color: "#333"
              }}
            >
              About
            </Typography>
            <Typography sx={{
              fontSize: isMobile ? "1.1rem" : "1.25rem",
              lineHeight: 1.8,
              color: "#555"
            }}>
              Welcome to Trading School, where our mission is to evolve individuals with the knowledge and skills needed to achieve financial independence through trading. Our academy is dedicated to delivering results-driven education, focusing on practical trading strategies and real-world application rather than merely selling courses. We have our own methodology of trading strategy, that is why we are confident to announce pay after profit training program.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Services Section */}
      <ScrollableCards />

      {/* What We Offer Section */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "#0A1931",
          py: 15
        }}
      >
        <Typography
          sx={{
            fontFamily: "Be Vietnam Pro",
            fontWeight: 600,
            fontSize: isMobile ? "80px" : "150px",
            color: "#0A1931",
            WebkitTextStroke: "1px rgba(216, 240, 255, 0.22)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
            zIndex: 0
          }}
        >
          What We Offer
        </Typography>

        <Box sx={{
          maxWidth: isMobile ? "calc(100% - 60px)" : "calc(100% - 200px)",
          margin: "0 auto",
          position: "relative",
          zIndex: 1
        }}>
          <Box sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 6,
            alignItems: "center"
          }}>
            <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: isMobile ? "2rem" : "2.5rem",
                  color: "#FFFFFF",
                  mb: 4
                }}
              >
                What We Offer
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#fff",
                  color: "#050914",
                  px: 4,
                  py: 2,
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  "&:hover": { backgroundColor: "#f5f5f5" }
                }}
              >
                Explore Our Services
              </Button>
            </Box>

            <Box>
              <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                mb: 3
              }}>
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "17px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#8BD7FF",
                  }}
                >
                  <Box
                    component="img"
                    src={UIUX}
                    alt="UI/UX Design"
                    sx={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography sx={{
                  fontWeight: 700,
                  fontSize: isMobile ? "1.5rem" : "2rem",
                  color: "#fff"
                }}>
                  UI/UX Designing
                </Typography>
              </Box>
              <Typography sx={{
                fontSize: isMobile ? "1.1rem" : "1.25rem",
                lineHeight: 1.6,
                color: "#fff"
              }}>
                From beginners to expert traders, our courses cover all elements of trading, equipping you with the right information
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <Box sx={{ backgroundColor: "#0A1931", py: 15 }}>
        <Box sx={{
          maxWidth: "800px",
          margin: "0 auto",
          px: 3,
          textAlign: "center"
        }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 3,
              fontSize: isMobile ? "2rem" : "2.5rem"
            }}
          >
            Ready to Start Your Trading Journey?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#ccc",
              mb: 4,
              fontSize: isMobile ? "1rem" : "1.25rem"
            }}
          >
            Join thousands of successful traders who have transformed their financial future with our proven methodology.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              sx={{
                backgroundColor: "#fff",
                color: "#050914",
                px: 4,
                py: 2,
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                "&:hover": { backgroundColor: "#f5f5f5" }
              }}
            >
              Start Learning Today
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                px: 4,
                py: 2,
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#050914"
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;

const GlassButton = ({ children, variant = "primary", size = "medium", onClick, style = {} }) => {
  const baseStyles = {
    padding: size === "large" ? "16px 32px" : size === "medium" ? "12px 24px" : "8px 16px",
    borderRadius: "25px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    cursor: "pointer",
    fontSize: size === "large" ? "1.1rem" : size === "medium" ? "1rem" : "0.9rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    textAlign: "center",
    display: "inline-block",
    textDecoration: "none",
    ...style
  };
}