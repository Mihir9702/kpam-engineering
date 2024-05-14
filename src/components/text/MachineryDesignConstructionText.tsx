import Content from "../Content";
import Image from "next/image";
import data from "@/helpers/content.json";
import imgSrc from "@/../assets/Machinery Design and Construction.jpg";

export default function MachineryDesignConstructionText() {
  return (
    <section className="bg-gray-100 flex justify-center items-start gap-8 py-16">
      <div className="max-w-2xl flex flex-col gap-8">
        {data.machineryDesignConstruction.content.map((item) => (
          <Content
            key={item.title}
            title={item.title}
            content={item.content}
            headerSize="text-xl"
          />
        ))}
      </div>

      <Image src={imgSrc} alt="machinery-design-and-construction" />
    </section>
  );
}
