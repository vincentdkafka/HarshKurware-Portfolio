import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
});

export const metadata = {
  title: "Harsh Kurware - Portfolio",
  description: "Dev by day, designer by night—basically Batman with a laptop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
