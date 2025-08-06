import React from "react"
import { AppBar, Toolbar, Typography, Box, IconButton, Link as MuiLink } from "@mui/material"
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"

export default function Topbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "rgba(15, 23, 42, 0.8)", 
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(100,116,139,0.2)", 
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(to right, #2563eb, #14b8a6)", 
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "1.5rem",
          }}
        >
          Portfolio
        </Typography>


        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {["Home", "About", "Projects", "Skills", "Certificates", "Contact"].map((label) => (
            <MuiLink
              key={label}
              href={`#${label.toLowerCase()}`}
              underline="none"
              sx={{
                color: "#cbd5e1", 
                fontWeight: 500,
                "&:hover": { color: "#60a5fa" }, 
                transition: "color 0.2s",
              }}
            >
              {label}
            </MuiLink>
          ))}
        </Box>


        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <IconButton
            component="a"
            href="https://github.com/LukaszPiasecki13"
            target="_blank"
            sx={{ color: "#94a3b8", "&:hover": { color: "#ffffff" } }}
          >
            <GitHub fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/lukasz-piasecki-894768208/"
            target="_blank"
            sx={{ color: "#94a3b8", "&:hover": { color: "#ffffff" } }}
          >
            <LinkedIn fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:lukasz.piasecki99@gmail.com"
            sx={{ color: "#94a3b8", "&:hover": { color: "#ffffff" } }}
          >
            <Mail fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
