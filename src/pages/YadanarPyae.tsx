import React from 'react';
import Image from 'next/image';
import CommonLayout from '../common/commonlayout';

const YadanarPyae = () => {
  return (
    <CommonLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-amber-600 dark:text-amber-400">
          ရတနာပြည်
        </h1>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="relative aspect-[4/3] w-full overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl"
              onClick={() => {
                const img = document.getElementById('image1') as HTMLElement;
                if (img.style.transform === 'scale(1.5)') {
                  img.style.transform = 'scale(1)';
                } else {
                  img.style.transform = 'scale(1.5)';
                }
              }}
            >
              <Image
                id="image1"
                src="/images/14.jpg"
                alt="ရတနာပြည်ဘုရား ဆိုင်းဘုတ်"
                fill
                priority
                className="object-cover transition-transform duration-300"
              />
            </div>
            <div 
              className="relative aspect-[4/3] w-full overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl"
              onClick={() => {
                const img = document.getElementById('image2') as HTMLElement;
                if (img.style.transform === 'scale(1.5)') {
                  img.style.transform = 'scale(1)';
                } else {
                  img.style.transform = 'scale(1.5)';
                }
              }}
            >
              <Image
                id="image2"
                src="/images/15.jpg"
                alt="ရတနာပြည်ဘုရား"
                fill
                priority
                className="object-cover transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg space-y-4">
              <p className="text-lg">
                ကောဇာသက္ကရာဇ်-၁၃၈၄ခုနှစ် သီတင်းကျွတ်လပြည့်နေ့ (၉.၁၀.၂၀၂၂) တနင်္ဂနွေနေ့၌ ခုနှစ်ရက်သားသမီးများ စုပေါင်းလှူဒါန်းပူဇော်ခဲ့ပါသည်။
              </p>
              <p className="text-lg">
                မြေသန့်မင်္ဂလာကို ၁၃၈၄-ခုနှစ် တော်သလင်းလပြည့်ကျော် (၄)ရက် (၁၃.၉.၂၀၂၂)ရက်နေ့ နံနက်(၉)နာရီတွင် ပြုလုပ်ခဲ့သည်။
              </p>
              <p className="text-lg">
                ဌာပနာတော်သွင်းမင်္ဂလာကို ၁၃၈၄-ခုနှစ် သီတင်းကျွတ်လပြည့်ကျော်(၂)ရက် (၁၁.၁၀.၂၀၂၂)ရက်နေ့တွင် ပြုလုပ်ခဲ့သည်။
              </p>
              <p className="text-lg">
                ရုပ်ပွားတော်ပင့်ဆောင်ခြင်းမင်္ဂလာကို ၁၃၈၄ ခုနှစ် သီတင်းကျွတ်လပြည့်ကျော် (၅)ရက် (၁၄.၁၀.၂၀၂၂)ရက်နေ့တွင် ပလ္လင်တော်ပေါ်သို့ ပင့်ဆောင်တော်မူသည်။
              </p>
              <p className="text-lg">
                ဘုရားအနေကဇာတင်နှင့် ရေစက်ချအလှူတော်မင်္ဂလာကို ၁၃၈၄-ခုနှစ် တန်ဆောင်မုန်းလဆန်း(၁၀)ရက် (၂.၁၀.၂၀၂၂)ဗုဒ္ဓဟူးနေ့တွင် ပြုလုပ်ခဲ့သည်။
              </p>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default YadanarPyae;