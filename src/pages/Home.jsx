import React from 'react'
import { Typography, Box, Avatar, Paper } from '@mui/material'
import { HelloSection } from "../components/sections/HelloSection"  
import { AboutSection } from "../components/sections/AboutSection"
import { ProjectsSection } from "../components/sections/ProjectsSection"
import { SkillsSection } from "../components/sections/SkillsSection"
import { ContactSection } from "../components/sections/ContactSection"

export default function Home() {
  return (
    <div style={{ paddingBottom: 80, marginTop: 0, gap: '5rem' }}>
      <HelloSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}
