import React from "react"
import { CssBaseline, Box } from "@mui/material"
import Topbar from "./components/Topbar"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f172a",     // dark slate (tailwind: slate-900)
      paper: "#1e293b",       // slightly lighter (tailwind: slate-800)
    },
    text: {
      primary: "#f1f5f9",     // slate-100
      secondary: "#94a3b8",   // slate-400
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
  },
})

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
            <Home />
          </Box>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
