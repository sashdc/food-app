import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khao",
  description: "A recipe generating app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar /> {children} 
      <Footer />
      </body>
    </html>
  );
}
