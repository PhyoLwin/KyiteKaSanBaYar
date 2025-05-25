'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
export default function Index() {
  const blessings = [
    'သက်သာချမ်းမြေ့ကြပါစေ။',
    'စိတ်အေးချမ်းသာ ကြင်နာတရားရှိပါစေ။',
    'ဘေးအန္တရာယ်ကင်းဝေးစေပါစေ။',
    'အောင်မြင်ခြင်းများစွာရပါစေ။',
    'ဆုတောင်းပြည့်စုံပါစေ။',
    'မိသားစုကျန်းမာချမ်းသာကြပါစေ။',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [blessing, setBlessing] = useState(blessings[0]);
  const buddhaImages = [
    '/images/3.jpg',
    '/images/4.jpg',  
    '/images/5.jpg',
    '/images/6.jpg',
  ];
  useEffect(() => {
    setMounted(true);
    // Only set random blessing after component mounts on client
    setBlessing(blessings[Math.floor(Math.random() * blessings.length)]);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % buddhaImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mounted]);
  if (!mounted) {
    return (
      <div className="h-screen flex items-center justify-center text-xl text-amber-700 dark:text-amber-200">
        Loading...
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-6xl mx-auto p-6">
        {/* Hero Image Slideshow */}
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg group mb-12">
          <div
            className={`relative w-full h-full transition-transform duration-700 ease-in-out cursor-zoom-in ${
              isZoomed ? 'scale-110' : 'scale-100'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            {buddhaImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ position: 'absolute' }}
              >
                <Image
                  src={`${src}?auto=format&fit=crop&w=1200&q=80`}
                  alt={`Buddha Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  unoptimized // Add this line
                />
              </div>
            ))}
          </div>
        </div>
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-800 dark:text-amber-200 mb-4">
            ကျိုက္ကစံဘုရား
          </h1>
          <p className="text-lg md:text-xl text-amber-700 dark:text-amber-300 italic">
            {blessing}
          </p>
        </header>
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/90 dark:bg-gray-800/80 p-6 rounded-2xl shadow-xl hover:shadow-amber-200 dark:hover:shadow-yellow-500/20 transition-all transform hover:-translate-y-1">
            <h2 className="text-2xl font-serif text-amber-800 dark:text-amber-200 mb-3">ဘုရားရှိခိုးပူဇော်နည်း</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              ကျိုက္ကစံဘုရားတွင် ပန်း၊ ဆီမီး၊ ရေချမ်း ကပ်လှူပူဇော်နိုင်ပါသည်။ ယနေ့တိုင်လူတော်များ၏ယုံကြည်မှုနှင့်တကွ မျှော်လင့်ချက်များလည်း ပြည့်ဝနေပါစေ။
            </p>
          </div>
          <div className="bg-white/90 dark:bg-gray-800/80 p-6 rounded-2xl shadow-xl hover:shadow-amber-200 dark:hover:shadow-yellow-500/20 transition-all transform hover:-translate-y-1">
            <h2 className="text-2xl font-serif text-amber-800 dark:text-amber-200 mb-3">ဆုတောင်းပြည့်ဝစေမည့် အချက်များ</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              စိတ်ဓာတ်ကောင်းမွန်စွာဖြင့် ဆုတောင်းပြုလုပ်ပါ။ အတိအလင်းသောစိတ်ဖြင့် အပြစ်ကင်းသောအကျင့်နှင့်အတူ ဆုတောင်းပြုလျှင် ဆုတောင်းသည် အမှန်တကယ်ပြည့်စုံလိမ့်မည်။
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}