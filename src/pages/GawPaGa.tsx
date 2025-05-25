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
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        ဂေါပကအဖွဲ့ဝင်များ
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 cursor-pointer group"
            onClick={() => setSelectedImage(image.id)}
          >
            <div className="absolute inset-0">
              <Image
                src={image.src}
                alt={`Image ${image.id}`}
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                sizes="(max-width: 768px) 100vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 transition-opacity duration-300 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={images.find((img) => img.id === selectedImage)?.src || ''}
              alt={`Large Image ${selectedImage}`}
              fill
              className="object-contain animate-zoom-in"
              style={{ objectFit: 'contain' }}
            />
            <button
              aria-label="Close"
              className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition duration-200"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}