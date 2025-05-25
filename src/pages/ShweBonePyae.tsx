import React from 'react';
import Image from 'next/image';
import CommonLayout from '../common/commonlayout';

const ShweBonePyae = () => {
  return (
    <CommonLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-center text-[#8B4513] dark:text-amber-400">
          ရွှေဘုန်းပြည်
        </h1>
        
        <div className="aspect-[16/9] relative w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/15.jpg"
            alt="ရွှေဘုန်းပြည်ဘုရား"
            fill
            className="object-contain bg-white/50 dark:bg-black/20"
            priority
          />
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            ကောဇာသက္ကရာဇ်-၁၃၈၄ ခုနှစ်တွင် အမေရိကန်နိုင်ငံ ဆန်ဖရန်စစ္စကိုနေ ကွယ်လွန်သူ ဖခင်ကြီး ဦးချူငုတ်လင်(ခေါ်) ဦးအလင်းအား ရည်စူး၍ ကျန်ရစ်သူ ဝူမိန်ရီ မိသားစုမှ လှူဒါန်းပူဇော်ခဲ့သည်။
          </p>
        </div>
      </div>
    </CommonLayout>
  );
};

export default ShweBonePyae;