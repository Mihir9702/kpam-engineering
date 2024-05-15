import Image from "next/image";
import Link from "next/link";
import imgSrc from "@/assets/logo.png";
import { useState } from "react";
import { useRouter } from "next/router";
import { AutomationSolutionsLink, ProductServicesLink } from "@/helpers/links";
import ChevronUp from "@/assets/svg/chevron-up.svg";
import ChevronDown from "@/assets/svg/chevron-down.svg";
import Menu from "@/assets/svg/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleAutomation, toggleProduct } from "@/navbarSlice";
import OutsideClickDetector from "./OutsideClickDetector";

export default function Navbar() {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex bg-gray-100 text-gray-900 justify-between lg:justify-around px-4 lg:px-0 items-center py-2">
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
  const toggles = useSelector((state: any) => state.navbar);
  const dispatch = useDispatch();

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center font-semibold"
          onClick={() => dispatch(toggleAutomation())}
        >
          Automation Solutions
          {toggles.automation ? (
            <Image src={ChevronUp} alt="chevron-up-icon" />
          ) : (
            <Image src={ChevronDown} alt="chevron-down-icon" />
          )}
        </button>

        {toggles.automation && (
          <OutsideClickDetector
            onOutsideClick={() => dispatch(toggleAutomation())}
          >
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
          </OutsideClickDetector>
        )}
      </div>
    </div>
  );
}

function ProductAndServices() {
  const toggles = useSelector((state: any) => state.navbar);
  const dispatch = useDispatch();

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center font-semibold"
          onClick={() => dispatch(toggleProduct())}
        >
          Product & Services
          {toggles.product ? (
            <Image src={ChevronUp} alt="chevron-up-icon" />
          ) : (
            <Image src={ChevronDown} alt="chevron-down-icon" />
          )}
        </button>

        {toggles.product && (
          <OutsideClickDetector
            onOutsideClick={() => dispatch(toggleProduct())}
          >
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
          </OutsideClickDetector>
        )}
      </div>
    </div>
  );
}
function MobileNavView() {
  const dispatch = useDispatch();
  const toggles = useSelector((state: any) => state.navbar);

  return (
    <div
      className={`absolute top-24 right-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
    >
      <div className={`p-1 py-2`} role="none">
        <Link href="/about">
          <li className="cursor-pointer block px-4 py-2 text-center text-sm">
            About
          </li>
        </Link>
        <li
          onClick={() => dispatch(toggleAutomation())}
          className="cursor-pointer block px-4 py-2 text-center text-sm bg-gray-100"
        >
          Automation Solutions
        </li>
        {toggles.automation &&
          AutomationSolutionsLink.map((link, i) => (
            <Link href={link.href} title={link.title} key={link.title}>
              <li
                className={`${
                  i % 2 == 0 ? "bg-white" : "bg-gray-200"
                } cursor-pointer block px-4 py-2 text-center text-sm`}
              >
                {link.title}
              </li>
            </Link>
          ))}
        <li
          onClick={() => dispatch(toggleProduct())}
          className="cursor-pointer block px-4 py-2 text-center text-sm"
        >
          Product & Services
        </li>
        {toggles.product &&
          ProductServicesLink.map((link, i) => (
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
