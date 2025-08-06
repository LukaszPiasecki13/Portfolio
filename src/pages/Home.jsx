import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HelloSection } from "../components/sections/HelloSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ContactSection } from "../components/sections/ContactSection";
import { CertificatesSection } from "../components/sections/CertificatesSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <section id="home">
        <HelloSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="certificates">
        <CertificatesSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
