import React from 'react';
import Image from 'next/image';
import CommonLayout from '../common/commonlayout';

const ABaKout = () => {
  return (
    <CommonLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-amber-600 dark:text-amber-400">
          အဘကောက်
        </h1>
        <div className="max-w-3xl mx-auto">
          <div 
            className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              id="mainImage"
              src="/images/3.png"
              alt="အဘကောက်"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default ABaKout;