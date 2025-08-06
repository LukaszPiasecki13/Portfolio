import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Box,
  LinearProgress,
  CardMedia,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import { ExternalLink, Github } from "lucide-react";

export function CertificatesSection() {
  const certificates = [
    {
      title: "ISTQB® Certified Tester Foundation Level ",
      issuer: "SJSI",
      date: "May 2024",
      link: "src/assets/CTFL4-2024-22325-SJSI_EN_Lukasz_Piasecki.pdf",
      image: "public/istqb.jpg",
    },
    {
      title: "Big Data processing using Apache Spark",
      issuer: "Bottega IT Minds",
      date: "Sep. 2023",
      link: "src/assets/Big_data_certyfikat Łukasz Piasecki.pdf",
      image: "public/illu_apache_spark-28.png",
    },
    {
      title: "AgilePM Agile Project Management",
      issuer: "APMG International",
      date: "Nov. 2023",
      link: "https://www.credly.com/badges/91c2c41b-dd4d-4623-83c0-e0b82b67c198/public_url",
      image: "public/agile.png",
    },
    {
      title: "PRINCE2® Cerificate Foundation",
      issuer: "PeopleCert",
      date: "Nov. 2023",
      link: "src/assets/Prince_2_PM_Certyfikat.pdf",
      image: "public/PRINCE2-Project-Management-PRINCE2-7-Foundation.png",
    },
    {
      title: "Python for Intermediate Users",
      issuer: "Rafal Mobilo",
      date: "Nov. 2022",
      link: "https://www.udemy.com/certificate/UC-04ccbb30-4eb7-4fae-baa5-e270557a0ad8/",
      image: "public/python.png",
    },
  ];

  return (
    <Box
      component="section"
      id="certificates"
      sx={{ px: 3, py: 8, maxWidth: 1200, mx: "auto" }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Certificates
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {certificates.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              variant="outlined"
              sx={{
                overflow: "hidden",
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: 6 },
                width: 300,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  pt: "56.25%",
                  backgroundColor: "background.paper",
                }}
              >
                <CardMedia
                  component="img"
                  image={cert.image}
                  alt={cert.title}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    p: 2,
                    backgroundColor: "background.default",
                  }}
                />
              </Box>

              <CardHeader
                title={
                  <Typography variant="h6" fontWeight="bold">
                    {cert.title}
                  </Typography>
                }
                subheader={
                  <Typography variant="body2" color="text.secondary">
                    {cert.issuer}
                  </Typography>
                }
              />

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {cert.date}
                </Typography>

                <Stack direction="row" spacing={2} mt="auto">
                  {cert.link.endsWith(".pdf") ? (
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => window.open(cert.link, "_blank")}
                      startIcon={<ExternalLink size={16} />}
                    >
                      View Certificate
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      size="small"
                      href={cert.link !== "#" ? cert.link : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={cert.link === "#"}
                      startIcon={<ExternalLink size={16} />}
                    >
                      View Certificate
                    </Button>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
