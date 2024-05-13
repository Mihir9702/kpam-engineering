import Image from "next/image";
import AssemblyEquipment from "@/../public/Assembly Equipment.jpg";
import BenefitsTailored from "@/../public/Benefits of Tailored.jpg";

export default function DigitalAutomationTransformationText() {
  return (
    <div className="flex flex-col gap-8 max-w-xl">
      <h1 className="text-kpam-blue font-semibold text-3xl">
        Digital Automation Equipment
      </h1>

      <div>
        <h1 className="text-kpam-blue font-semibold text-lg">
          Transforming Your Requirements into Tailored Automation Systems
        </h1>
        <p>
          In today&apos;s dynamic global manufacturing landscape, innovative
          solutions are essential to address your unique business challenges
          while enhancing your competitive edge. Our expertise spans from simple
          to intricate machine solutions, designed to provide you with
          cost-effective and reliable custom automation equipment that bolsters
          your operational efficiency, profitability, and safety goals. Quite
          often, the solution might pleasantly surprise you.
        </p>
      </div>

      <div>
        <h1 className="text-kpam-blue font-semibold text-xl">
          A Collaborative Approach to Achieving Automation Success
        </h1>
        <p>
          At Kpam Engineering, we take pride in our ability to think beyond the
          ordinary, enabling our clients to outshine their competition. Blending
          unparalleled technical knowledge with a creative mindset has become
          synonymous with our reputation. Our aim is not only to employ
          innovative problem-solving skills to overcome challenges but also to
          leverage our proficiency in custom machine design and construction to
          unearth new automation prospects where repetitive processes prevail or
          human intervention has been the norm.
        </p>
        <br />

        <p>
          We&apos;ve partnered with a diverse array of businesses, ranging from
          highly automated enterprises using custom machinery to those new to
          automation seeking step-by-step guidance. Regardless of where your
          company stands on the automation spectrum, our 15+ years of experience
          in consulting, concept development, prototyping, design, and
          integration empowers us to provide the talent and resources needed to
          customize a contemporary solution that aligns perfectly with your
          requirements.
        </p>
      </div>

      <div>
        <h1 className="text-kpam-blue font-semibold text-xl">
          Capabilities in Industrial Automation Equipment
        </h1>
        <p>
          Kpam Engineering excels in designing, engineering, manufacturing, and
          retrofitting custom automation machines for intricate processes,
          harnessing the latest state-of-the-art manufacturing technology.
          Setting us apart from other custom machine builders, the Live team is
          also adept at programming equipment using your existing control
          platform, offering you the convenience of a single partner for all
          your industrial automation needs. It&apos;s worth noting that we
          started as the PLC experts!
        </p>
      </div>

      <br />
      <div className="flex">
        <Image src={AssemblyEquipment} alt="" />
        <ul className="list-disc mx-16 text-nowrap">
          <li>Assembly Equipment</li>
          <li>Medical Textile (Suture Tipping & Cutting)</li>
          <li>Spoolers</li>
          <li>Winders</li>
          <li>Braiders</li>
          <li>Test & Inspection Equipment</li>
          <li>Material Handling</li>
          <li>Induction Heating</li>
          <li>Robotics</li>
          <li>and many more</li>
        </ul>
      </div>

      <br />
      <div>
        <h1 className="text-kpam-blue font-semibold text-xl">
          Tailored Machinery for your Industry and Control Platform
        </h1>
        <p>
          Every industry comes with its distinct manufacturing requisites and
          avenues for process enhancement and innovation. Our team of engineers
          is adept across current control platforms, as well as legacy systems,
          and has forged solutions for an expansive range of industry sectors,
          including:
        </p>
      </div>
      <br />

      <div className="flex">
        <Image src={BenefitsTailored} alt="" />
        <ul className="list-disc mx-16 text-nowrap">
          <li>Manufacturing</li>
          <li>Medical and Life Sciences</li>
          <li>Fiber and Textiles</li>
          <li>Food and Beverage</li>
          <li>Water and Wastewater</li>
          <li>Plastics Molding</li>
          <li>Pharma & Biotech</li>
          <li>Breweries</li>
        </ul>
      </div>

      <div>
        <h1 className="text-kpam-blue font-semibold text-xl">
          Benefits of Tailored Automation Equipment
        </h1>
        Customized automated processes offer companies exceptional benefits,
        including:
      </div>

      <div>
        <h1 className="text-kpam-blue font-semibold text-xl">
          Manufacturing Cost Reduction:
        </h1>
        Automated equipment operates faster, more efficiently, and for extended
        durations compared to manual operations, enabling you to manage
        increased workloads and revenue.
      </div>

      <div>
        <h1 className="text-kpam-blue font-semibold text-xl">
          Accuracy and Improved Quality:
        </h1>
        Automated equipment ensures consistent production quality with high
        repeatability, minimizing errors and waste associated with manual tasks.
      </div>

      <div>
        <h1 className="text-kpam-blue font-semibold text-xl">
          Increased Safety:
        </h1>
        Utilizing automated machines minimizes the risk of employee injury by
        handling dangerous tasks, enhancing workplace safety.
      </div>

      <div>
        <h1 className="text-kpam-blue font-semibold text-xl">
          How Can We Assist You?
        </h1>
        Whether you seek an initial consultation, Skunkworks R&D, or have a
        specific custom automation project on the horizon, reach out to us at
        (866) PLC-GUYS. We&apos;re dedicated to supporting you from inception to
        completion, regardless of project size or complexity, because we&apos;re
        passionate about our work and proficient at what we do!
      </div>
    </div>
  );
}
