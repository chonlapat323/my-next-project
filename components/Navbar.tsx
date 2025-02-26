"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react"; // ใช้ไอคอน Globe สำหรับเปลี่ยนภาษา

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage(); // ✅ ดึง t() มาจาก context

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* โลโก้ */}
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-gray-300">
          My Next App
        </Link>

        {/* ปุ่มเปิดเมนูบนมือถือ */}
        <button className="md:hidden text-gray-300 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* เมนู Navigation */}
        <ul className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block md:items-center`}>
          <li><Link href="/" className="hover:text-gray-400">{t("home", "navbar")}</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">{t("about", "navbar")}</Link></li>
          <li><Link href="/product" className="hover:text-gray-400">{t("product", "navbar")}</Link></li>

          {/* ปุ่มเปลี่ยนภาษา */}
          <li className="relative">
            <button
              className="p-2 rounded-full hover:bg-gray-700 transition flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Globe className="w-6 h-6" />
            </button>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-24 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                <li>
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
                    onClick={() => { setLocale("en"); setDropdownOpen(false); }}
                  >
                    🇺🇸
                  </button>
                </li>
                <li>
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
                    onClick={() => { setLocale("th"); setDropdownOpen(false); }}
                  >
                    🇹🇭
                  </button>
                </li>
                <li>
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
                    onClick={() => { setLocale("zh"); setDropdownOpen(false); }}
                  >
                    🇨🇳
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
