import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <main className="bg-[#0f0c29] text-white font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}