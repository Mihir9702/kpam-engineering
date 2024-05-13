import Image from "next/image";
import System from "@/../public/art/SCADA Control System.jpg";
import Computer from "@/../public/art/SCADA Computer.jpg";
import Experience from "@/../public/art/SCADA Experience.jpg";
import Innovation from "@/../public/art/SCADA Innovation.png";
import Panel from "@/../public/art/SCADA Panel.jpg";

export default function StreamlinedScadaText() {
  return (
    <section>
      <div className="bg-gray-100 flex items-start justify-center gap-8 py-8">
        <LeftColumn />
        <RightColumn />
      </div>
      <Banner />
      <Content />
    </section>
  );
}

function LeftColumn() {
  return (
    <div className="flex flex-col gap-8 max-w-xl">
      <div>
        <h1 className="text-kpam-blue font-semibold text-2xl">
          SCADA SYSTEM SOLUTIONS TAILORED TO YOU
        </h1>
        <p>
          Kpam Engineering&apos;s seasoned team of SCADA programmers understands
          that delivering clear information, intuitive system controls, and
          user-friendly navigation lie at the heart of exceptional SCADA/HMI
          programming. These factors ultimately drive operational efficiency and
          performance. What sets us apart is our commitment to designing to your
          standards - we never force you into a rigid mold. And if you&apos;re
          still establishing your standards, rest assured, we bring exceptional
          ones to the table. Either way, we handle the heavy lifting while
          ensuring your involvement every step of the way, ensuring a system
          you&apos;ll genuinely love.
        </p>
      </div>

      <div>
        <h1 className="text-kpam-blue font-semibold text-xl">
          Selecting the Perfect SCADA System
        </h1>
        <p>
          The SCADA system is the brain behind your automation setup, making the
          choice of the right system crucial. Often, the ability to monitor and
          control systems and processes isn&apos;t feasible for humans due to
          location, cost, or complexity.
        </p>

        <br />
        <p>
          Whether you&apos;re implementing your first SCADA system, updating an
          existing one, or seeking an integration partner to help you navigate
          the myriad options, we&apos;re here to help. We&apos;ll explore the
          following factors to assist you in choosing the ideal SCADA system for
          your business:
        </p>

        <div className="flex flex-col items-end gap-36 my-8">
          <Image src={System} alt="content-image" className="self-start" />
        </div>

        <div>
          <h1 className="text-kpam-blue font-semibold text-xl">
            Experience in SCADA Integration Counts
          </h1>

          <p>
            With HMI/SCADA systems advancing and becoming more intricate, our
            engineering team collaborates with you to design, install, and
            monitor a comprehensive SCADA system. Proficient across various
            SCADA / HMI software programs, we&apos;ve consulted on, designed,
            implemented, and supported numerous systems. We&apos;re integration
            partners for the following platforms:
          </p>
        </div>

        <div>
          <ul className="list-disc mx-8 my-4">
            <li>Siemens WinCC</li>
            <li>Indusoft</li>
            <li>Iconics</li>
            <li>Rockwell Software</li>
            <li>AVEVA (Wonderware)</li>
            <li>GE Cimplicity, Proficy, Intellution</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function RightColumn() {
  return (
    <div className="flex flex-col gap-8 justify-between">
      <Image src={Computer} alt="content-image" className="" />

      <div className="max-w-xl flex flex-col gap-8">
        <div>
          <h1 className="text-kpam-blue font-semibold text-xl">HARDWARE</h1>

          <p>
            Compatibility with your existing hardware is key. We consider the
            equipment in place at your site(s) and ensure it aligns with your
            selected SCADA system.
          </p>
        </div>
        <div>
          <h1 className="text-kpam-blue font-semibold text-xl">REQUIREMENTS</h1>

          <p>
            Your chosen system should support both your current and future
            needs, including expansions or increasing data-dependent users.
          </p>
        </div>

        <div>
          <h1 className="text-kpam-blue font-semibold text-xl">COST</h1>

          <p>
            Remember that quality counts. Initial costs may not reflect the
            long-term expenses. Consider inspection, maintenance, repair costs,
            and the potential impact of the proposed SCADA system on total
            operational costs.
          </p>
        </div>

        <div>
          <h1 className="text-kpam-blue font-semibold text-xl">
            SERVICE & SUPPORT
          </h1>

          <p>
            A reputable, stable integrator is vital. The team implementing the
            system matters more than the platform itself, as they&apos;ll be
            responsible for troubleshooting, upgrades, and ongoing support.
          </p>
        </div>

        <div>
          <h1 className="text-kpam-blue font-semibold text-xl">SECURITY</h1>

          <p>
            Address potential security risks by conducting a vulnerability
            assessment and implementing best practices to close any gaps.
          </p>
        </div>

        <Image src={Experience} alt="content-image" />
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="py-8 flex flex-col items-center gap-8">
      <h1 className="text-gray-100 font-semibold text-xl">
        Our expertise spans a range of industries, helping businesses achieve
        substantial savings of time and money in sectors such as:
      </h1>

      <div className="flex items-center">
        <Image src={Innovation} alt="content-image" />
        <ul className="list-disc mx-8 text-gray-100">
          <li>Nonwoven</li>
          <li>Paper Manufacturing</li>
          <li>Diaper and Wipes</li>
          <li>Pharmaceutical Packaging</li>
          <li>Food and Beverage</li>
          <li>Energy</li>
          <li>Manufacturing</li>
          <li>Oil and Gas</li>
          <li>Recycling</li>
        </ul>
      </div>
    </div>
  );
}

function Content() {
  return (
    <section className="bg-gray-100 flex justify-center gap-8 py-8">
      <div className="max-w-2xl">
        <h1 className="text-kpam-blue font-semibold text-xl">
          Advantages of SCADA / HMI Systems
        </h1>
        <p>
          Data-driven decisions propel businesses ahead. A robust SCADA system
          provides historical insights into automated systems, controlling
          machinery and processes via HMI. Benefits include:
        </p>

        <br />
        <h1 className="text-kpam-blue font-semibold text-xl">
          Maximum Productivity
        </h1>
        <p>
          SCADA&apos;s multi-level redundancy ensures constant communication and
          operation for maximum productivity.
        </p>

        <br />
        <h1 className="text-kpam-blue font-semibold text-xl">
          Improved Product Quality
        </h1>
        <p>
          SCADA analyzes and controls product quality using features like
          Statistical Process Control (SPC).
        </p>

        <br />
        <h1 className="text-kpam-blue font-semibold text-xl">Reduced Costs</h1>
        <p>Centralized SCADA reduces operating and maintenance costs.</p>

        <br />
        <h1 className="text-kpam-blue font-semibold text-xl">Integration</h1>
        <p>
          Easily integrate SCADA with business systems, enhancing production and
          decision-making.
        </p>

        <br />
        <h1 className="text-kpam-blue font-semibold text-xl">
          Capital Investment Protection
        </h1>
        <p>
          A well-designed, open SCADA system safeguards against obsolescence and
          scales as demands grow.
        </p>

        <br />
        <h1 className="text-kpam-blue font-semibold text-xl">
          How Can We Assist You?
        </h1>
        <p>
          If you&apos;re considering a new SCADA system or need an evaluation of
          your existing one, give us a call for a chat. We&apos;ll find the best
          way to make your life a little easier.
          <br />
          <br />
          Contact us at +1 267 949 5726.
        </p>
      </div>
      <div>
        <div className="flex items-center">
          <Image src={Panel} alt="content-image" />
        </div>
      </div>
    </section>
  );
}
