import React from "react";
import { CssBaseline, Box } from "@mui/material";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ProjectAPaulo from "./pages/ProjectAPaulo";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#94a3b8",
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            minHeight: "100vh",
            background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <Topbar />

          {/* Layout */}
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "64px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projectapaulo" element={<ProjectAPaulo />} />
              </Routes>
            </Box>
          </Box>

          {/* Footer */}
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}
