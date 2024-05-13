import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <Header title="Contact Us" />

      <ContactUs />

      {/* <section className="bg-gray-100 flex flex-col items-center">
        <h1>Any assistance or question? We would be happy to talk to you.</h1>

        <ul>
          <li>A: 94 County Line Rd, Ste B, Colmar, PA 18915</li>
          <li>T: +1 267 949 5726</li>
          <li>E: info@kpameng.com</li>
        </ul>

        <form className="bg-kpam-blue p-8 w-1/2 flex flex-col items-center gap-8 rounded-lg shadow-lg">
          <h1 className="text-xl text-gray-100 font-semibold">
            Fill out this form and we will get back to you ASAP
          </h1>

          <div className="flex flex-col items-center gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="bg-gray-100 p-2 text-kpam-blue outline-none rounded-md font-medium"
                placeholder="Name"
              />
              <input
                type="text"
                className="bg-gray-100 p-2 text-kpam-blue outline-none rounded-md font-medium"
                placeholder="Company"
              />
              <input
                type="text"
                className="bg-gray-100 p-2 text-kpam-blue outline-none rounded-md font-medium"
                placeholder="Email"
              />
              <input
                type="text"
                className="bg-gray-100 p-2 text-kpam-blue outline-none rounded-md font-medium"
                placeholder="Phone Number"
              />
            </div>
            <textarea
              className="bg-gray-100 p-2 text-kpam-blue outline-none w-full rounded-md font-medium"
              placeholder="Message"
            ></textarea>
          </div>
        </form>
      </section> */}

      <div className="bg-gray-100 py-8" />
      <Footer />
    </main>
  );
}
