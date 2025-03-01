import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";


import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "700", "900"] });
export const metadata = {
  title: "My Next App",
  description: "A modern Next.js App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <LanguageProvider>
          <Navbar />
          <main className="pt-[64px] md:pt-[64px] container mx-auto">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
