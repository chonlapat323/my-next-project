"use client";

import { createContext, useContext, useEffect, useState } from "react";
import enFooter from "@/locales/en/footer.json";
import enNavbar from "@/locales/en/navbar.json";
import enHome from "@/locales/en/home.json";
import enProduct from "@/locales/en/product.json";
import thFooter from "@/locales/th/footer.json";
import thNavbar from "@/locales/th/navbar.json";
import thHome from "@/locales/th/home.json";
import thProduct from "@/locales/th/product.json";
import zhFooter from "@/locales/zh/footer.json";
import zhNavbar from "@/locales/zh/navbar.json";
import zhHome from "@/locales/zh/home.json";
import zhProduct from "@/locales/zh/product.json";
import enBreadcrumb from "@/locales/en/breadcrumb.json";
import thBreadcrumb from "@/locales/th/breadcrumb.json";
import zhBreadcrumb from "@/locales/zh/breadcrumb.json";
import enBlog from "@/locales/en/blog.json";
import thBlog from "@/locales/th/blog.json";
import zhBlog from "@/locales/zh/blog.json";


const languages: any = {
  en: { navbar: enNavbar, home: enHome, product: enProduct, footer: enFooter,breadcrumb: enBreadcrumb, blog: enBlog },
  th: { navbar: thNavbar, home: thHome, product: thProduct, footer: thFooter,breadcrumb: thBreadcrumb, blog: thBlog },
  zh: { navbar: zhNavbar, home: zhHome, product: zhProduct, footer: zhFooter,breadcrumb: zhBreadcrumb, blog: zhBlog },
};

type LanguageContextType = {
  locale: string;
  setLocale: (lang: string) => void;
  t: (key: string, section: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<string | null>(null);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "en";
    setLocale(savedLocale);
  }, []);

  const changeLocale = (lang: string) => {
    setLocale(lang);
    localStorage.setItem("locale", lang);
  };

  const t = (key: string, section: string) =>
    locale ? languages[locale]?.[section]?.[key] || key : "";

  if (locale === null) {
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale: changeLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
