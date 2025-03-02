import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const cardData = [
  { title: "Strategy 1", description: "Learn our best trading strategy." },
  { title: "Strategy 2", description: "Master technical analysis." },
  { title: "Live Market", description: "Trade in real-time with experts." },
  { title: "Risk Management", description: "Minimize losses & maximize gains." },
  { title: "Profit Academy", description: "Pay after profit training program." },
];

const ScrollableCards = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateScroll = async () => {
      while (true) {
        await controls.start({ x: "-100%", transition: { duration: 10, ease: "linear" } });
        controls.set({ x: "0%" }); // Reset position for infinite loop
      }
    };

    animateScroll();
  }, [controls]);

  return (
    <Box sx={{ overflow: "hidden", backgroundColor: "#f5f5f5", padding: "50px 0" }}>
      <motion.div
        animate={controls}
        style={{
          display: "flex",
          gap: "20px",
          whiteSpace: "nowrap",
        }}
      >
        {cardData.concat(cardData).map((card, i) => ( // Duplicating cards for smooth loop
          <Card
            key={i}
            sx={{
              minWidth: "280px",
              height: "180px",
              borderRadius: "20px",
              padding: "20px",
              flexShrink: 0, // Prevents card from shrinking
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold">{card.title}</Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </Box>
  );
};

export default ScrollableCards;


