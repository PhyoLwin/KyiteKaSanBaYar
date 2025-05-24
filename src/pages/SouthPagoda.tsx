'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SouthPagoda() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 28,
    src: `/images/${i + 28}.png`,
  }));

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-12 text-amber-800 dark:text-amber-200">
          တောင်ဘက်စေတီ
        </h1>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={image.src}
                  alt={`တောင်ဘက်စေတီ ပုံ ${image.id}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">ပုံအမှတ် {image.id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-5xl aspect-[4/3] rounded-xl overflow-hidden shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/${selectedImage}.png`}
                alt={`တောင်ဘက်စေတီ ပုံ ${selectedImage}`}
                fill
                className="object-contain"
                quality={100}
              />

              {/* Previous Button */}
              <button
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/75 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = images.findIndex(img => img.id === selectedImage);
                  if (currentIndex > 0) {
                    setSelectedImage(images[currentIndex - 1].id);
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/75 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = images.findIndex(img => img.id === selectedImage);
                  if (currentIndex < images.length - 1) {
                    setSelectedImage(images[currentIndex + 1].id);
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Close Button */}
              <button
                aria-label="Close"
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 hover:bg-black/75 transition"
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
