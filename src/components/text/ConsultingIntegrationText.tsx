import Link from "next/link"
import Consulting from '@/../assets/Consulting.png'
import Image from "next/image"

export default function ConsultingIntegrationText() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <Image src={Consulting} alt="content-image" className="mx-auto my-4" />

        <h1 className="text-3xl font-bold mb-4 text-kpam-blue">
          Forward-Focused Industrial Automation Consultation and Seamless
          Integration
        </h1>
        <p className="text-lg mb-6">
          The ever-evolving landscape of modern technologies presents a
          challenge for companies striving to capitalize on automation
          opportunities and trends that can propel them ahead of competitors.
          This is where we step in. As visionary control system integrators, we
          bridge the gap between technology and your business. Particularly when
          internal resources or the required expertise are lacking, we assume
          this crucial responsibility.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">
          Efficiency Enhancement with Proficient Control System Integration
        </h2>
        <p className="text-lg mb-6">
          Optimizing your current system&apos;s efficiency goes beyond the mere
          adoption of new technologies. Whether your objective entails
          incorporating PLC controls into an existing framework or undertaking a
          complete system migration, our team of mechanical and technical
          experts collaborates with you to formulate and implement a solution
          that boosts performance and processes – today and for decades to come.
        </p>


        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">Integration</h2>
        <p className="text-lg mb-6">
          Live collaborates with your operators and process engineers to develop
          a tailored system that:
        </p>
        <ul className="list-disc mx-6 my-4">
          <li>Aligns with your specifications and expectations</li>
          <li>Mitigates hardware inconsistencies</li>
          <li>Minimizes unplanned downtime and guarantees reliability</li>
          <li>
            Empowers operators by harmonizing process controls with essential
            process data
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">
          Our Approach to Your Project
        </h2>
        <p className="text-lg mb-6">
          Each new client relationship and project initiation commences with
          understanding your vision, enabling us to craft a solution aligned
          with your needs. Our consulting and platform integration projects
          encompass the following components to ensure collaborative progress
          toward a shared goal:
        </p>
        <ul className="list-disc mx-6 my-4">
          <li>
            Project Design and Development: Conceptual designs, web-based
            meetings, and reviews
          </li>
          <li>
            Detailed Schematics and Documentation: Utilization of current CAD
            tools, including AutoCAD Electrical and Solidworks
          </li>
          <li>
            Platform Configuration and Integration: Incorporating legacy PLCs
            and HMIs, new controls, and SCADA
          </li>
          <li>
            Start-Up and Commissioning: On-site initiation, training, and remote
            assistance
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">PLC Platform Versatility</h2>
        <p className="text-lg mb-6">
          Our preparedness for platform integration lies in maintaining software
          licenses and nurturing a team of experts proficient in nearly all
          current and legacy PLC platforms, which include:
        </p>
        <ul className="list-disc mx-6 my-4">
          <li>
            Allen-Bradley/Rockwell Automation (SLC150, SLC500, PLC-2, PLC-5,
            CompactLogix, Contrologix)
          </li>
          <li>Siemens (S5, S7, TIA-Portal)</li>
          <li>Omron (NX, NJ, CS, CJ)</li>
          <li>Schneider/Modicon</li>
          <li>GE Intelligent Platforms</li>
          <li>Automation Direct (Click, DirectLogic, Productivity, Do-More)</li>
          <li>Mitsubishi (Q Series, F Series, L Series)</li>
          <li>And more</li>
        </ul>

        <p className="text-lg mb-6">
          Adopting an unbiased approach, we assess and consult on projects
          without any particular allegiance, ensuring that platform or software
          constraints are not an obstacle once the project is approved.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">
          Our Expertise, Your Industry Edge
        </h2>
        <p className="text-lg mb-6">
          Our engineers possess a wealth of experience in integrating PLC
          controls and systems across diverse industries, encompassing food and
          beverage, medical textiles and devices, high-precision optics, among
          others. By closely collaborating with clients to address
          industry-specific needs and challenges, we are well-versed not only in
          the global industry landscape but also in the intricate details that
          can either make or break an investment in automated technology.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-kpam-blue">How Can We Assist You?</h2>
        <p className="text-lg mb-6">
          At KPAM Engineering, we arrive at work each day with a singular
          objective – to provide our clients with the finest in industrial
          automation solutions, services, and support. We eagerly await your
          conversation. Reach out to us at{" "}
          <Link href="tel:2677034524" className="text-kpam-blue font-semibold">
            267 703 4524
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
