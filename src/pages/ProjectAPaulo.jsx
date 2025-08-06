import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import { Instagram, Facebook } from "lucide-react"; // Import social media icons

export default function ProjectAPaulo() {
  return (
    <Box
      component="section"
      id="project-a-paulo"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 8,
        textAlign: "center",
        background: "linear-gradient(180deg, #0f172a, #1e293b)", // ciemny gradient dopasowany do theme
        color: "text.primary",
      }}
    >
      <Box maxWidth="lg" mx="auto">
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            background: "linear-gradient(90deg, #2563eb, #14b8a6, #059669)", // delikatny gradient
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 4,
          }}
        >
          Projekt a Paulo: Bringing Warmth to the Autumn of Life
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={8} lineHeight={1.5}>
          A volunteer initiative dedicated to supporting lonely and elderly
          individuals, transforming their challenges into moments of joy and
          connection.
        </Typography>

        {/* Who We Are and What We Do */}
        <Grid container spacing={6} alignItems="center" mb={10}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Who We Are and What We Do
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Projekt a Paulo is a volunteer initiative founded by individuals
              of various ages, united by a single, profound goal: to provide
              comprehensive support to elderly and lonely people. Our community
              is structured into several subgroups, each focusing on different
              aspects of individual assistance and holistic development.
              <br />
              <br />
              We address the multifaceted challenges faced by the elderly,
              including loneliness, isolation, mobility issues, chronic
              illnesses, and financial difficulties. Our dream is to empower our
              beneficiaries to not just count their remaining days, but to live
              them to the fullest, filled with joy and a sense of purpose.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ borderRadius: "1rem", overflow: "hidden", boxShadow: 3 }}
            >
              <img
                src="src\assets\435498756_308563108723295_2036732584030555661_n.jpg"
                alt="Volunteers helping an elderly person"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Card>
          </Grid>
        </Grid>

        {/* Who We Serve and Why */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          mb={10}
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} md={6}>
            <Card
              sx={{ borderRadius: "1rem", overflow: "hidden", boxShadow: 3 }}
            >
              <img
                src="src\assets\481660407_3974711766095040_3240459738781734265_n.jpg"
                alt="Elderly couple smiling"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Who We Serve and Why
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Inspired by the charism of Saint Vincent de Paul – a commitment to
              serving the poor – our hearts and eyes were opened to those in
              need. Witnessing the multitude of elderly, lonely, and ailing
              individuals around us, particularly in our historic district, made
              our mission clear.
              <br />
              <br />
              Old age often brings declining health, financial strain, and
              limited mobility, making simple tasks like shopping or fetching
              medication challenging. However, the most profound struggle is
              often loneliness. We strive to bring love and warmth into lives
              marked by sadness, illness, suffering, and isolation.
            </Typography>
          </Grid>
        </Grid>

        {/* Our Impact and Activities */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom mb={4}>
            Our Impact and Activities
          </Typography>
          <Grid container spacing={4} width={"100%"} justifyContent="center">
            {[
              {
                title: "Individual Support",
                description:
                  "Our volunteers provide personalized assistance, including home visits, help with daily chores, shopping, and medication collection.",
              },
              {
                title: "Cultural & Social Engagement",
                description:
                  "We organize cultural outings, social gatherings, and events to combat isolation and foster a sense of community.",
              },
              {
                title: "Practical Assistance",
                description:
                  "This includes support with home renovations, cleaning, and facilitating access to rehabilitation services.",
              },
            ].map(({ title, description }) => (
              <Grid item xs={12} sm={6} md={4} key={title}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: "1rem",
                    boxShadow: 2,
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: "1rem", overflow: "hidden", boxShadow: 3 }}>
            <img
              src="src\assets\0TS_5060.JPG"
              alt="Volunteers helping an elderly person"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Card>
        </Grid>
        <Box mt={6}>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            mb={3}
            sx={{ color: "white" }}
          >
            Look for more
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
          >
            <Button
              variant="outlined"
              size="large"
              startIcon={<Instagram />}
              sx={{
                px: 5,
                py: 2,
                borderColor: "#E1306C",
                color: "#E1306C",
                "&:hover": {
                  backgroundColor: "rgba(225, 48, 108, 0.1)",
                  borderColor: "#E1306C",
                },
              }}
              component="a"
              href="https://www.instagram.com/projekt_a_paulo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Facebook />}
              sx={{
                px: 5,
                py: 2,
                borderColor: "#1877F2",
                color: "#1877F2",
                "&:hover": {
                  backgroundColor: "rgba(24, 119, 242, 0.1)",
                  borderColor: "#1877F2",
                },
              }}
              component="a"
              href="https://www.facebook.com/ProjektaPaulo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
