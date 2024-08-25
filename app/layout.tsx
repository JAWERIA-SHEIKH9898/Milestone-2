import type { Metadata } from "next";
import Navbar from "./componets/navbar/page";
import Footer from "./components/footer/page";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/comp/navs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaweria Talib",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
