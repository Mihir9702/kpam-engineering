import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import AutomationTransformation from '@/../public/AUTOMATION TRANSFORMATION.jpg'
import Image from "next/image"
import Footer from "@/components/Footer"

export default function DigitalAutomationTransformation() {
  return (
    <main>
      <Navbar />
      <Header text="Digital Automation Transformation" />

      <section className="bg-gray-100 flex justify-center items-start p-8 gap-4">
        <div className="flex flex-col gap-8 items-center">

        <h1 className="text-kpam-blue font-semibold text-3xl uppercase">
          Digital Automation Equipment
        </h1>

        <div>
          <h1 className="text-kpam-blue font-semibold text-lg max-w-lg uppercase">
            Transforming Your Requirements into Tailored Automation Systems
          </h1>
          <p className="max-w-lg">
            In today&apos;s dynamic global manufacturing landscape, innovative
            solutions are essential to address your unique business challenges
            while enhancing your competitive edge. Our expertise spans from
            simple to intricate machine solutions, designed to provide you with
            cost-effective and reliable custom automation equipment that
            bolsters your operational efficiency, profitability, and safety
            goals. Quite often, the solution might pleasantly surprise you.
          </p>
        </div>

        <div>
          <h1 className="text-kpam-blue font-semibold text-xl max-w-lg uppercase">
            A Collaborative Approach to Achieving Automation Success
          </h1>
          <p className="max-w-lg">
            At Kpam Engineering, we take pride in our ability to think beyond
            the ordinary, enabling our clients to outshine their competition.
            Blending unparalleled technical knowledge with a creative mindset
            has become synonymous with our reputation. Our aim is not only to
            employ innovative problem-solving skills to overcome challenges but
            also to leverage our proficiency in custom machine design and
            construction to unearth new automation prospects where repetitive
            processes prevail or human intervention has been the norm.
          </p>
          <br />
          <p className="max-w-lg">
            We&apos;ve partnered with a diverse array of businesses, ranging
            from highly automated enterprises using custom machinery to those
            new to automation seeking step-by-step guidance. Regardless of where
            your company stands on the automation spectrum, our 15+ years of
            experience in consulting, concept development, prototyping, design,
            and integration empowers us to provide the talent and resources
            needed to customize a contemporary solution that aligns perfectly
            with your requirements.
          </p>
        </div>

        </div>
        <Image src={AutomationTransformation} alt="" />
      </section>

      <Footer />
    </main>
  );
}
