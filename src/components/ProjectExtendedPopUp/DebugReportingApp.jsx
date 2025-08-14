import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  IconButton,
  Stack,
  Link,
  Dialog,
  DialogTitle,
} from "@mui/material";

import {
  Analytics,
  Speed,
  Security,
  CloudSync,
  BugReport,
  Dashboard,
  Assessment,
  Settings,
  Notifications,
  DataUsage,
  Timeline,
  AccountTree,
  Memory,
  ReportProblem,
  CheckCircle,
  CloudDone,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

export function DebugReportingApp({ open, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
      {/* Close Icon */}
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Internal information */}
      <Container maxWidth="lg" sx={{ py: 4, backgroundColor: "#1e293b" }}>
        <Paper
          elevation={1}
          sx={{
            mb: 4,
            p: 2,
            backgroundColor: "warning.light",
            border: "1px solid",
            borderColor: "warning.main",
            borderRadius: 2,
            maxWidth: "90%",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Security sx={{ color: "warning.dark", mr: 1, fontSize: 20 }} />
            <Typography
              variant="body2"
              sx={{ color: "warning.dark", fontWeight: 500 }}
            >
              <strong>Internal Project Notice:</strong> This is an internal
              development project. Limited information can be shared due to
              confidentiality requirements.
            </Typography>
          </Box>
        </Paper>

        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, color: "info.main" }}
          >
            Debug Reporting App
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 800, mx: "auto" }}
          >
            I am responsible for the backend development of an internal platform
            for analysis and reporting of ABB SmartSensor data
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
          >
            <Chip label="Django Backend" color="primary" variant="outlined" />
            <Chip
              label="Angular Frontend"
              color="secondary"
              variant="outlined"
            />
            <Chip
              label="Real-time Analytics"
              color="success"
              variant="outlined"
            />
            <Chip label="Industrial IoT" color="info" variant="outlined" />
          </Stack>
        </Box>

        {/* Screenshot*/}

        <Box sx={{ textAlign: "center", maxWidth: "100%", mb: 6 }}>
          <img
            src="images/DebugReportingApp/phenomena_analysis.jpg"
            alt="Phenomena analysis"
            style={{
              width: "50%",
              height: "auto",
              display: "block",
              margin: "0 auto",
              borderRadius: "8px",
            }}
          />
        </Box>


        {/* Overview Section */}
        <Card elevation={2} sx={{ mb: 6 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "info.main", mb: 3 }}
            >
              Overview
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "text.secondary",
              }}
            >
              The Debug Reporting App is a full‑stack application used by the
              entire QA department to manage smart sensors and perform real‑time
              analyses. It enables the identification of correlations between
              cases and potential defects through phenomenon modelling.
              Integrates with cloud APIs to provide comprehensive diagnostics,
              real-time monitoring, and advanced reporting capabilities.
            </Typography>

            <Grid container spacing={6} sx={{ mt: 2 }}>
              {/* Backend Architecture */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Backend Architecture
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="• Django 4.x with REST Framework" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• JWT-based authentication" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Swagger API documentation" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• External API integration" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Centralized error handling" />
                  </ListItem>
                </List>
              </Grid>

              {/* Infrastructure & Data Processing */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Infrastructure & Data Processing
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="• Docker containerization" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Redis in-memory data store" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Azure DevOps CI/CD pipelines" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• NumPy numerical computing" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Pandas data analysis toolkit" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "info.main", mb: 4, textAlign: "center" }}
        >
          Key Features
        </Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
          <Grid item xs={12} md={6} lg={4}>
            <Card elevation={2} sx={{ maxWidth: 350, height: 200 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Analytics sx={{ color: "info.main", mr: 2, fontSize: 30 }} />
                  <Typography variant="h6">Advanced Analytics</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Automatic detection of phenomena, including recognition and
                  classification of specific patterns in sensor data, enabling
                  early identification of potential issues and performance
                  anomalies.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card elevation={2} sx={{ maxWidth: 350, height: 200 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Dashboard sx={{ color: "info.main", mr: 2, fontSize: 30 }} />
                  <Typography variant="h6">
                    Sensor and Phenomenon Management
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Enables structured management of devices, detected phenomena
                  and their analytical insights. Users can browse historical
                  measurements, time‑series plots, and raw data.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card elevation={2} sx={{ maxWidth: 350, height: 200 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Assessment
                    sx={{ color: "info.main", mr: 2, fontSize: 30 }}
                  />
                  <Typography variant="h6">Dynamic Reporting</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Generate detailed sensor reports with customizable date
                  ranges, including measurements, plots, and detected phenomena,
                  and export them seamlessly to HTML or Excel formats for
                  further analysis or sharing.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card elevation={2} sx={{ maxWidth: 350, height: 200 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <AccountTree
                    sx={{ color: "info.main", mr: 2, fontSize: 30 }}
                  />
                  <Typography variant="h6">Modular API Architecture</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Versioned, well‑structured Django REST Framework API with
                  modular apps ensuring maintainability, scalability, and clean
                  separation of concerns.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card elevation={2} sx={{ maxWidth: 350, height: 200 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CloudSync sx={{ color: "info.main", mr: 2, fontSize: 30 }} />
                  <Typography variant="h6">
                    External API Integration Layer
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Prepared drivers for ABB cloud APIs with token‑based
                  authentication, data transformation, and error mapping to
                  ensure secure and reliable data flow.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card elevation={2} sx={{ maxWidth: 350, height: 200 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <ReportProblem
                    sx={{ color: "info.main", mr: 2, fontSize: 30 }}
                  />
                  <Typography variant="h6">
                    Centralized Error Handling
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Custom exception handling with structured, user‑friendly
                  responses for consistent and predictable communication with
                  the frontend.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card elevation={2} sx={{ maxWidth: 350, height: 200 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircle
                    sx={{ color: "info.main", mr: 2, fontSize: 30 }}
                  />
                  <Typography variant="h6">
                    Automated Testing & Validation
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Comprehensive unit and integration tests for backend
                  endpoints, ensuring reliability and preventing regressions
                  during development cycles.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card elevation={2} sx={{ maxWidth: 350, height: 200 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CloudDone sx={{ color: "info.main", mr: 2, fontSize: 30 }} />
                  <Typography variant="h6">
                    Optimized Deployment Stack
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Production deployment with Gunicorn, Nginx reverse proxy, and
                  environment management via Poetry for stability, performance,
                  and maintainability.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Screenshot  */}
                <Box sx={{ textAlign: "center", maxWidth: "100%", mb: 6 }}>
          <img
            src="images\DebugReportingApp\report_view.png"
            alt="Phenomena analysis"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Container>
    </Dialog>
  );
}
