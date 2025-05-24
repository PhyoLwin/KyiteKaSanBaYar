import React from 'react';
import Image from 'next/image';
import CommonLayout from '../common/commonlayout';

const HteeTawPone = () => {
  return (
    <CommonLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">
          ထီးတော်ပုံ စေတီတော်
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/images/26.jpg"
              alt="ထီးတော်ပုံ စေတီတော် ပုံ ၁"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/images/27.jpg"
              alt="ထီးတော်ပုံ စေတီတော် ပုံ ၂"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default HteeTawPone;