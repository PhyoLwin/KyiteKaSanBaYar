'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TriYaWinGaMin() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 36, src: '/images/36.png' },
    { id: 37, src: '/images/37.png' },
    { id: 38, src: '/images/38.png' },
    { id: 39, src: '/images/39.png' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-center text-indigo-800 dark:text-indigo-200 mb-12">
          တြိယံဝင်ဂါမင်
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={`တြိယံဝင်ဂါမင် ပုံ ${image.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-[4/3] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/${selectedImage}.png`}
                alt={`တြိယံဝင်ဂါမင် ပုံ ${selectedImage}`}
                fill
                className="object-contain"
                quality={100}
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
