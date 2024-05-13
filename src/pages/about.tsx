import Navbar from "@/components/Navbar";
import Image from "next/image";
import techGraphic from "@/../public/tech-graphic.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
  return (
    <main>
      <Navbar />

      <Header text="About Us" />

      <section className="bg-gray-100 border-2 flex gap-8 justify-center p-8 max-w-1/2">
        <div>
          <h1 className="text-kpam-light-blue text-3xl">KPAM ENGINEERING</h1>
          <br />
          <p className="max-w-lg text-md">
            KPAM Engineering is a team of strategists, inventors, designers, and
            engineers who provide expertise and leadership in various aspects of
            engineering and product development.
            <br />
            <br />
            We have the flexibility to expand our team as needed, and we
            collaborate with a network of trusted subcontractors to tap into
            specialized skills and resources. This allows us to deliver
            high-quality solutions across a wide range of engineering projects.
            <br />
            <br />
            Our core team is made up of experienced professionals with a deep
            understanding of the engineering field. We have a proven track
            record of success in a variety of industries, including:
            <br />
            <br />
            <ul className="list-disc">
              <li>Wide Web Paper Manufacturing</li>
              <li>Wide Web Paper Printer/Converting</li>
              <li>Wide Web Flexible Film Extrusion </li>
              <li>Wide Web Flexible Packaging</li>
              <li>Printing and Lamination</li>
              <li>Wide Web Flexible Packaging Converting</li>
              <li>Mid-Web Printing and Converting</li>
              <li>Plastics Extrusion</li>
              <li>Plastic</li>
              <li>Blown Films</li>
              <li>Plastic Casting</li>
              <li>Plastic Injection Molding</li>
              <li>Plastic Blow Molding</li>
              <li>Narrow Web Printing</li>
              <li>Narrow Web Converting</li>
              <li>Pharmaceutical Manufacturing</li>
              <li>Continuous Process Manufacturing</li>
            </ul>
            <br />
            <br />
            We are committed to providing our clients with the highest quality
            of service. We understand that every project is unique, and we work
            closely with our clients to develop customized solutions that meet
            their specific needs.
            <br />
            <br />
            If you are looking for a team of experienced and dedicated
            engineers, KPAM Engineering is the right choice for you. Contact us
            today to learn more about our services.
          </p>
        </div>
        <Image className="w-1/5 h-max" src={techGraphic} alt="tech-graphic" />
      </section>

      <Footer />
    </main>
  );
}
