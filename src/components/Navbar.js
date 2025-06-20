'use client';
import React from 'react';

export default function Navbar() {
  return (
    <header
      className="shadow px-6 py-4 flex justify-between items-center sticky top-0 z-40 backdrop-blur-md"
      style={{
        backgroundColor: '#ffffff',
        opacity: 0.9,
        backgroundImage: `
          repeating-linear-gradient(45deg, #f3edb3 25%, transparent 25%, transparent 75%, #f3edb3 75%, #f3edb3),
          repeating-linear-gradient(45deg, #f3edb3 25%, #ffffff 25%, #ffffff 75%, #f3edb3 75%, #f3edb3)
        `,
        backgroundPosition: '0 0, 10px 10px',
        backgroundSize: '20px 20px',
      }}
    >
      <h1 className="text-2xl font-bold tracking-tight text-black transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,0,0.8)]">
        TRUSTGUARD AI
      </h1>
      <input
        type="text"
        placeholder="Search products..."
        className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-1/2 bg-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </header>
  );
}
