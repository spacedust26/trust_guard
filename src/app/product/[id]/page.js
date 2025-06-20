'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import Footer from '@/components/Footer';
export const products = [
  {
    id: 1,
    name: 'Vintage Leather Backpack',
    brand: 'Nomad Gear',
    category: 'Luggage',
    price: '₹3,499',
    rating: 4.5,
    reviewsCount: 120,
    image:
      'https://images.unsplash.com/photo-1549943872-f7ff0b2b51be?q=80&w=688',
    thumbnails: [
      'https://images.unsplash.com/photo-1549943872-f7ff0b2b51be?q=80&w=300',
      'https://images.unsplash.com/photo-1583947215259-38ba8acb4249?q=80&w=300',
    ],
    description:
      'Crafted from premium full-grain leather, this vintage-style backpack is both durable and stylish. Ideal for travel and daily use.',
    sizes: [],
    shipping: [
      { label: 'Free Delivery', value: '3–5 Working Days' },
      { label: 'Express', value: '1–2 Working Days' },
    ],
    reviews: [
      {
        name: 'Meera Rajan',
        rating: 5,
        date: '2025-03-15',
        comment: 'Absolutely loved it. Looks premium and feels strong!',
      },
      {
        name: 'Anand S.',
        rating: 4,
        date: '2025-04-10',
        comment: 'Zippers could be better, but overall great value.',
      },
    ],
  },
  {
    id: 2,
    name: 'Modern Wooden Chair',
    brand: 'Haus',
    category: 'Furniture',
    price: '₹2,199',
    rating: 4.2,
    reviewsCount: 86,
    image:
      'https://images.unsplash.com/photo-1705155472131-134f4b7403ef?q=80&w=687',
    thumbnails: [],
    description:
      'A sleek wooden chair with minimalist design and ergonomic comfort. Perfect for any contemporary living space.',
    sizes: [],
    shipping: [
      { label: 'Standard Delivery', value: '3–5 Working Days' },
    ],
    reviews: [],
  },
  {
    id: 3,
    name: 'Wireless Over-Ear Headphones',
    brand: 'SoundFlow',
    category: 'Electronics',
    price: '₹4,599',
    rating: 4.8,
    reviewsCount: 212,
    image:
      'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1170',
    thumbnails: [],
    description:
      'Experience immersive sound with these over-ear wireless headphones. Long battery life and noise cancellation included.',
    sizes: [],
    shipping: [
      { label: 'Standard Shipping', value: 'Free for orders above ₹999' },
    ],
    reviews: [
      {
        name: 'Rohan M.',
        rating: 5,
        date: '2025-02-05',
        comment: 'Fantastic sound clarity. Worth every rupee!',
      },
    ],
  },
  {
    id: 4,
    name: 'Men’s Casual Sneakers',
    brand: 'Stride',
    category: 'Footwear',
    price: '₹2,899',
    rating: 4.6,
    reviewsCount: 174,
    image:
      'https://images.unsplash.com/photo-1612942910539-9ff28b2e00d3?q=80&w=1170',
    thumbnails: [],
    description:
      'These casual sneakers combine comfort with classic style. Breathable fabric and slip-resistant soles.',
    sizes: ['7', '8', '9', '10', '11'],
    shipping: [
      { label: 'Standard', value: '3–4 Working Days' },
    ],
    reviews: [
      {
        name: 'Sameer D.',
        rating: 4,
        date: '2025-01-22',
        comment: 'Looks great, fits perfectly. Could improve laces.',
      },
    ],
  },
  {
    id: 5,
    name: 'Stainless Steel Smart Watch',
    brand: 'ChronoTech',
    category: 'Electronics',
    price: '₹5,999',
    rating: 4.4,
    reviewsCount: 98,
    image:
      'https://images.unsplash.com/photo-1718309602791-8f3cc83840b7?q=80&w=1074',
    thumbnails: [],
    description:
      'Smartwatch with heart rate monitor, step tracking, and sleek stainless steel finish. Pairs with both Android and iOS.',
    sizes: [],
    shipping: [
      { label: 'Free Shipping', value: 'Delivered in 2–4 Working Days' },
    ],
    reviews: [
      {
        name: 'Ayesha Khan',
        rating: 5,
        date: '2025-04-12',
        comment: 'Stylish and smart. Excellent battery life.',
      },
    ],
  },
  {
    id: 6,
    name: 'Women’s Linen Shirt',
    brand: 'Luma',
    category: 'Clothing',
    price: '₹1,299',
    rating: 4.1,
    reviewsCount: 63,
    image:
      'https://images.unsplash.com/photo-1644860588182-0998b4ef5587?q=80&w=735',
    thumbnails: [],
    description:
      'Lightweight and breathable, this linen shirt is perfect for summer. Tailored fit with a soft touch.',
    sizes: ['S', 'M', 'L'],
    shipping: [
      { label: 'Economy Shipping', value: '5–7 Working Days' },
    ],
    reviews: [
      {
        name: 'Neha Mehta',
        rating: 4,
        date: '2025-03-08',
        comment: 'Looks elegant. Runs slightly large in size.',
      },
    ],
  },
];


