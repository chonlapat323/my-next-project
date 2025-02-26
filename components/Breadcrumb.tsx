"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Home, ChevronRight } from "lucide-react"; // ✅ ใช้ไอคอนจาก Lucide

export default function Breadcrumb() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <nav className="bg-gray-100 px-4 py-3 rounded-md shadow-sm">
      <div className="container mx-auto">
        <ul className="flex items-center space-x-3">
          {/* ✅ Home Icon */}
          <li>
            <Link href="/" className="flex items-center text-gray-700 hover:text-blue-600">
              <Home className="w-5 h-5 mr-1" /> {t("home", "breadcrumb")}
            </Link>
          </li>
          {pathParts.map((part, index) => {
            const href = "/" + pathParts.slice(0, index + 1).join("/");
            const translatedPart = t(part, "breadcrumb");

            return (
              <li key={href} className="flex items-center">
                <ChevronRight className="w-5 h-5 text-gray-500" />
                {index === pathParts.length - 1 ? (
                  <span className="ml-2 text-gray-900 font-semibold">{translatedPart}</span>
                ) : (
                  <Link href={href} className="ml-2 text-gray-700 hover:text-blue-600">
                    {translatedPart}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
