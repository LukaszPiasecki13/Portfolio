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

export function FundTracker({ open, onClose }) {
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

      <Container maxWidth="lg" sx={{ py: 4, backgroundColor: "#1e293b" }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 0 }}>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 0, maxWidth: 800, mx: "auto" }}
          >
            Not implemented yet...
          </Typography>
          
        </Box>


      </Container>
    </Dialog>
  );
}
