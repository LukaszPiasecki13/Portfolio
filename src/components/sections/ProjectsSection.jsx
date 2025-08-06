import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  Chip,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Fund Tracker",
      description:
        "Financial investment tracking app using Django REST backend with JWT authentication and React frontend built Material-UI. Features include real-time portfolio analytics powered by Recharts, Yahoo Finance API integration, and secure state management with Axios.",
      image: "public/FundTracker.png",
      technologies: ["Django REST", "React.js", "Yahoo API", "Pandas", "JWT", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/LukaszPiasecki13/Django_React_FoundTracker",
    },
    {
      title: "Debug Reporting App - internal ",
      description:
        "I'm responsible for developing back-end modules based on Django REST. It offers JWT-based authentication, versioned API endpoints, Swagger documentation (drf-yasg), and integration with external REST APIs. It includes advanced data analysis using phenomenon modeling, precise error handling, and asynchronous data retrieval.",
      image: "public/abb.png",
      technologies: [
        "Django REST",
        "Pandas",
        "Numpy",
        "Celery",
        "Angular",
        "PostgreSQL",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },

    {
      title: "URL Shortener",
      description:
        "A full-stack URL shortening service featuring a Django REST API backend and a modern React frontend. The backend includes rate limiting per IP address using Redis to prevent abuse",
      image: "public/shortener.png",
      technologies: ["Django REST", "React.js", "PostgreSQL", "Redis"],
      liveUrl:
        "https://shortener-mgn9weh6z-lukaszpiasecki99-gmailcoms-projects.vercel.app/",
      githubUrl: "https://github.com/LukaszPiasecki13/Shortener",
    },
  ];

  return (
    <Box
      component="section"
      id="projects"
      sx={{ px: 3, py: 8, maxWidth: 1200, mx: "auto" }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          My Portfolio
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
          mb={6}
        >
          Here you can find some of my recent projects and startup ideas I'm
          currently exploring and developing.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              variant="outlined"
              sx={{
                overflow: "hidden",
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: 6 },
                maxWidth: 360,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  pt: "56.25%",
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Box>

              <CardHeader
                title={
                  <Typography variant="h6" fontWeight="bold">
                    {project.title}
                  </Typography>
                }
              />

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <Box sx={{ flexGrow: 1, mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  mb={2}
                  mt="auto"
                  sx={{ rowGap: 1 }}
                >
                  {project.technologies.map((tech, i) => (
                    <Chip key={i} label={tech} size="small" color="primary" />
                  ))}
                </Stack>

                <Stack direction="row" spacing={2} mt="auto">
                  <Button
                    variant="contained"
                    size="small"
                    href={project.liveUrl !== "#" ? project.liveUrl : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled={project.liveUrl === "#"}
                    startIcon={<ExternalLink size={16} />}
                  >
                    Demo
                  </Button>

                  <Button
                    variant="outlined"
                    size="small"
                    href={
                      project.githubUrl !== "#" ? project.githubUrl : undefined
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled={project.githubUrl === "#"}
                    startIcon={<Github size={16} />}
                  >
                    Code
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
