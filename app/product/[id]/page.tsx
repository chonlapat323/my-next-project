"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
const products = [
  {
    id: 1,
    name: "Product A",
    price: "$19.99",
    description: "This is a great product.",
    image: "https://placehold.co/600x400?text=Product+A",
  },
  {
    id: 2,
    name: "Product B",
    price: "$24.99",
    description: "High quality and durable.",
    image: "https://placehold.co/600x400?text=Product+B",
  },
  {
    id: 3,
    name: "Product C",
    price: "$29.99",
    description: "Best seller of the year!",
    image: "https://placehold.co/600x400?text=Product+C",
  },
  {
    id: 4,
    name: "Product D",
    price: "$29.99",
    description: "Best seller of the year!",
    image: "https://placehold.co/600x400?text=Product+D",
  },
  {
    id: 5,
    name: "Product E",
    price: "$29.99",
    description: "Best seller of the year!",
    image: "https://placehold.co/600x400?text=Product+E",
  },
  {
    id: 6,
    name: "Product F",
    price: "$29.99",
    description: "Best seller of the year!",
    image: "https://placehold.co/600x400?text=Product+F",
  },
  {
    id: 7,
    name: "Product G",
    price: "$29.99",
    description: "Best seller of the year!",
    image: "https://placehold.co/600x400?text=Product+G",
  },
  {
    id: 8,
    name: "Product H",
    price: "$29.99",
    description: "Best seller of the year!",
    image: "https://placehold.co/600x400?text=Product+H",
  },
  {
    id: 9,
    name: "Product I",
    price: "$29.99",
    description: "Best seller of the year!",
    image: "https://placehold.co/600x400?text=Product+I",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (params?.id) {
      const foundProduct = products.find((p) => p.id.toString() === params.id);
      if (!foundProduct) {
        router.push("/404"); // ถ้าไม่มีสินค้าให้ไปหน้า 404
      } else {
        setProduct(foundProduct);
      }
    }
  }, [params?.id, router]);

  if (!product) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <Breadcrumb /> 
      <div className="pt-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-xl text-blue-600 font-semibold mt-2">{product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
