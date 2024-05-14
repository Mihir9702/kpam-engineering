import Image from "next/image";
import Link from "next/link";
import imgSrc from "@/assets/logo.png";
import { useState } from "react";
import { useRouter } from "next/router";
import { AutomationSolutionsLink, ProductServicesLink } from "@/helpers/links";
import ChevronUp from "@/assets/svg/chevron-up.svg";
import ChevronDown from "@/assets/svg/chevron-down.svg";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex bg-gray-100 text-gray-900 justify-around items-center py-12">
      <Image
        src={imgSrc}
        alt="logo"
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />

      <Links />
    </nav>
  );
}

function Links() {
  return (
    <ul className="flex justify-end gap-10 p-4 text-xl">
      <li className="hover:text-kpam-blue font-semibold">
        <Link href="/about">About</Link>
      </li>

      <AutomationSolutions />
      <ProductAndServices />

      <li className="hover:text-kpam-blue font-semibold">
        <Link href="/blog">Blog</Link>
      </li>

      <li className="hover:text-kpam-blue font-semibold">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}

function AutomationSolutions() {
  const [showAutomationSolutions, setShowAutomationSolutions] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center font-semibold"
          onClick={() => setShowAutomationSolutions(!showAutomationSolutions)}
        >
          Automation Solutions
          {showAutomationSolutions ? (
            <Image src={ChevronUp} alt="chevron-up-icon" />
          ) : (
            <Image src={ChevronDown} alt="chevron-down-icon" />
          )}
        </button>

        <div
          className={`${
            showAutomationSolutions ? "block" : "hidden"
          } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="p-1 py-2" role="none">
            {AutomationSolutionsLink.map((item, i) => (
              <Link key={item.title} href={item.href}>
                <li
                  className={`${
                    i % 2 !== 0 ? "bg-gray-200" : ""
                  } hover:bg-kpam-blue hover:text-white cursor-pointer block px-4 py-2 text-center text-sm`}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductAndServices() {
  const [showProductServices, setShowProductServices] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center font-semibold"
          onClick={() => setShowProductServices(!showProductServices)}
        >
          Product & Services
          {showProductServices ? (
            <Image src={ChevronUp} alt="chevron-up-icon" />
          ) : (
            <Image src={ChevronDown} alt="chevron-down-icon" />
          )}
        </button>

        <div
          className={`${
            showProductServices ? "block" : "hidden"
          } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="p-1 py-2" role="none">
            {ProductServicesLink.map((item, i) => (
              <Link key={item.title} href={item.href}>
                <li
                  className={`${
                    i % 2 !== 0 ? "bg-gray-200" : ""
                  } hover:bg-kpam-blue hover:text-white cursor-pointer block px-4 py-2 text-center text-sm`}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
