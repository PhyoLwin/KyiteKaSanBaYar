import Image from 'next/image';

export default function Bell() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-8 text-amber-800 dark:text-amber-200">
          ခေါင်းလောင်းနှစ်လုံး
        </h1>

        <div className="bg-white/80 dark:bg-black/30 rounded-lg shadow-lg p-6 mb-8">
          <p className="text-lg mb-6 leading-relaxed">
            ကျိုက္ကစံစေတီတော်၏ အနောက်ဘက် မဟာရံတံတိုင်းအတွင်း၌ ခေါင်းလောင်းနှစ်လုံးရှိသည့်အနက် ခေါင်းလောင်းကြီးကို ပွဲစားကြီးဦးလွန်းက ၁၂၃၉-ခုနှစ်၌ လှူဒါန်းသည်။ ကြေးပိဿသုံးရာရှိသည်။
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            ခေါင်းလောင်းကို ရန်ကုန်မြို့ ပေ ၅၀-အထက်ပိုင်းအမှတ် ၅၉နေ ဘုရားအမ ဒေါ်ပိုက် ၁၂၆၇-ခု တပို့တွဲလဆန်း(၁၁)ရက်နေ့၌ လှူဒါန်းသည်။ ကြေးချိန်တရာ ခြောက်ပိဿရှိသည်။
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/59.jpg"
              alt="Bell Image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/60.jpg"
              alt="Bell Image 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/61.jpg"
              alt="Bell Image 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}