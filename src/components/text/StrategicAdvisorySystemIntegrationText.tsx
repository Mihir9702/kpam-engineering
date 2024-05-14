import Image from "next/image";
import Content from "../Content";
import data from "@/helpers/content.json";
import imgSrc from '@/assets/stock/Strategic.jpg'

export default function StrategicAdvisorySystemIntegrationText() {
  return (
    <section className="bg-gray-100 flex justify-center items-start gap-8 py-16">
      <div className="max-w-2xl flex flex-col gap-8">
        {data.strategicAdvisorySystem.column.map((textContent) => (
          <Content
            key={textContent.title}
            title={textContent.title}
            content={textContent.content}
            headerSize="text-xl"
          />
        ))}
      </div>

      <Image src={imgSrc} alt="strategic-advisory-system-integration" />
    </section>
  );
}
