"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // ✅ ตรวจสอบ path ปัจจุบัน
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname(); // ✅ ตรวจสอบหน้าเว็บปัจจุบัน

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-screen z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* โลโก้ */}
        <Link href="/" className="flex items-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          <span className="text-blue-600 dark:text-white">Flowbite</span>
        </Link>

        {/* ปุ่มเปิด/ปิดเมนูบนมือถือ */}
        <button 
          className="md:hidden text-gray-500 dark:text-gray-400 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* ✅ เมนูหลัก */}
        <div className={`w-full md:w-auto md:flex ${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 bg-white md:bg-transparent border md:border-0 rounded-lg shadow-md md:shadow-none p-4 md:p-0">
            {/** ✅ ใช้ min-w-[120px] และ border-transparent เพื่อป้องกันขนาดเปลี่ยน */}
            <li className="min-w-[120px] flex justify-center">
              <Link 
                href="/" 
                className={`block px-6 py-2 text-center font-semibold border-2 rounded-lg transition-all duration-200 ${
                  pathname === "/" ? "bg-blue-500 text-white border-blue-500" : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent border-transparent"
                }`} 
                onClick={() => setIsOpen(false)}
              >
                {t("home", "navbar")}
              </Link>
            </li>
            <li className="min-w-[120px] flex justify-center">
              <Link 
                href="/about" 
                className={`block px-6 py-2 text-center font-semibold border-2 rounded-lg transition-all duration-200 ${
                  pathname === "/about" ? "bg-blue-500 text-white border-blue-500" : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent border-transparent"
                }`} 
                onClick={() => setIsOpen(false)}
              >
                {t("about", "navbar")}
              </Link>
            </li>
            <li className="min-w-[120px] flex justify-center">
              <Link 
                href="/product" 
                className={`block px-6 py-2 text-center font-semibold border-2 rounded-lg transition-all duration-200 ${
                  pathname === "/product" ? "bg-blue-500 text-white border-blue-500" : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent border-transparent"
                }`} 
                onClick={() => setIsOpen(false)}
              >
                {t("product", "navbar")}
              </Link>
            </li>

            {/* ✅ ปุ่มเปลี่ยนภาษา */}
            <li className="relative">
              <button 
                className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent px-4 py-2 rounded-lg" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Globe className="w-5 h-5 mr-2" />
                {locale.toUpperCase()}
              </button>

              {/* ✅ Dropdown ภาษา */}
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg z-50">
                  <li>
                    <button 
                      className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center"
                      onClick={() => { 
                        setLocale("en"); 
                        setDropdownOpen(false); 
                        setIsOpen(false); 
                      }}
                    >
                      🇺🇸 English
                    </button>
                  </li>
                  <li>
                    <button 
                      className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center"
                      onClick={() => { 
                        setLocale("th"); 
                        setDropdownOpen(false); 
                        setIsOpen(false); 
                      }}
                    >
                      🇹🇭 ไทย
                    </button>
                  </li>
                  <li>
                    <button 
                      className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center"
                      onClick={() => { 
                        setLocale("zh"); 
                        setDropdownOpen(false); 
                        setIsOpen(false); 
                      }}
                    >
                      🇨🇳 中文
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
