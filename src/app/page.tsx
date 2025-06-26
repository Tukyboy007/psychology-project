import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/section/Hero";
import About from "@/section/About";
import Projects from "@/section/Projects";
import Experiences from "@/section/Experiences";
import Testimonial from "@/section/Testimonial";
import Contact from "@/section/Contact";
import Footer from "@/section/Footer";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
