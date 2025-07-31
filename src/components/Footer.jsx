import React from "react"
import { Box, Typography, Grid, Link, IconButton, Divider } from "@mui/material"
import { GitHub, LinkedIn, Mail, Favorite } from "@mui/icons-material"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "common.white",
        py: 12,
        px: { xs: 3, sm: 6, lg: 8 },
      }}
    >
      <Box maxWidth={1200} mx="auto">
        <Grid container spacing={8}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{
                background:
                  "linear-gradient(to right, #3b82f6, #8b5cf6)", // blue to purple
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Portfolio
            </Typography>
            <Typography color="grey.400" mt={2}>
              Full Stack Developer tworzący nowoczesne aplikacje webowe z pasją do czystego kodu i innowacyjnych
              rozwiązań.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="600" gutterBottom>
              Szybkie linki
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "O mnie" },
                { href: "#projects", label: "Projekty" },
                { href: "#skills", label: "Umiejętności" },
                { href: "#contact", label: "Kontakt" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  underline="hover"
                  color="grey.400"
                  sx={{
                    "&:hover": { color: "common.white" },
                    cursor: "pointer",
                  }}
                >
                  {label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="600" gutterBottom>
              Znajdź mnie
            </Typography>
            <Box display="flex" gap={2}>
              <IconButton
                component="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "grey.400", "&:hover": { color: "common.white" } }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "grey.400", "&:hover": { color: "common.white" } }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:contact@example.com"
                sx={{ color: "grey.400", "&:hover": { color: "common.white" } }}
              >
                <Mail />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "grey.800", my: 8 }} />

        <Box textAlign="center">
          <Typography
            color="grey.400"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            variant="body2"
          >
            © 2024 Jan Kowalski. Stworzone z{" "}
            <Favorite sx={{ color: "error.main", fontSize: 18 }} /> w React
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
