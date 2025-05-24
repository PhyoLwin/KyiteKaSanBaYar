'use client';

import { useState } from 'react';
import Image from 'next/image';
import CommonLayout from '../common/commonlayout';

export default function Note() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <CommonLayout>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-serif text-amber-800 dark:text-amber-200 mb-8 text-center">
          မှတ်တမ်းဓာတ်ပုံများ
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image 16 */}
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg group">
            <div
              className={`relative w-full h-full transition-transform duration-700 ease-in-out cursor-zoom-in ${isZoomed ? 'scale-110' : 'scale-100'}`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src="/images/16.jpg"
                alt="Note Image 1"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Image 17 */}
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg group">
            <div
              className={`relative w-full h-full transition-transform duration-700 ease-in-out cursor-zoom-in ${isZoomed ? 'scale-110' : 'scale-100'}`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src="/images/17.jpg"
                alt="Note Image 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}