export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [mainImage, setMainImage] = useState(product?.image || '');
  const [selectedSize, setSelectedSize] = useState('');
  const getRatingPercentage = (star) => {
    const total = product.reviews.length;
    const count = product.reviews.filter(r => r.rating === star).length;
    return total ? `${(count / total) * 100}%` : '0%';
  };


  if (!product) return <div className="text-center py-10">Product not found</div>;

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 md:px-20 py-10">
        {/* IMAGE BLOCK */}
        <div className="relative w-full h-[600px]">
          <div className="w-full h-full relative rounded-xl shadow-md overflow-hidden">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>

          {/* Thumbnails Overlaid */}
          {product.thumbnails.length > 0 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 bg-white rounded-xl px-3 py-2 shadow-lg">
              {product.thumbnails.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Thumb ${i}`}
                  width={70}
                  height={70}
                  onClick={() => setMainImage(src)}
                  className={`rounded-lg border cursor-pointer object-cover transition-transform hover:scale-105 ${mainImage === src ? 'ring-2 ring-black' : ''
                    }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-lg text-gray-500 mt-2 ml-1">{product.brand}</p>
          </div>
          <p className="text-4xl font-semibold">{product.price}</p>
          {product.sizes.length > 0 && (
            <div>
              <p className="font-medium mb-2">Size:</p>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-4 py-1.5 rounded-md transition text-sm font-semibold
                    ${selectedSize === size
                        ? 'bg-black text-white'
                        : 'hover:bg-gray-800 hover:text-white'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button className=" bg-black hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition hover:scale-105">
            Add to Cart
          </button>

          <div className='border rounded-2xl p-4 bg-pink-100'>
            <h4 className="text-lg font-semibold mb-2">Description & Fit</h4>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className='border rounded-2xl p-4 bg-blue-100'>
            <h4 className="text-lg font-semibold mb-2">Shipping</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              {product.shipping.map((s, i) => (
                <li key={i}>
                  <strong>{s.label}:</strong> {s.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* RATINGS & REVIEWS */}
      <div className="px-8 md:px-20 py-2 bg-gray-50 mb-5">
        <h3 className="text-2xl font-bold mb-6">Ratings & Reviews</h3>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT: Rating Summary + Bars */}
          <div className="lg:w-1/3 border rounded-2xl p-6 bg-white shadow-md space-y-6">
            <p className="text-5xl font-bold">{product.rating}★</p>
            <p className="text-sm text-gray-500 mb-4">{product.reviewsCount} total reviews</p>

            {/* Rating Breakdown Bars */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((r) => (
                <div key={r} className="flex items-center gap-2">
                  <span className="text-sm w-5">{r}</span>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-yellow-400 rounded"
                      style={{ width: getRatingPercentage(r) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: User Reviews */}
          <div className="lg:w-2/3">
            {/* Buttons Row */}
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition">
                Fraud Detection
              </button>
              <button className="px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition">
                Counterfeit Detection
              </button>
              <button className="px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition">
                Fake Review Analysis
              </button>
              <button className="px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition">
                Trust Score Assignment
              </button>
              <button className="px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition">
                LLM-generated Summary
              </button>
            </div>
            {product.reviews.length > 0 ? (
              <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4 rounded-lg border p-4 bg-white shadow-md mt-3">
                {product.reviews.map((review, i) => (
                  <div
                    key={i}
                    className="border-b last:border-0 mb-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{review.name}</span>
                      <span className="text-yellow-500 font-semibold">{review.rating}★</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
                    <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-40 border rounded-lg bg-white shadow-inner mt-3">
                <p className="text-gray-500 text-sm italic">No reviews yet. Be the first to review this product!</p>
              </div>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
