import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store";

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />;
        <Footer />
      </Provider>
    </main>
  );
}
