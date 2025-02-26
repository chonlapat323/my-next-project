"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function HomePage() {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  // ✅ ตรวจสอบขนาดหน้าจอ
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // ✅ ถ้าหน้าจอ < 768px ถือว่าเป็น Mobile
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ✅ รูปภาพสำหรับ Mobile และ PC
  const slides = isMobile
    ? ["/images/slides/orange_mobile.png", "/images/slides/orange_mobile.png", "/images/slides/orange_mobile.png"]
    : ["/images/slides/Or.png", "/images/slides/Or.png", "/images/slides/Or.png"];
  
  const products = [
    { id: 1, name: "Product A", price: "$19.99", image: "./images/slides/4.jpg" },
    { id: 2, name: "Product B", price: "$24.99", image: "./images/slides/5.jpg" },
    { id: 3, name: "Product C", price: "$29.99", image: "./images/slides/6.jpg" },
  ];

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full h-screen overflow-hidden"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      
      <div className="p-6">
        {/* Special Offers Section */}
        <div className="container mx-auto p-6 bg-yellow-100 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold text-gray-800">{t("special_offers", "home")}</h2>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
              <span className="text-lg font-semibold">{t("offer1", "home")}</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
              <span className="text-lg font-semibold">{t("offer2", "home")}</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
              <span className="text-lg font-semibold">{t("offer3", "home")}</span>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <h2 className="text-3xl font-bold text-center mt-8">{t("featured_products", "home")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <Link href={`/product/${product.id}`}>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Blog Section */}
        <div className="container mx-auto p-6 mt-12">
          <h2 className="text-3xl font-bold text-center">{t("blog_section", "home")}</h2>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog 1 */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{t("blog1_title", "home")}</h3>
              <p className="text-gray-600 mt-2">{t("blog1_desc", "home")}</p>
              <button className="mt-4 text-blue-600 hover:underline">
                Read More →
              </button>
            </div>

            {/* Blog 2 */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{t("blog2_title", "home")}</h3>
              <p className="text-gray-600 mt-2">{t("blog2_desc", "home")}</p>
              <button className="mt-4 text-blue-600 hover:underline">
                Read More →
              </button>
            </div>

            {/* Blog 3 */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{t("blog3_title", "home")}</h3>
              <p className="text-gray-600 mt-2">{t("blog3_desc", "home")}</p>
              <button className="mt-4 text-blue-600 hover:underline">
                Read More →
              </button>
            </div>
          </div>
          </div>

      </div>
    </div>
  );
}
