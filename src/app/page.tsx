import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BackToTop, CursorGlow } from "@/components/Effects";

export default function Home() {
  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Journey />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
