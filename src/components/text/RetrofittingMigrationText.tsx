import data from "@/helpers/content.json";
import Content from "../Content";
import Image from "next/image";
import AutomationUpgradingSrc from "@/assets/stock/Automation Upgrading.jpg";
import AutomationImprovementSrc from "@/assets/cartoon/Automation Improvement.png";

export default function RetrofittingMigrationText() {
  return (
    <section>
      <div className="bg-gray-100 px-3 md:px-0 flex flex-col md:flex-row items-start justify-center gap-4 py-16">
        <div className="max-w-2xl flex flex-col gap-8">
          <Content
            title={data.retrofittingMigration.title.title}
            content={data.retrofittingMigration.title.content}
            headerSize="text-2xl"
          />
          <Image src={AutomationImprovementSrc} alt="automation-improvement" />
          <Content
            title={data.retrofittingMigration.description.title}
            content={data.retrofittingMigration.description.content}
            headerSize="text-xl"
          />
        </div>

        <div>
          <Image src={AutomationUpgradingSrc} alt="automation-upgrading" />
          <div className="max-w-xl mt-8 flex flex-col gap-8">

          {data.retrofittingMigration.benefits.map((textContent) => (
            <Content
              key={textContent.title}
              title={textContent.title}
              content={textContent.content}
              headerSize="text-xl"
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
