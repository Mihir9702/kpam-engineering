import Action from "@/components/home/Action";
import Blog from "@/components/home/Blog"
import Content from "@/components/home/Content";
import CTA from "@/components/home/CTA"
import Feature from "@/components/home/Feature"
import { AutomationSolutionsLink, ProductServicesLink } from "@/helpers/links";

export default function Home() {
  return (
    <main>
      <Action />
      <Feature />
      <Content
        title="Empowering your business for tomorrow"
        content="Thriving in the competitive manufacturing landscape necessitates
            heightened operational efficiency and enhanced productivity within
            your industrial processes. The path to achieving these goals lies in
            automation. However, embarking on this transformative journey
            requires a capable partner to guide you."
        cards={AutomationSolutionsLink}
      />
      <Content
        title="Crafting creative, personalized, cost-efficient automation solutions"
        content="Collaborate with our team of strategists, innovators, designers,
            and engineers to gain a competitive edge through tailored industrial 
            automation and control system solutions."
        cards={ProductServicesLink.slice(0, Math.floor(ProductServicesLink.length / 2))}
      />

      <Content
        title=""
        content=""
        cards={ProductServicesLink.slice(Math.floor(ProductServicesLink.length / 2))}
      />

      <Blog />

      <div className="py-8 bg-gray-100" />
      <CTA />
      <div className="py-8 bg-gray-100" />
    </main>
  );
}
