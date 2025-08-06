import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { GitHub, LinkedIn, Mail, Favorite } from "@mui/icons-material";

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
          <Grid item xs={12} md={4} maxWidth={500}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{
                background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Portfolio
            </Typography>
            <Typography color="grey.400" mt={2}>
              A passionate Software Developer. If you're interested in working
              with me or have any questions, please contact me.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="600" gutterBottom>
              Quick links
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" },
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

          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Box sx={{ width: "100%", pl: { md: 30 } }}>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                Find me on
              </Typography>
              <Box display="flex" gap={2} justifyContent="flex-end">
                <IconButton
                  component="a"
                  href="https://github.com/LukaszPiasecki13"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "grey.400",
                    "&:hover": { color: "common.white" },
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/lukasz-piasecki-894768208/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "grey.400",
                    "&:hover": { color: "common.white" },
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  component="a"
                  href="mailto:lukasz.piasecki99@gmail.com"
                  sx={{
                    color: "grey.400",
                    "&:hover": { color: "common.white" },
                  }}
                >
                  <Mail />
                </IconButton>
              </Box>
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
            © 2025 Łukasz Piasecki - Portfolio
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
