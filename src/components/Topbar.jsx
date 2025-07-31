import React from "react"
import { AppBar, Toolbar, Typography, Box, IconButton, Link as MuiLink } from "@mui/material"
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"

export default function Topbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "rgba(15, 23, 42, 0.8)", // slate-900/80
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(100,116,139,0.2)", // slate-600/20
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(to right, #2563eb, #14b8a6)", // blue-600 to teal-600
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "1.5rem",
          }}
        >
          Portfolio
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {["Home", "About", "Projects", "Skills", "Contact"].map((label) => (
            <MuiLink
              key={label}
              href={`#${label.toLowerCase()}`}
              underline="none"
              sx={{
                color: "#cbd5e1", // slate-300
                fontWeight: 500,
                "&:hover": { color: "#60a5fa" }, // blue-400
                transition: "color 0.2s",
              }}
            >
              {label}
            </MuiLink>
          ))}
        </Box>

        {/* Icons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <IconButton
            component="a"
            href="https://github.com"
            target="_blank"
            sx={{ color: "#94a3b8", "&:hover": { color: "#ffffff" } }}
          >
            <GitHub fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com"
            target="_blank"
            sx={{ color: "#94a3b8", "&:hover": { color: "#ffffff" } }}
          >
            <LinkedIn fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:contact@example.com"
            sx={{ color: "#94a3b8", "&:hover": { color: "#ffffff" } }}
          >
            <Mail fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
