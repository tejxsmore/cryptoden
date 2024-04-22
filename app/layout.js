import "./globals.css";
import { GeistSans } from "geist/font/sans";

import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Web3ModalProvider } from "../context/Web3Modal";

export const metadata = {
  title: "Cryptoden",
  description: "World's most accurate crypto transaction plaform ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={GeistSans.className}>
        <body>
          <Web3ModalProvider>
            <Navbar />
            {children}
            <Footer />
          </Web3ModalProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
