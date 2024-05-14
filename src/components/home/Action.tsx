import Image from "next/image";
import Link from "next/link";
import car1 from "@/assets/cartoon/car1.png";
import car2 from "@/assets/cartoon/car2.png";

export default function Action() {
  return (
    <main>
      <section className="bg-kpam-blue py-12">
        <div className="text-center">
          <h1 className="text-white text-4xl font-semibold">
            We accelerate manufacturers digital transformation & automation
          </h1>
          <h2 className="text-gray-100 text-2xl font-semibold">
            Addressing complex challenges through innovative automation
            strategies & solutions
          </h2>
        </div>
      </section>

      <section className="bg-kpam-blue py-8 flex justify-center items-center">
        <Image src={car2} alt="car2" className="overflow-auto w-full"  />
        <Image src={car1} alt="car1" className="overflow-auto w-full" />
      </section>
    </main>
  );
}
