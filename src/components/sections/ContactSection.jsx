import { useRef, useState } from "react";
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
} from "@mui/material";
import { Mail, Phone, LocationOn, Send } from "@mui/icons-material";
import emailjs from "emailjs-com";

export function ContactSection() {
  const formRef = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const contactInfo = [
    {
      icon: <Mail color="primary" />,
      title: "Email",
      value: "lukasz.piasecki99@gmail.com",
      href: "mailto:lukasz.piasecki99@gmail.com",
    },
    {
      icon: <Phone color="primary" />,
      title: "Phone",
      value: "+48 736 734 593",
      href: "tel:+48736734593",
    },
    {
      icon: <LocationOn color="primary" />,
      title: "Locations",
      value: "Poland, Netherlands",
      href: "#",
    },
  ];

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ px: 3, py: 8, maxWidth: 1200, mx: "auto" }}
    >
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Contact
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
        >
          Have a project you'd like to pursue or want to discuss collaboration?
          Contact me!
        </Typography>
      </Box>

      <Grid
        container
        spacing={6}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {/* Info kontaktowe */}
        <Grid item xs={12} lg={6}>
          <Typography variant="h5" fontWeight="600" mb={4}>
            Contact Information
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
        </Grid>

        {emailSent ? (
          <Box textAlign="center" py={4}>
            <Typography variant="h6" color="success.main" fontWeight="bold">
              ✅ Message sent successfully!
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={1}>
              Thank you for reaching out! I will get back to you as soon as
              possible.
            </Typography>
          </Box>
        ) : (
          <Grid>
            <Card>
              <CardHeader
                title={
                  <Typography variant="h6" fontWeight="bold">
                    Send a Message
                  </Typography>
                }
              />
              <CardContent>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  ref={formRef}
                  onSubmit={handleSendEmail}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        name="name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    label="Title"
                    variant="outlined"
                    name="title"
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    name="message"
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
                    Send
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
