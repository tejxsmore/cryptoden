import "./globals.css";

import Navbar from "../app/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Web3Modal, Web3ModalProvider } from "../context/Web3Modal";

export const metadata = {
  title: "Cryptoden",
  description: "World's most accurate crypto transaction plaform ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Web3ModalProvider>
            <Navbar />
            {children}
          </Web3ModalProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
