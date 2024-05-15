import Image from "next/image";
import System from "@/assets/cartoon/SCADA Control System.jpg";
import Computer from "@/assets/cartoon/SCADA Computer.jpg";
import Experience from "@/assets/cartoon/SCADA Experience.jpg";
import Innovation from "@/assets/cartoon/SCADA Innovation.png";
import Panel from "@/assets/cartoon/SCADA Panel.jpg";
import Content from "../Content";
import data from "@/helpers/content.json";

export default function StreamlinedScadaText() {
  return (
    <section>
      <div className="bg-gray-100 flex flex-col md:flex-row px-4 md:px-0 justify-center items-start gap-4 py-8">
        <LeftColumn />
        <RightColumn />
      </div>
      <Banner />
      <Advantages />
    </section>
  );
}

function LeftColumn() {
  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      {data.streamlinedScada.leftColumn.map((textContent) => (
          <Content
            key={textContent.title}
            title={textContent.title}
            content={textContent.content}
            headerSize="text-xl"
          />
        )
     )}

      <div>
        <div className="flex flex-col items-center gap-36 my-8">
          <Image src={System} alt="content-image" />
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
        {data.streamlinedScada.rightColumn.map((textContent) => (
          <Content
            key={textContent.title}
            title={textContent.title}
            content={textContent.content}
            headerSize="text-xl"
          />
        ))}
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

function Advantages() {
  return (
    <section className="bg-gray-100 flex flex-col md:flex-row justify-center py-8">
      <div className="max-w-2xl">
        {data.streamlinedScada.advantages.map((textContent) => (
          <Content
            key={textContent.title}
            title={textContent.title}
            content={textContent.content}
            headerSize="text-xl"
          />
        ))}
        Contact us at +1 267 949 5726.
      </div>
      <div>
        <div className="flex items-center">
          <Image src={Panel} alt="content-image" />
        </div>
      </div>
    </section>
  );
}
