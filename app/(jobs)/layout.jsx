import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "../_components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <div className={`${poppins.variable}  antialiased`}>
      <Navbar />
      <main className="pt-20">

        {children}
      </main>
    </div>
  );
}
