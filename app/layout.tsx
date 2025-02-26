import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "My Next App",
  description: "A modern Next.js App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="pt-[64px] md:pt-[72px] container mx-auto">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
