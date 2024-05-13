export default function CTA() {
  // Call To Action
  return (
    <main className="cta text-center flex flex-col gap-6 py-8 text-gray-100">
      <h2 className="font-semibold text-xl">
        How can we help you? <br />
        Ready to talk about your project?
      </h2>

      <div className="font-semibold text-lg">
        At Kpam Engineering, we come to work every day with the same goal - to
        provide our customers with the very best.
        <br />
        <p className="font-bold text-lg">
          Throw us a problem you can&apos;t solve. We love a challenge!
        </p>
      </div>

      <button className="uppercase bg-kpam-light-blue hover:bg-kpam-light-blue-o transition-all w-fit mx-auto rounded-md px-8 p-3">
        Get in touch
      </button>
    </main>
  );
}
