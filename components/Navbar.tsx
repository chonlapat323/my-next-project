"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Search, User, ShoppingBag, Globe, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ ควบคุมเมนู
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
//flex-1 flex space-x-8 text-gray-800 font-medium ml-10
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <button
          className="md:hidden w-6 h-6 text-gray-800 hover:text-gray-500 transition"
          onClick={() => setMenuOpen(true)}
        >
          <Menu />
        </button>

        <Link href="/" className="text-2xl font-bold tracking-wide">
          Chair
        </Link>
        <ul className="hidden flex-1 flex ml-10 md:flex space-x-8 text-gray-800 font-medium">
          <li><Link href="/product" className="hover:text-gray-500 transition">{t("product", "navbar")}</Link></li>
          <li><Link href="/about" className="hover:text-gray-500 transition">{t("about", "navbar")}</Link></li>
          <li><Link href="/contacts" className="hover:text-gray-500 transition">{t("contact", "navbar")}</Link></li>
        </ul>

        <div className="flex items-center space-x-6 relative">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-full w-0 p-2 border rounded-lg text-gray-800 transition-all duration-300 bg-white shadow-md
                ${searchOpen ? "w-64 opacity-100 scale-100 px-4 py-2" : "opacity-0 scale-95 pointer-events-none"}`}
            />
            <button
              className="w-6 h-6 text-gray-800 hover:text-gray-500 transition"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search />
            </button>
          </div>

          <button className="w-6 h-6 text-gray-800 hover:text-gray-500 transition">
            <User />
          </button>

          <button className="w-6 h-6 text-gray-800 hover:text-gray-500 transition">
            <ShoppingBag />
          </button>

          <div className="relative">
          <button
            className="flex items-center space-x-1 hover:text-gray-500 transition"
            onClick={() => setLangMenuOpen(!langMenuOpen)}
          >
            <Globe className="w-4 h-4" />
            <span className="w-10 text-center">{locale.toUpperCase()}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
            {langMenuOpen && (
              <ul className="absolute right-0 mt-2 w-24 bg-white text-gray-800 rounded-lg shadow-lg border">
                <li>
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
                    onClick={() => { setLocale("en"); setLangMenuOpen(false); }}
                  >
                    🇺🇸
                  </button>
                </li>
                <li>
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
                    onClick={() => { setLocale("th"); setLangMenuOpen(false); }}
                  >
                    🇹🇭
                  </button>
                </li>
                <li>
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
                    onClick={() => { setLocale("zh"); setLangMenuOpen(false); }}
                  >
                    🇨🇳
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-6 right-6 text-gray-800 hover:text-gray-500" onClick={() => setMenuOpen(false)}>
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col mt-16 space-y-6 text-gray-900 font-medium px-6">
          <Link href="/product" className="text-lg hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>
            {t("product", "navbar")}
          </Link>
          <Link href="/about" className="text-lg hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>
            {t("about", "navbar")}
          </Link>
          <Link href="/contacts" className="text-lg hover:text-gray-500 transition" onClick={() => setMenuOpen(false)}>
            {t("contact", "navbar")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
