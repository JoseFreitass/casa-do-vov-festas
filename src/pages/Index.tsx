import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Packages } from "@/components/sections/Packages";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Confetti } from "@/components/Confetti";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Confetti />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Packages />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
