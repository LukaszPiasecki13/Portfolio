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
      title: "E-commerce Platform",
      description:
        "Kompleksowa platforma e-commerce z panelem administracyjnym, systemem płatności i zarządzaniem magazynem.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Aplikacja do zarządzania projektami i zadaniami z funkcjami współpracy zespołowej i raportowania.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interaktywny dashboard pogodowy z prognozami, mapami i personalizowanymi alertami.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "D3.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
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
          My Projects
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
          mb={6}
        >
          Oto wybrane projekty, które pokazują moje umiejętności i doświadczenie
          w różnych technologiach i dziedzinach.
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
                  image={project.image || "/placeholder.svg"}
                  alt={project.title}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
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

              <CardContent>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {project.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  {project.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      color="primary"
                      sx={{ mb: 0.5 }}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="small"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<ExternalLink size={16} />}
                  >
                    Demo
                  </Button>

                  <Button
                    variant="outlined"
                    size="small"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
