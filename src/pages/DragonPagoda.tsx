import React from 'react';
import Image from 'next/image';
import CommonLayout from '../common/commonlayout';

const DragonPagoda = () => {
  const images = [
    { src: '/images/21.jpg', alt: 'နဂါးရုံ ဘုရား ၁' },
    { src: '/images/22.jpg', alt: 'နဂါးရုံ ဘုရား ၂' },
    { src: '/images/23.jpg', alt: 'နဂါးရုံ ဘုရား ၃' },
    { src: '/images/24.jpg', alt: 'နဂါးရုံ ဘုရား ၄' },
    { src: '/images/25.jpg', alt: 'နဂါးရုံ ဘုရား ၅' },
  ];

  return (
    <CommonLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-amber-900 dark:text-amber-200 mb-8 text-center">
          နဂါးရုံ အောင်တော်မူ ဘုရား
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Historical Information */}
        <div className="bg-white/90 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-200 mb-6">
            သမိုင်းမှတ်တမ်း
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            <p>
              ၁၃၈၃-ခုနှစ် ပြာသိုလဆန်း-၆ရက် (၇.၁.၂၀၂၂)ရက်နေ့ နံနက်(၉)နာရီတွင် မြေသန့်မင်္ဂလာ နှင့် ပန္နက်တင်မင်္ဂလာအခမ်းအနားပြုလုပ်ခဲ့သည်။
            </p>
            <p>
              အုတ်မြစ်စီမင်္ဂလာအခမ်းအနားကို ၁၃၈၃-ခုနှစ်၊ ပြာသိုလပြည့်နေ့ (၁၆.၁.၂၀၂၂)ရက်နေ့ နံနက်(၉)နာရီတွင် ပြုလုပ်ခဲ့သည်။
            </p>
            <p>
              မြန်မာမှု နဂါးပညာရှင် ဦးအေးစိုးနှင့်အဖွဲ့မှ ဦးစီး၍ နဂါးရုံအောင်တော်မူမြတ်စွာဘုရားကို ထုလုပ် ပူဇော်ခဲ့သည်။
            </p>
            <p>
              ဌာပနာတော်သွင်းမင်္ဂလာကို ၁၃၈၃-ခုနှစ် တပို့တွဲလပြည့်ကျော် (၉)ရက် (၂၄.၂.၂၀၂၂)ရက်နေ့တွင် ပြုလုပ်ခဲ့သည်။
            </p>
            <p>
              ရုပ်ပွားတော်ပင့်ဆောင်ခြင်းမင်္ဂလာကို ၁၃၈၃-ခုနှစ် တပို့တွဲလကွယ် (၁.၃.၂၀၂၂)ရက်နေ့တွင် အရှေ့ဘက်မုခ် အာရုံခံတန်ဆောင်းမှ နဂါးရုံ အောင်တော်မူ ဘုရားပလ္လင်ပေါ်သို့ ပင့်ဆောင်တော်မူသည်။
            </p>
            <p>
              ဘုရားအနေကဇာတင်နှင့် ရေစက်ချအလှူတော်မင်္ဂလာကို ၁၃၈၃-ခုနှစ် တပေါင်းလပြည့်ကျော် (၁၄)ရက် (၃၀.၃.၂၀၂၂) ရက်နေ့တွင် ပြုလုပ်ခဲ့သည်။
            </p>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default DragonPagoda;
