import Header from "@/components/Header";
import Image from "next/image";
import AutomationSoftwareSrc from "@/../public/Automation Software.jpg";
import AutomationSoftwareText from "@/components/text/AutomationSoftwareText"

export default function DigitalAutomationTransformation() {
  return (
    <main>
      <Header title="Automation Software and Solutions for PLC & HMI" />

      <section className="bg-gray-100 flex items-start justify-center gap-8 py-8">
        <AutomationSoftwareText />
        <Image src={AutomationSoftwareSrc} alt="automation-software" />
      </section>
    </main>
  );
}
