import Navbar from "@/components/Navbar";
import Image from "next/image";
import techGraphic from "@/../public/tech-graphic.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutText from "@/components/text/AboutText"

export default function About() {
  return (
    <main>
      <Navbar />

      <Header text="About Us" />

      <section className="bg-gray-100 border-2 flex gap-8 justify-center p-8 max-w-1/2">
        <AboutText />
        <Image className="w-1/5 h-max" src={techGraphic} alt="tech-graphic" />
      </section>

      <Footer />
    </main>
  );
}
