import Link from "next/link";
import Image from "next/image";
import AutomationSoftwareSrc from "@/../public/Automation Software.jpg";

export default function AutomationSoftwareText() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4 text-kpam-blue">
          Automation Software and Solutions for PLC & HMI
        </h1>
        <p className="text-lg mb-6">
          We&apos;re the experts in PLC automation. Our journey began as the PLC
          GUYS, and we&apos;re incredibly proud of our roots! This foundation
          has solidified our belief that reliable, easily maintainable PLC
          controls lie at the core of lean manufacturing objectives and modern
          industrial automation systems. Backed by a team of adept PLC
          programming resources, we swiftly consult on, troubleshoot, and
          resolve any issues that might jeopardize operations. With PLC controls
          steering the success of your automation investments, we consider it
          paramount to be your automation partner - one that offers experienced,
          creative, and innovative PLC programming resources, ready to tackle
          any challenge that comes our way.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">
          Revamping or Crafting New PLC & HMI Systems
        </h2>
        <p className="text-lg mb-6">
          Are you working with an existing system or diving into something
          entirely new? Rest assured, we&apos;re here to assist. Whether
          you&apos;re automating machinery, adding or modifying plant processes,
          or embarking on a complete design and build endeavor, our ability to
          operate across numerous automation platforms sets us apart from the
          rest. Regardless of the PLC platform you choose, we&apos;re
          well-prepared to meet your needs, holding software licenses and
          trained experts for nearly all current and legacy PLC platforms.
        </p>

        <p className="text-lg mb-6">
          We&apos;ve partnered with a diverse array of businesses, ranging from
          highly automated enterprises using custom machinery to those new to
          automation seeking step-by-step guidance. Regardless of where your
          company stands on the automation spectrum, our 15+ years of experience
          in consulting, concept development, prototyping, design, and
          integration empowers us to provide the talent and resources needed to
          customize a contemporary solution that aligns perfectly with your
          requirements.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">
          Seamless Migration of Existing PLC Controls
        </h2>
        <Image src={AutomationSoftwareSrc} alt="automation-software" />
        <p className="text-lg my-4">
          In the world of technology, nothing lasts forever. The silver lining,
          however, is that modern automation technology boasts exceptional
          capabilities (far superior to just five years ago.) The imperative of
          avoiding industrial control system obsolescence resonates with
          companies aiming to sidestep the risks of unplanned downtime, elevated
          repair costs, limited network options, increased production errors,
          and staff safety concerns. Whether you seek comprehensive
          modernization or a phased migration, we&apos;re well-versed in
          cutting-edge software and hardware. This ensures we deliver a new
          system that not only enhances security and mitigates substantial risks
          but also seamlessly integrates into your current processes.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">
          Proficiency in HMI Platforms
        </h2>
        <p className="text-lg mb-6">
          We excel in various HMI platforms, including Fuji Electric /
          Monitouch, Allen Bradley Panelview, PanelView Plus, Siemens, Exor, Red
          Lion, Pro Face, Unitronics, and many more.
        </p>

        <h3 className="text-xl font-bold mb-2 text-kpam-blue">
          Benefits of HMI
        </h3>
        <ul className="list-disc ml-6 text-kpam-blue">
          <li className="text-lg mb-2">
            <p className="text-black">
              HMIs provide real-time textual or graphical insight into system
              conditions and operations – a level of vital information absent in
              simple pushbutton panels or switch banks.
            </p>
          </li>
          <li className="text-lg mb-2">
            <p className="text-black">
              With HMIs offering robust monitoring, control, status reporting,
              data collection, and more, you can optimize your PLC investment,
              driving operational efficiency and profitability.
            </p>
          </li>
          <li className="text-lg mb-2">
            <p className="text-black">
              HMIs enhance communication between devices, connecting devices and
              machines together while adding functionality.
            </p>
          </li>
          <li className="text-lg mb-2">
            <p className="text-black">
              HMI simulation facilitates equipment testing without physical
              setups, improving overall production and minimizing startup time.
            </p>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">
          How Can We Assist You?
        </h2>
        <p className="text-lg mb-6">
          Reach out to us at{" "}
          <Link href="tel:+12679495726" className="text-kpam-blue">
            +1 267 949 5726
          </Link>{" "}
          and present us with a challenge - we&apos;re passionate about solving
          problems.
        </p>
      </div>
    </section>
  );
}
