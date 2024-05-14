import Image from "next/image";
import Header from "@/components/Header";
import AboutText from "@/components/text/AboutText"
import imgSrc from "@/assets/cartoon/tech-graphic.png";

export default function About() {
  return (
    <main>
      <Header title="About Us" />

      <section className="bg-gray-100 border-2 flex gap-8 justify-center p-8 max-w-1/2">
        <AboutText />
        <Image className="w-1/5 h-max" src={imgSrc} alt="tech-graphic" />
      </section>
    </main>
  );
}
