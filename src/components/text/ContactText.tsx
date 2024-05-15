import { useState } from "react";

export default function ContactText() {
  return (
    <section className="bg-gray-100 py-8" id="contact">
        <ContactTitle />
        <div className="flex items-stretch justify-center p-2">
          <div className="grid md:grid-cols-2">
            <div className="h-full">
              <p className="mb-6 md:text-lg text-center md:text-left max-w-lg">
                We value your feedback and inquiries. Please feel free to reach
                out to us using any of the methods below. Our dedicated team is
                here to assist you.
              </p>

              <ContactInfo />
            </div>

            <ContactForm />
          </div>
        </div>
    </section>
  );
}

function ContactTitle() {
  return (
    <div className="mb-4">
      <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
        <h2 className="font-heading mb-4 font-bold tracking-tight text-kpam-blue text-3xl sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
          Looking for assistance? We&apos;re here to help
        </p>
      </div>
    </div>
  );
}

function ContactForm() {
  const info = { name: "", email: "", phone: "", company: "", message: "" };
  const [data, setData] = useState<Contact>(info);
  const url = process.env.EMAIL_SCRIPT_API || "";

  const handleSubmit = (e: any) => {
    e.preventDefault();

    try {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json)
        .then((data) => console.log(data));
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <div className="card h-fit max-w-6xl" id="form">
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="mx-0 mb-1 sm:mb-4">
            <div className="mx-0 mb-1 sm:mb-4">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-kpam-blue outline-kpam-blue sm:mb-0"
                name="name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <input
                type="text"
                id="company"
                placeholder="Company"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-kpam-blue outline-kpam-blue sm:mb-0"
                name="company"
                onChange={(e) => setData({ ...data, company: e.target.value })}
              />
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-kpam-blue outline-kpam-blue sm:mb-0"
                name="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <input
                type="tel"
                id="phone"
                autoComplete="phone"
                placeholder="Phone"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-kpam-blue outline-kpam-blue sm:mb-0"
                name="phone"
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <textarea
              id="textarea"
              name="textarea"
              cols={30}
              rows={5}
              placeholder="Write your message..."
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-kpam-blue outline-kpam-blue sm:mb-0"
              onChange={(e) => setData({ ...data, message: e.target.value })}
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-kpam-blue hover:bg-kpam-blue-o transition-all text-gray-100 px-6 py-3 font-xl rounded-md sm:mb-0"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

function ContactInfo() {
  return (
    <ul>
      <li className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded bg-kpam-blue text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6"
          >
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
          </svg>
        </div>
        <div className="ml-4 mb-4">
          <h3 className="mb-2 text-lg font-medium leading-6 text-kpam-blue">
            Our Address
          </h3>
          <p>94 County Line Rd, Ste B</p>
          <p>Colmar, PA 18915</p>
        </div>
      </li>
      <li className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded bg-kpam-blue text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6"
          >
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
            <path d="M15 7a2 2 0 0 1 2 2"></path>
            <path d="M15 3a6 6 0 0 1 6 6"></path>
          </svg>
        </div>
        <div className="ml-4 mb-4">
          <h3 className="mb-2 text-lg font-medium leading-6 text-kpam-blue">
            Contact
          </h3>
          <p>Mobile: +1 (267) 949 5726</p>
          <p>Mail: info@kpameng.com</p>

          {/* <div>Mobile: <Link href="tel:+12679495726" className="text-blue-500">+1 (267) 949-5726</Link></div>
          <div>Mail: <Link href="mailto:info@kpameng.com" className="text-blue-500">info@kpameng.com</Link></div> */}
        </div>
      </li>
      <li className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded bg-kpam-blue text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6"
          >
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M12 7v5l3 3"></path>
          </svg>
        </div>
        <div className="ml-4 mb-4">
          <h3 className="mb-2 text-lg font-medium leading-6 text-kpam-blue">
            Working hours
          </h3>
          <p>Monday - Friday: 08:00 - 17:00</p>
          <p>Saturday &amp; Sunday: 08:00 - 12:00</p>
        </div>
      </li>
    </ul>
  );
}
