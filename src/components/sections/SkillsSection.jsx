import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Box,
  LinearProgress,
} from "@mui/material";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Python", level: 4 },
        { name: "Django/DRF", level: 3 },
        { name: "PostgreSQL", level: 2 },
        { name: "Redis", level: 1 },
        { name: "Celery", level: 1 },
      ],
    },
    {
      title: "ML & Data",
      skills: [
        { name: "Pandas", level: 2 },
        { name: "NumPy", level: 2 },
        { name: "LLM", level: 1 },
        { name: "PyTorch", level: 1 },
        { name: "TensorFlow", level: 1 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 3 },
        { name: "HTML/Css/JS", level: 3 },
        { name: "React.js", level: 2 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 4 },
        { name: "Postman", level: 3 },
        { name: "CI/CD", level: 2 },
        { name: "Azure cloud", level: 2 },

        { name: "Docker", level: 1 },
      ],
    },
  ];

  return (
    <Box
      component="section"
      id="skills"
      sx={{ px: 3, py: 8, maxWidth: 1200, mx: "auto" }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Skills
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
        >
          My technical skills have been developed over years of experience in
          various projects and technologies.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card variant="outlined" sx={{ height: "100%", minWidth: 260 }}>
              <CardHeader
                title={
                  <Typography variant="h5" align="center" fontWeight="bold">
                    {category.title}
                  </Typography>
                }
              />
              <CardContent>
                {category.skills.map((skill, skillIndex) => (
                  <Box key={skillIndex} mb={3}>
                    <Box display="flex" justifyContent="space-between" mb={0.5}>
                      <Typography variant="body1" fontWeight={500}>
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level} years
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level * 25}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: (theme) =>
                          theme.palette.mode === "light"
                            ? "#e0e0e0"
                            : "#303030",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 5,
                          backgroundColor: (theme) =>
                            theme.palette.primary.main,
                        },
                      }}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        mt={8}
        sx={{
          background: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(90deg, #dbeafe, #e0e7ff)"
              : "linear-gradient(90deg, rgba(13,42,81,0.3), rgba(67,48,117,0.3))",
          borderRadius: 3,
          p: 4,
          maxWidth: 900,
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="600" mb={2}>
          How I keep learning
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
        >
          I learn most through hands-on project development and collaborating
          with senior colleagues. I often reach for online courses, tutorials,
          and technical documentation.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth={600}
          mx="auto"
          mt={2}
        >
          Interestingly, I also find great value in books:
        </Typography>
        <ul
          style={{
            maxWidth: 600,
            margin: "8px auto",
            paddingLeft: "20px",
            color: "#6b7280",
          }}
        >
          <li>
            <strong>“Clean Code”</strong> – Robert C. Martin
          </li>
          <li>
            <strong>
              “Design Patterns: Elements of Reusable Object-Oriented Software”
            </strong>{" "}
            – Gamma, Helm, Johnson, Vlissides
          </li>
          <li>
            <strong>
              “Python Tricks: A Buffet of Awesome Python Features”
            </strong>{" "}
            – Dan Bader
          </li>
          <li>
            <strong>“The Pragmatic Programmer”</strong> – David Thomas, Andrew
            Hunt
          </li>
          <li>
            <strong>“Test-Driven Development with Python”</strong> – Harry J.W.
            Percival
          </li>
        </ul>
      </Box>
    </Box>
  );
}
