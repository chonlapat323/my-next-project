"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Vel expedita assumenda placeat aut nisi optio voluptates quas",
    date: "Mar 16, 2020",
    author: "Michael Foster",
    authorImage: "/images/authors/michael.jpg",
    image: "/images/blog/1.jpg",
  },
  {
    id: 2,
    title: "Libero quisquam voluptatibus nam iusto qui dolor",
    date: "Mar 10, 2020",
    author: "Lindsay Walton",
    authorImage: "/images/authors/lindsay.jpg",
    image: "/images/blog/2.jpg",
  },
  {
    id: 3,
    title: "Asperiores mollitia et dolor autem modi sit eius quisquam",
    date: "Feb 12, 2020",
    author: "Tom Cook",
    authorImage: "/images/authors/tom.jpg",
    image: "/images/blog/3.jpg",
  },
];

export default function Blog() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">{t("blogTitle", "blog")}</h2>
          <p className="text-gray-600 mt-2">{t("blogDescription", "blog")}</p>
        </div>

        {/* Blog List - เปลี่ยนเป็นแนวตั้ง */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="relative w-full aspect-[6/5]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-sm text-gray-500">
                    {post.date} &nbsp; • &nbsp; <span className="font-semibold">{post.author}</span>
                  </p>
                  <h3 className="text-lg font-semibold mt-2 text-gray-900">{post.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
