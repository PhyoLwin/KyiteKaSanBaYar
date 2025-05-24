'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NyaungPin() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    // Prevent body scroll when lightbox is open
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedImage]);

  const images = Array.from({ length: 13 }, (_, i) => ({
    id: i + 40,
    src: `/images/${i + 40}.jpg`,
  }));

  const timelineEvents = [
    {
      year: '၂၀၀၅',
      title: 'စတင်ရှင်းလင်းခြင်း',
      description: 'ဦးသော်တာ မှ သစ်ပင် ခြုံနွယ်များ စတင် ရှင်းလင်း ခဲ့ပါသည်။',
    },
    {
      year: '၂၀၁၀',
      title: 'ဗောဓိညောင်ပင်များ စိုက်ပျိုးခြင်း',
      description: 'အဘ ဦးတင်ရွှေ (ဂေါပက ဥက္ကဌ) လက်ထက်တွင် ဗောဓိညောင်ပင်များ စတင်စိုက်ပျိုးခဲ့ပါသည်။',
    },
    {
      year: '၂၀၂၂',
      title: 'ကျောက်ဆင်းတုများ ပူဇော်ခြင်း',
      description: 'ညောင်(၁၁)ပင်တွင် ကျောက်ဆင်းတု (၇၇)ဆူအား ခုနှစ်ရက်သား သမီးအပေါင်းမှ ပူဇော်လှူဒါန်းခဲ့ပါသည်။',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-8 text-emerald-800 dark:text-emerald-200">
          ညောင်(၁၅)ပင် သမိုင်း
        </h1>

        <div className="bg-white/80 dark:bg-black/30 rounded-xl shadow-lg p-6 mb-12">
          <p className="text-lg leading-relaxed">
            ကျိုက္ကစံစေတီတော် ပရဝဏ် ရတနာလမ်းဘက်ရှိ စေတီ၏ မြောက်ဘက်၊ အရှေ့မြောက်ဘက်အရပ်တွင် ယခင်က သစ်ပင်၊ ခြုံနွယ်၊ ဗွက်များ၊ မြက်တော်များရှိရာ
            ကုသိုလ်ယူ ရှင်းလင်းဆောင်ရွက်သူ ဦးသော်တာ မှ ၂၀၀၅-ခုနှစ်တွင် သစ်ပင် ခြုံနွယ်များ စတင် ရှင်းလင်း ခဲ့ပါသည်။
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-12 border-l-4 border-emerald-400 dark:border-emerald-600 mb-12 space-y-10">
          {timelineEvents.map((event) => (
            <div key={event.year} className="relative pl-6">
              <div className="absolute left-[-10px] top-1 w-5 h-5 bg-emerald-500 border-4 border-white dark:border-gray-800 rounded-full shadow"></div>
              <div className="bg-white/90 dark:bg-black/30 p-4 rounded-lg shadow">
                <div className="text-sm text-emerald-600 dark:text-emerald-300 font-bold mb-1">{event.year}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">{event.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-xl border border-emerald-100 dark:border-gray-700 shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={`ညောင်ပင် ဓာတ်ပုံ ${image.id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-5xl aspect-[4/3] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            >
              <Image
                src={`/images/${selectedImage}.jpg`}
                alt={`ညောင်ပင် ဓာတ်ပုံ ${selectedImage}`}
                fill
                sizes="(max-width: 768px) 90vw, 60vw"
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
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
