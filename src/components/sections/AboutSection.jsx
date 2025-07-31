import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { Server, BarChart3, MonitorSmartphone, Bug } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Server,
      title: "Backend",
      description: (
        <>
          Experience building scalable web applications using the{" "}
          <strong> Django REST Framework, PostgreSQL, Docker</strong> and{" "}
          <strong> Redis</strong>. I had the opportunity to lead a project and
          be responsible for <strong> CI/CD</strong>.
        </>
      ),
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: (
        <>
          Data analysis and algorithm development using{" "}
          <strong>Pandas, NumPy, SciPy </strong> and{" "}
          <strong> Azure cloude</strong>. I created a tool for applying
          anomalies to data and applications enabling real-time data sharing.
        </>
      ),
    },
    {
      icon: MonitorSmartphone,
      title: "Frontend",
      description: (
        <>
          I create responsive interfaces in <strong>React.js</strong>, focusing
          on usability. I have experience in user interface design and backend
          integration in full-stack architectures.
        </>
      ),
    },
    {
      icon: Bug,
      title: "Quality & Testing",
      description: (
        <>
          I attach great importance to testing code quality. I hold an{" "}
          <strong>ISTQB </strong>
          certification and primarily use <strong>PyTest </strong> and{" "}
          <strong>Postman </strong> for testing. I'm developing my knowledge of{" "}
          <strong>CI/CD </strong> processes and <strong>DevOps</strong>.
        </>
      ),
    },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        px: 3,
        py: 8,
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
          About me
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
          lineHeight={1.6}
        >
          I am Software Engineer specizalizing in Python. My passion is
          implementing innovative ideas and creating new things and solutions.
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
          lineHeight={1.6}
          mt={2}
        >
          Since 2021 I have been working at ABB where invented and developed an
          application that speeds up the power testing process by
          <strong> 700% </strong>
          and I was responsible for designing and developing an{" "}
          <strong> Fullstack </strong> application for the QA department for
          data analysis for smart sensors using
          <strong> Django REST, React.js, PostgreSQL</strong>.
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
          lineHeight={1.6}
          mt={2}
        >
          In my free time I volunteer at <strong> Projekt a Paulo</strong>.
        </Typography>
      </Box>

      <Grid container spacing={4} mb={8}>
        {features.map(({ icon: Icon, title, description }, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              variant="outlined"
              sx={{
                textAlign: "center",
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: 6 },
                p: 3,
                maxWidth: 260,
                height: "100%",
              }}
            >
              <Icon size={48} style={{ color: "#3b82f6", marginBottom: 16 }} />
              <Typography variant="h6" fontWeight="600" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
