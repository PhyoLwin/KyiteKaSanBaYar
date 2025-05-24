'use client';

import { useState } from 'react';
import Image from 'next/image';
import CommonLayout from '../common/commonlayout';

export default function ShinUPaSan() {
  const [isZoomed, setIsZoomed] = useState(false);

  const images = [
    { src: '/images/4.png', alt: 'Shin U Pa San Image 1' },
    { src: '/images/5.png', alt: 'Shin U Pa San Image 2' },
    { src: '/images/6.png', alt: 'Shin U Pa San Image 3' },
    { src: '/images/7.png', alt: 'Shin U Pa San Image 4' },
  ];

  return (
    <CommonLayout>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-serif text-amber-800 dark:text-amber-200 mb-8 text-center">
          ရှင်ဥပသံ
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative h-[300px] rounded-xl overflow-hidden shadow-lg group">
              <div
                className={`relative w-full h-full transition-transform duration-700 ease-in-out cursor-zoom-in ${isZoomed ? 'scale-110' : 'scale-100'}`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
}