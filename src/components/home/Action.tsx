import Image from "next/image";
import car1 from "@/../public/car1.png";
import car2 from "@/../public/car2.png";
import Link from "next/link";

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
        <Image src={car1} alt="car1" />
        <Link href="/contact">
        </Link>
        <Image src={car2} alt="car2" />
      </section>
    </main>
  );
}
