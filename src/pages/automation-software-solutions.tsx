import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import autoSoftware from "@/../public/Automation Software.jpg";
import Image from "next/image";
import Footer from "@/components/Footer";
import AutomationSoftwareText from "@/components/AutomationSoftwareText"

export default function DigitalAutomationTransformation() {
  return (
    <main>
      <Navbar />
      <Header text="Automation Software and Solutions for PLC & HMI" />

      <section className="bg-gray-100 flex items-start justify-center gap-8">
        <AutomationSoftwareText />
        <Image src={autoSoftware} alt="" className="" />
      </section>

      <Footer />
    </main>
  );
}
