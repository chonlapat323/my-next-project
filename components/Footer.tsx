"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
    console.log(t("home", "footer"))
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold">{t("about_us", "footer")}</h3>
          <p className="text-gray-400 mt-2">{t("about_desc", "footer")}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">{t("quick_links", "footer")}</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/" className="flex items-center text-gray-400 hover:text-white">🏠 {t("home", "footer")}</Link></li>
            <li><Link href="/product" className="flex items-center text-gray-400 hover:text-white">🛍️ {t("products", "footer")}</Link></li>
            <li><Link href="/about" className="flex items-center text-gray-400 hover:text-white">📄 {t("about", "footer")}</Link></li>
            <li><Link href="/contact" className="flex items-center text-gray-400 hover:text-white">📞 {t("contact", "footer")}</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold">{t("contact_us", "footer")}</h3>
          <p className="flex items-center text-gray-400 mt-2">📧 {t("email", "footer")}: support@example.com</p>
          <p className="flex items-center text-gray-400">📞 {t("phone", "footer")}: +66 123 456 789</p>
          <p className="flex items-center text-gray-400">📍 {t("address", "footer")}: Bangkok, Thailand</p>
        </div>
      </div>

      {/* Follow Us */}
      <div className="bg-gray-800 text-center py-4 mt-6">
        <h3 className="text-lg font-bold">{t("follow_us", "footer")}</h3>
        <div className="mt-2 flex justify-center space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white">📘 Facebook</Link>
          <Link href="#" className="text-gray-400 hover:text-white">📷 Instagram</Link>
          <Link href="#" className="text-gray-400 hover:text-white">🐦 Twitter</Link>
        </div>
        <p className="text-gray-500 mt-2 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
}
