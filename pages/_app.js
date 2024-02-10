import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`max-w-3xl mx-auto my-4 ${inter.className}`}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>

  )
}
