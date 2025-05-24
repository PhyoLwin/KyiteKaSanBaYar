import React from 'react';
import Image from 'next/image';
import CommonLayout from '../common/commonlayout';

const BoTaKyarMin = () => {
  return (
    <CommonLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">
          ဘုရားသားကြားမင်း
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/images/20.png"
              alt="ဘုရားသားကြားမင်း"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default BoTaKyarMin;