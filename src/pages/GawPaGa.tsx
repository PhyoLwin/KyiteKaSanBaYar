'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GawPaGa() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 53, src: '/images/53.jpg' },
    { id: 54, src: '/images/54.jpg' },
    { id: 55, src: '/images/55.jpg' },
    { id: 56, src: '/images/56.jpg' },
    { id: 57, src: '/images/57.jpg' },
    { id: 571, src: '/images/57-1.jpg' },
    { id: 572, src: '/images/57-2.jpg' },
    { id: 58, src: '/images/58.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-12 text-amber-800 dark:text-amber-200">
          ဂေါပကအဖွဲ့
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={`Image ${image.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl aspect-[4/3] rounded-xl overflow-hidden shadow-2xl animate-fade-in">
              <Image
                src={images.find(img => img.id === selectedImage)?.src || ''}
                alt={`Large Image ${selectedImage}`}
                fill
                className="object-contain"
              />
              <button
                aria-label="Close"
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
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
