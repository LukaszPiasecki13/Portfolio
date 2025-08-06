import React from "react";
import {
  Box,
  Drawer,
  Avatar,
  Typography,
  Badge,
  Chip,
  Card,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";
import { MapPin, Calendar, Briefcase } from "lucide-react";

export default function Sidebar() {
  return (
    <Box
      component="aside"
      sx={{
        display: { xs: "none", lg: "block" },
        width: 320,
        p: 3,
        position: "sticky",
        top: 96,
        height: "calc(100vh - 96px)",
        overflowY: "auto",
      }}
    >
      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Avatar
            src="public\picture.png"
            sx={{ width: 96, height: 96, mx: "auto", mb: 2 }}
          >
            JK
          </Avatar>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            fontWeight="bold"
          >
            Łukasz Piasecki
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Software Engineer
          </Typography>

          <Stack
            spacing={1}
            alignItems="center"
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <MapPin size={18} />
              <Typography variant="body2">Poland, Netherlands</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Briefcase size={18} />
              <Typography variant="body2">ABB Poland - R&D</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Calendar size={18} />
              <Typography variant="body2">4+ years of experience</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Programming
          </Typography>

          <Typography
            variant="body2"
            fontWeight="bold"
            gutterBottom
            sx={{ mt: 2 }}
          >
            Python
          </Typography>
          <Stack direction="row" spacing={0} flexWrap="wrap" gap={1}>
            {[
              "Django",
              "Django REST",
              "Pandas",
              "NumPy",
              "SciPy",
              "PyTest",
              "Plotly",
              "PyTorch",
              "RobotFramework",
              "Appium",
              "Selenium",
              "Jupyter Notebook",
              "Matplotlib",
              "PyQt5",
            ].map((tech) => (
              <Chip key={tech} label={tech} variant="outlined" />
            ))}
          </Stack>

          <Typography
            variant="body2"
            fontWeight="bold"
            gutterBottom
            sx={{ mt: 2 }}
          >
            Other Languages
          </Typography>
          <Stack direction="row" spacing={0} flexWrap="wrap" gap={1}>
            {["SQL", "JavaScript", "HTML5", "C#", "C++", "VHDL"].map((lang) => (
              <Chip key={lang} label={lang} variant="outlined" />
            ))}
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Tools & Technologies
          </Typography>


          <Typography
            variant="body2"
            fontWeight="bold"
            gutterBottom
            sx={{ mt: 2 }}
          >
            Databases
          </Typography>
          <Stack direction="row" spacing={0} flexWrap="wrap" gap={1}>
            {["PostgreSQL", "MySQL", "Redis"].map((item) => (
              <Chip key={item} label={item} variant="outlined" />
            ))}
          </Stack>

          <Typography
            variant="body2"
            fontWeight="bold"
            gutterBottom
            sx={{ mt: 2 }}
          >
            DevOps & Deployment
          </Typography>
          <Stack direction="row" spacing={0} flexWrap="wrap" gap={1}>
            {["CI/CD", "Docker", "Azure Cloud", "Git", "Bash", "Linux"].map(
              (item) => (
                <Chip key={item} label={item} variant="outlined" />
              )
            )}
          </Stack>


          <Typography
            variant="body2"
            fontWeight="bold"
            gutterBottom
            sx={{ mt: 2 }}
          >
            Backend & Architecture
          </Typography>
          <Stack direction="row" spacing={0} flexWrap="wrap" gap={1}>
            {["REST API", "Celery"].map((item) => (
              <Chip key={item} label={item} variant="outlined" />
            ))}
          </Stack>


          <Typography
            variant="body2"
            fontWeight="bold"
            gutterBottom
            sx={{ mt: 2 }}
          >
            Machine Learning & AI
          </Typography>
          <Stack direction="row" spacing={0} flexWrap="wrap" gap={1}>
            {["PyTorch", "TensorFlow"].map((item) => (
              <Chip key={item} label={item} variant="outlined" />
            ))}
          </Stack>


          <Typography
            variant="body2"
            fontWeight="bold"
            gutterBottom
            sx={{ mt: 2 }}
          >
            Methodologies
          </Typography>
          <Stack direction="row" spacing={0} flexWrap="wrap" gap={1}>
            {["Agile"].map((item) => (
              <Chip key={item} label={item} variant="outlined" />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
