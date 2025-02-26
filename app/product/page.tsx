import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Product A",
    price: "$19.99",
    image: "https://placehold.co/300x200?text=Product+A",
  },
  {
    id: 2,
    name: "Product B",
    price: "$24.99",
    image: "https://placehold.co/300x200?text=Product+B",
  },
  {
    id: 3,
    name: "Product C",
    price: "$29.99",
    image: "https://placehold.co/300x200?text=Product+C",
  },
  {
    id: 4,
    name: "Product D",
    price: "$29.99",
    image: "https://placehold.co/300x200?text=Product+D",
  },
  {
    id: 5,
    name: "Product E",
    price: "$29.99",
    image: "https://placehold.co/300x200?text=Product+E",
  },
  {
    id: 6,
    name: "Product F",
    price: "$29.99",
    image: "https://placehold.co/300x200?text=Product+F",
  },
  {
    id: 7,
    name: "Product G",
    price: "$29.99",
    image: "https://placehold.co/300x200?text=Product+G",
  },
  {
    id: 8,
    name: "Product H",
    price: "$29.99",
    image: "https://placehold.co/300x200?text=Product+H",
  },
  {
    id: 9,
    name: "Product I",
    price: "$29.99",
    image: "https://placehold.co/300x200?text=Product+I",
  },
];

export default function ProductPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <Link href={`/product/${product.id}`}>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
