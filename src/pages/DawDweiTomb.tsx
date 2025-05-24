import Link from 'next/link';

export default function DawDweiTomb() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 p-8">
      <nav className="mb-8">
        <Link 
          href="/" 
          className="text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        >
          ← ပင်မစာမျက်နှာသို့
        </Link>
      </nav>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-serif text-amber-800 dark:text-amber-200 mb-4">ဘုရားအမကြီး ဒေါ်ဒွေး၏ အရိုးဂူ</h1>
        <p className="text-lg text-amber-700 dark:text-amber-300">ကျိုက္ကစံဘုရား ဝတ္ထုကံမြေအတွင်း</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white/80 dark:bg-black/20 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-serif text-amber-800 dark:text-amber-200 mb-4">အရိုးဂူတည်နေရာ</h2>
          <p className="text-amber-900 dark:text-amber-100 leading-relaxed">
            ကျိုက္ကစံဘုရားအမကြီး ဒေါ်ဒွေး၏ ရုပ်ထုပုံနှင့် အုတ်ပြသာဒ်အရိုးဂူသည် ကျိုက္ကစံဘုရားဝတ္ထုကံမြေအတွင်းတောင်ဘက်၌ ရှိသတည်း။
          </p>
        </section>

        <section className="bg-white/80 dark:bg-black/20 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-serif text-amber-800 dark:text-amber-200 mb-4">ဘဝပုံရိပ်</h2>
          <p className="text-amber-900 dark:text-amber-100 leading-relaxed">
            ဝိသာခါကဲ့သို့ သဒ္ဓါပြည့်စုံဘောကဗလကုံလုံ နုနယ်ပျိုမြစ်သော ရူပကာယဂုဏ်တို့နှင့် ပြည့်စုံသော ဖွားသက္ကရာဇ် ၁၂၀၂-ခု အသက်(၈၅)နှစ်ရှိ ပုဇွန်တောင်အိုးဖိုရပ်နေ သူဌေးမ ဒေါ်ဒွေးသည် ဗုဒ္ဓသာသနာတော်အတွက် များစွာသော ကုသိုလ်ကောင်းမှုများ ပြုလုပ်ခဲ့ပါသည်။
          </p>
        </section>
      </main>
    </div>
  );
}