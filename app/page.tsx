"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Blog from "@/components/Blog";

export default function HomePage() {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ✅ Loading state

  // ✅ ตรวจสอบขนาดหน้าจอ
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  // ✅ โหลดภาพใหม่เมื่อขนาดหน้าจอเปลี่ยน
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // ให้เวลาโหลดเล็กน้อย
  }, [isMobile]);
  // ✅ รูปภาพสำหรับ Mobile และ PC
  const slides = isMobile
    ? ["/images/slides/coverm1.jpg", "/images/slides/coverm2.jpg", "/images/slides/coverm3.jpg"]
    : ["/images/slides/cover.jpg"];
  
  const products = [
    { id: 1, name: "Product A", price: "$19.99", image: "./images/slides/4.jpg" },
    { id: 2, name: "Product B", price: "$24.99", image: "./images/slides/5.jpg" },
    { id: 3, name: "Product C", price: "$29.99", image: "./images/slides/6.jpg" },
    { id: 4, name: "Product C", price: "$29.99", image: "./images/slides/6.jpg" },
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
        className="w-full h-[500px] max-h-[600px] min-h-[400px] overflow-hidden"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index} className="relative flex justify-center items-center">
            {/* ✅ แสดง Loading Spinner ถ้า isLoading เป็น true */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            )}

            {/* ✅ เมื่อรูปโหลดเสร็จ จะปิด Loading */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-bottom"
              onLoad={() => setIsLoading(false)} // ✅ ปิด Loading เมื่อรูปโหลดเสร็จ
            />
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
        <div className="flex flex-wrap justify-center gap-6 mt-6">
  {products.map((product) => (
    <div key={product.id} className="w-full sm:w-[350px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      {/* ✅ รูปสินค้า */}
      <a href="#">
        <img className="w-full h-64 object-cover rounded-t-lg" src={`/images/slides/${product.id}.jpg`} alt="product image" />
      </a>

      {/* ✅ รายละเอียดสินค้า */}
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>

        {/* ⭐⭐⭐⭐⭐ ส่วนของ Rating */}
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            ))}
            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            5.0
          </span>
        </div>

        {/* ✅ ราคา + ปุ่ม Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>



        {/* Blog Section */}
        <Blog />

      </div>
    </div>
  );
}
