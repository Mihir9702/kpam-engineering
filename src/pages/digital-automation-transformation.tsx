import Header from "@/components/Header";
import AutomationTransformationSrc from "@/assets/stock/Automation Transformation.jpg";
import Image from "next/image";
import DigitalAutomationTransformationText from "@/components/text/DigitalAutomationTransformationText";

export default function DigitalAutomationTransformation() {
  return (
    <main>
      <Header title="Digital Automation Transformation" />

      <section className="bg-gray-100 flex flex-col md:flex-row justify-center items-start p-8 gap-4">
        <DigitalAutomationTransformationText />
        <Image src={AutomationTransformationSrc} alt="automation-transformation" />
      </section>
    </main>
  );
}
