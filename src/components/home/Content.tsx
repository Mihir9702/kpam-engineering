import Card from "./Card";

export default function Content({ title, content, cards }: Content) {
  return (
    <main className="">
      <section className="bg-gray-100 text-center py-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-kpam-blue mt-8 text-3xl font-semibold uppercase">
            {title}
          </h1>
          <h2 className="font-light text-gray-950 text-xl max-w-4xl mx-auto">
            {content}
          </h2>
        </div>
      </section>
      <section className="flex flex-col md:flex-row w-full bg-gray-100 justify-center gap-8 p-8">
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            href={card.href}
            src={card.src}
            alt={card.alt}
          />
        ))}
      </section>
    </main>
  );
}
