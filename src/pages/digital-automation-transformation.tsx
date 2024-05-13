import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import AutomationTransformation from "@/../public/AUTOMATION TRANSFORMATION.jpg";
import Image from "next/image";
import Footer from "@/components/Footer";
import DigitalAutomationTransformationText from "@/components/text/DigitalAutomationTransformationText";

export default function DigitalAutomationTransformation() {
  return (
    <main>
      <Navbar />
      <Header text="Digital Automation Transformation" />

      <section className="bg-gray-100 flex justify-center items-start p-8 gap-4">
        <DigitalAutomationTransformationText />
        <Image src={AutomationTransformation} alt="" />
      </section>

      <Footer />
    </main>
  );
}
