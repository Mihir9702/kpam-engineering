import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { useState } from "react";
import { cards, moreCards } from "@/helpers/getCards";
import { useRouter } from "next/router";

export default function Navbar() {
  const [showAutomationSolutions, setShowAutomationSolutions] = useState(false);
  const [showProductServices, setShowProductServices] = useState(false);

  const router = useRouter();
  return (
    <nav className="flex bg-gray-100 justify-around items-center py-12">
      <Image src={logo} alt="logo" onClick={() => router.push("/")} />
      <ul className="flex justify-end gap-10 p-4 text-xl">
        <li className="hover:text-kpam-blue">
          <Link href="/about">About</Link>
        </li>
        <li onMouseOver={() => setShowAutomationSolutions(true)}>
          <p
            className={`${
              showAutomationSolutions && "text-kpam-blue"
            } cursor-pointer`}
          >
            Automation Solutions
          </p>
          {showAutomationSolutions && (
            <ul
              onMouseOut={() => setShowAutomationSolutions(false)}
              className="absolute flex flex-col 
                gap-1 my-1 z-10 bg-gray-100 border-2 border-kpam-blue
                text-[16px] max-w-[200px] text-center rounded-lg"
            >
              {cards.map((card, i) => (
                <Link key={card.title} href={card.href}>
                  <li
                    className={`${
                      i % 2 !== 0 ? "bg-gray-200" : ""
                    } hover:bg-kpam-blue hover:text-white cursor-pointer`}
                  >
                    {card.title}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </li>
        <li onMouseOver={() => setShowProductServices(true)}>
          <p
            className={`${
              showProductServices && "text-kpam-blue"
            } cursor-pointer`}
          >
            Product & Services
          </p>
          {showProductServices && (
            <ul
              onMouseOut={() => setShowProductServices(false)}
              className="absolute flex flex-col 
                gap-1 my-1 z-10 bg-gray-100 border-2 border-kpam-blue
                text-[16px] max-w-[200px] text-center rounded-lg"
            >
              {moreCards.map((card, i) => (
                <Link key={card.title} href={card.href}>
                  <li
                    className={`${
                      i % 2 !== 0 ? "bg-gray-200" : ""
                    } hover:bg-kpam-blue hover:text-white cursor-pointer`}
                  >
                    {card.title}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </li>

        <li className="hover:text-kpam-blue">
          <Link href="">Blog</Link>
        </li>

        <li className="hover:text-kpam-blue">
          <Link href="">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
