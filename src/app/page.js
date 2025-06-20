'use client';
import Image from 'next/image';
import { StarIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Vintage Leather Backpack',
    brand: 'Nomad Gear',
    price: '₹3,499',
    rating: 4.5,
    reviews: 120,
    image:
      'https://images.unsplash.com/photo-1549943872-f7ff0b2b51be?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Modern Wooden Chair',
    brand: 'Haus',
    price: '₹2,199',
    rating: 4.2,
    reviews: 86,
    image:
      'https://images.unsplash.com/photo-1705155472131-134f4b7403ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
  },
  {
    id: 3,
    name: 'Wireless Over-Ear Headphones',
    brand: 'SoundFlow',
    price: '₹4,599',
    rating: 4.8,
    reviews: 212,
    image:
      'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Men’s Casual Sneakers',
    brand: 'Stride',
    price: '₹2,899',
    rating: 4.6,
    reviews: 174,
    image:
      'https://images.unsplash.com/photo-1612942910539-9ff28b2e00d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Stainless Steel Smart Watch',
    brand: 'ChronoTech',
    price: '₹5,999',
    rating: 4.4,
    reviews: 98,
    image:
      'https://images.unsplash.com/photo-1718309602791-8f3cc83840b7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Women’s Linen Shirt',
    brand: 'Luma',
    price: '₹1,299',
    rating: 4.1,
    reviews: 63,
    image:
      'https://images.unsplash.com/photo-1644860588182-0998b4ef5587?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];


export default function Home() {
  const [filtersOpen, setFiltersOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* NAVBAR */}
      <header
        className="shadow px-6 py-4 flex justify-between items-center sticky top-0 z-10"
        style={{
          backgroundColor: '#ffffff',
          opacity: 0.8,
          backgroundImage: `
      repeating-linear-gradient(45deg, #f3edb3 25%, transparent 25%, transparent 75%, #f3edb3 75%, #f3edb3),
      repeating-linear-gradient(45deg, #f3edb3 25%, #ffffff 25%, #ffffff 75%, #f3edb3 75%, #f3edb3)
    `,
          backgroundPosition: '0 0, 10px 10px',
          backgroundSize: '20px 20px',
        }}
      >
        <h1 className="text-2xl font-bold tracking-tight">TrustGuard AI</h1>
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded-lg px-4 py-2 text-sm w-1/2 bg-white/80 backdrop-blur-sm placeholder:text-gray-600"
        />
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-[#f8f7f3] text-black px-6 sm:px-12 py-8 overflow-hidden">
        <h1 className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(3rem,10vw,10rem)] font-extrabold tracking-tight text-black z-0 select-none uppercase">
          TRUSTGUARD
        </h1>
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
          <Image
            src="/model.png"
            alt="Chair"
            width={320}
            height={340}
            className="rounded-2xl shadow-xl object-contain"
          />

          <p className="max-w-xl text-gray-600 text-sm sm:text-base">
            Our mission is to deliver bespoke furniture that’s purely made from wood and natural
            supplies. Our products reflect modern minimalism with a touch of creativity.
          </p>

          <button className="inline-flex items-center gap-2 border border-black px-6 py- rounded-full text-sm font-semibold hover:bg-black hover:text-white transition">
            explore ⭢
          </button>
        </div>
      </section>


      {/* MAIN CONTENT */}
      <main className="flex flex-1">
        {/* SIDEBAR FILTERS */}
        <aside className="w-64 border rounded-2xl hidden md:block p-6 ml-5 mt-6 h-fit">
          <div className="flex items-center justify-between cursor-pointer mb-4" onClick={() => setFiltersOpen(!filtersOpen)}>
            <h2 className="font-semibold text-lg">More Filters</h2>
            <ChevronDownIcon className={`w-5 h-5 transform transition ${filtersOpen ? 'rotate-180' : ''}`} />
          </div>
          {filtersOpen && (
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="font-medium">+ Style Type</li>
              <li className="font-medium">+ Sleeve</li>
              <li className="font-medium">+ Closure Type</li>
              <li className="font-medium">+ Pattern</li>
              <li className="font-medium">+ Waistrise</li>
              <li className="font-medium">+ Neckline</li>
            </ul>
          )}
        </aside>

        {/* PRODUCT LIST */}
        <section className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={500}
                  height={500}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium uppercase text-gray-500">
                    {p.brand}
                  </h3>
                  <p className="font-semibold text-base">{p.name}</p>
                  <div className="flex items-center mt-1 mb-2 gap-1">
                    <span className="text-green-600 font-semibold text-sm bg-green-100 px-2 py-0.5 rounded-md">
                      {p.rating}★
                    </span>
                    <span className="text-xs text-gray-500">| {p.reviews}</span>
                  </div>
                  <p className="text-lg font-bold">{p.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center mt-10 gap-2 text-sm">
            <button className="border px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">
              1
            </button>
            <button className="border px-3 py-1 rounded hover:bg-gray-100">
              2
            </button>
            <button className="border px-3 py-1 rounded hover:bg-gray-100">
              3
            </button>
            <span className="text-gray-400">...</span>
            <button className="border px-3 py-1 rounded hover:bg-gray-100">
              Next →
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center text-sm py-4">
        © 2025 AJIO Clone by You. All rights reserved.
      </footer>
    </div>
  );
}
