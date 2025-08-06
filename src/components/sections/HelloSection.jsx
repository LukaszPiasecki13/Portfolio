import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Message, Download, KeyboardArrowDown } from "@mui/icons-material";

export function HelloSection() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        textAlign: "center",
      }}
    >
      <Box maxWidth={896}>
        {" "}
        <Box mb={6}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "3rem", md: "4.5rem" },
              background: "linear-gradient(90deg, #2563eb, #0D9488, #059669)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Hi, I'm Łukasz
          </Typography>
          <Typography
            variant="h5"
            maxWidth={800}
            color="text.secondary" // Using MUI's secondary text color
            sx={{ mb: 4, lineHeight: 1.5 }}
          >
            A Software Engineer with a passion for implementing ideas, creating
            new things, and solving problems. I specialize in Python, Django,
            React and QA automation.
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="center"
          mb={8}
        >
          <Button
            variant="contained"
            href="#contact"
            size="large"
            startIcon={<Message />}
            sx={{ px: 5, py: 2, fontSize: "1.125rem" }}
          >
            Get In Touch
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => window.open('/pdfs/Lukasz Piasecki - Python Developer - CV_2025.pdf', "_blank")}
            startIcon={<Download />}
            sx={{ px: 5, py: 2, fontSize: "1.125rem" }}
          >
            Download CV
          </Button>
        </Stack>


        <Box
          sx={{
            animation: "bounce 2s infinite",
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            const el = document.getElementById("about");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <KeyboardArrowDown sx={{ fontSize: 36, color: "text.secondary" }} />
        </Box>
        <style>
          {`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(10px); }
            }
          `}
        </style>
      </Box>
    </Box>
  );
}
