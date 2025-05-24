import Image from 'next/image';
import Link from 'next/link';

export default function ALoTawPyae() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link 
            href="/" 
            className="text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            ← မူလစာမျက်နှာသို့
          </Link>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-serif text-amber-800 dark:text-amber-200 mb-4">
            အလိုတော်ပြည့် ဆင်းတုတော်
          </h1>
          <p className="text-lg text-amber-700 dark:text-amber-300">
            ဆန်ဖရန်စစ္စကို၊ ကယ်လီဖိုးနီးယား
          </p>
        </header>

        <section className="bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-serif text-amber-800 dark:text-amber-200 mb-4">
            သမိုင်းအကျဉ်း
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            မြန်မာသက္ကရာဇ် ၁၃၈၄ ခုနှစ်တွင် ဒေါ်ရီ မှ လှူဒါန်းခဲ့သော ဆင်းတုတော်ဖြစ်ပါသည်။
          </p>
        </section>

        <section className="mb-8">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/alotawpyae.jpg"
              alt="အလိုတော်ပြည့် ဆင်းတုတော်"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-serif text-amber-800 dark:text-amber-200 mb-4">
            ဆုတောင်းပြုလုပ်နည်း
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            စိတ်ဓာတ်ကောင်းမွန်စွာဖြင့် ဆုတောင်းပြုလုပ်ပါ။ ဆုတောင်းပြည့်ပါက ပြန်လည်လာရောက်ဖူးမြော်ပါ။
          </p>
        </section>
      </div>
    </div>
  );
}