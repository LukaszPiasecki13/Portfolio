import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Message, Download, KeyboardArrowDown } from "@mui/icons-material";

export default function ProjectAPaulo() {
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
    <div>
      <Typography variant="h4" gutterBottom>
        Project a Paulo
      </Typography>
      <Typography>
        Tu znajduje się opis lub zawartość projektu a Paulo.
      </Typography>
    </div>
    </Box>
  );
}