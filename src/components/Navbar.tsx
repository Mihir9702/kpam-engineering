import Image from "next/image";
import Link from "next/link";
import imgSrc from "@/assets/logo.png";
import { useState } from "react";
import { useRouter } from "next/router";
import { AutomationSolutionsLink, ProductServicesLink } from "@/helpers/links";
import ChevronUp from "@/assets/svg/chevron-up.svg";
import ChevronDown from "@/assets/svg/chevron-down.svg";
import Menu from "@/assets/svg/menu.svg";

export default function Navbar() {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex bg-gray-100 text-gray-900 justify-between lg:justify-around px-4 lg:px-0 items-center py-12">
      <Image
        src={imgSrc}
        alt="logo"
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />

      <Image
        src={Menu}
        alt="menu-icon"
        className="lg:hidden"
        onClick={() => setToggleMenu(!toggleMenu)}
      />
      {toggleMenu && <MobileNavView />}
      <Links />
    </nav>
  );
}

function Links() {
  return (
    <ul className="hidden lg:flex justify-end gap-10 p-4 text-xl">
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
function MobileNavView() {
  const [toggleAutomation, setToggleAutomation] = useState(false);
  const [toggleProduct, setToggleProduct] = useState(false);

  return (
    <div
      className={`absolute top-24 right-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
    >
      <div className={`p-1 py-2 `} role="none">
        <Link href="/about">
          <li className="cursor-pointer block px-4 py-2 text-center text-sm">
            About
          </li>
        </Link>
        <li
          onClick={() => setToggleAutomation(!toggleAutomation)}
          className="cursor-pointer block px-4 py-2 text-center text-sm bg-gray-100"
        >
          Automation Solutions
        </li>
        {toggleAutomation && AutomationSolutionsLink.map((link, i) => (
          <Link href={link.href} title={link.title} key={link.title}>
            <li className={`${i % 2 == 0 ? 'bg-white' : 'bg-gray-200'} cursor-pointer block px-4 py-2 text-center text-sm`}>
              {link.title}
            </li>
          </Link>
        ))}
        <li
          onClick={() => setToggleProduct(!toggleProduct)}
          className="cursor-pointer block px-4 py-2 text-center text-sm"
        >
          Product & Services
        </li>
        {toggleProduct && ProductServicesLink.map((link, i) => (
          <Link href={link.href} title={link.title} key={link.title}>
            <li className="cursor-pointer block px-4 py-2 text-center text-sm">
              {link.title}
            </li>
          </Link>
        ))}
        <Link href="/blog">
          <li className="cursor-pointer block px-4 py-2 text-center text-sm">
            Blog
          </li>
        </Link>
        <Link href="/contact">
          <li className="cursor-pointer block px-4 py-2 text-center text-sm">
            Contact
          </li>
        </Link>
      </div>
    </div>
  );
}
