import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import StreamlinedScadaText from "@/components/text/StreamlinedScadaText";

export default function StreamlinedScada() {
  return (
    <main>
      <Navbar />
      <Header title="Streamlined SCADA Programming" />
      <StreamlinedScadaText />
      <Footer />
    </main>
  );
}
