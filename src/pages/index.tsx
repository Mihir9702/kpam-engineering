import Action from "@/components/home/Action";
import Navbar from "@/components/Navbar";
import Content from "@/components/home/Content";
import CTA from "@/components/home/CTA"
import Feature from "@/components/home/Feature"
import Footer from "@/components/Footer"
import { cards, moreCards } from "@/helpers/getCards";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Action />
      <Feature />
      <Content
        title="Empowering your business for tomorrow"
        content="Thriving in the competitive manufacturing landscape necessitates
            heightened operational efficiency and enhanced productivity within
            your industrial processes. The path to achieving these goals lies in
            automation. However, embarking on this transformative journey
            requires a capable partner to guide you."
        cards={cards}
      />
      <Content
        title="Crafting creative, personalized, cost-efficient automation solutions"
        content="Collaborate with our team of strategists, innovators, designers,
            and engineers to gain a competitive edge through tailored industrial 
            automation and control system solutions."
        cards={moreCards}
      />

      <div className="py-8 border-2 bg-gray-100" />
      <CTA />
      <div className="py-8 border-2 bg-gray-100" />

      <Footer />
    </main>
  );
}
