import React from "react"
import {
  Box,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  InputAdornment,
  Link,
} from "@mui/material"
import { Mail, Phone, LocationOn, Send } from "@mui/icons-material"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail color="primary" />,
      title: "Email",
      value: "jan.kowalski@example.com",
      href: "mailto:jan.kowalski@example.com",
    },
    {
      icon: <Phone color="primary" />,
      title: "Telefon",
      value: "+48 123 456 789",
      href: "tel:+48123456789",
    },
    {
      icon: <LocationOn color="primary" />,
      title: "Lokalizacja",
      value: "Warszawa, Polska",
      href: "#",
    },
  ]

  return (
    <Box
      component="section"
      id="contact"
      sx={{ px: 3, py: 8, maxWidth: 1200, mx: "auto" }}
    >
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Kontakt
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
        >
          Masz projekt do realizacji lub chcesz porozmawiać o współpracy? Skontaktuj się ze mną!
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {/* Info kontaktowe */}
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" fontWeight="600" mb={4}>
            Informacje kontaktowe
          </Typography>
          <Box display="flex" flexDirection="column" gap={3} mb={4}>
            {contactInfo.map(({ icon, title, value, href }, index) => (
              <Box key={index} display="flex" alignItems="center" gap={2}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: "primary.light",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </Box>
                <Box>
                  <Typography fontWeight={500}>{title}</Typography>
                  <Link
                    href={href}
                    underline="hover"
                    color="text.secondary"
                    sx={{ "&:hover": { color: "primary.main" } }}
                  >
                    {value}
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              bgcolor: "primary.lighter",
              borderRadius: 3,
              p: 3,
            }}
          >
            <Typography fontWeight={600} mb={1}>
              Dostępność
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Jestem otwarty na nowe projekty i współpracę. Odpowiadam na wiadomości w ciągu 24 godzin.
            </Typography>
          </Box>
        </Grid>

        {/* Formularz kontaktowy */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={
                <Typography variant="h6" fontWeight="bold">
                  Wyślij wiadomość
                </Typography>
              }
            />
            <CardContent>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Imię i nazwisko"
                      placeholder="Jan Kowalski"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      placeholder="jan@example.com"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  label="Temat"
                  placeholder="Współpraca przy projekcie"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  label="Wiadomość"
                  placeholder="Opisz swój projekt lub zadaj pytanie..."
                  variant="outlined"
                  multiline
                  rows={5}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<Send />}
                  fullWidth
                >
                  Wyślij wiadomość
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
