'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const buddhaImages = [
    '/images/buddha1.JPG',
    '/images/buddha2.JPG',
    '/images/buddha3.JPG',
    '/images/buddha4.JPG',
    '/images/buddha5.JPG',
  ];

  const navItems = [
    {
      label: 'အချက်အလက်များ',
      href: '#',
      items: [
        { href: '/DawDweiTomb', text: 'အရိုးဂူ' },
        { href: '/ALoTawPyae', text: 'အလိုတော်ပြည့် ဘုရား' },
        { href: '/HteeTawPone', text: 'ထီးတော်ပုံ' },
        { href: '/BoTaKyarMin', text: 'ဘုရားသားကြားမင်း' },
        { href: '/Note', text: 'မှတ်တမ်းဓာတ်ပုံများ' },
        { href: '/ABaKout', text: 'အဘကောက်' },
      ],
    },
    {
      label: 'စေတီများ',
      href: '#',
      items: [
        { href: '/DragonPagoda', text: 'နဂါးရုံ အောင်တော်မူ' },
        { href: '/SouthPagoda', text: 'တောင်ဘက်စေတီ' },
        { href: '/TriYaWinGaMin', text: 'တြိယံဝင်ဂါမင်' },
        { href: '/NyaungPin', text: 'ညောင်(၁၅)ပင်' },
        { href: '/Bell', text: 'ခေါင်းလောင်း' },
        { href: '/ShinUPaSan', text: 'ရှင်ဥပသံ' },
      ],
    },
    {
      label: 'အခြား',
      href: '#',
      items: [{ href: '/GawPaGa', text: 'ဂေါပကအဖွဲ့' }],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % buddhaImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown on outside click (optional improvement)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-dropdown')) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-amber-800/90 dark:bg-gray-800/90 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-amber-100 hover:text-white font-serif text-xl">
              ကျိုက္ကစံဘုရား
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group nav-dropdown"
                  onClick={(e) => e.stopPropagation()} // Prevent outside click close when clicking dropdown content
                >
                  <button
                    type="button"
                    className="text-amber-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-label={item.label}>
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-gray-600"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (isMenuOpen) setActiveDropdown(null);
              }}
              aria-label="Toggle menu"
              className="md:hidden text-amber-100 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    type="button"
                    className="w-full text-left text-amber-100 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                  </button>
                  {activeDropdown === item.label && (
                    <div className="pl-4 py-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-white"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        {/* Hero Image Slideshow */}
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg group mb-12">
          <div
            className={`relative w-full h-full transition-transform duration-700 ease-in-out cursor-zoom-in ${isZoomed ? 'scale-110' : 'scale-100'}`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            {buddhaImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                style={{ position: 'absolute' }}
              >
                <Image
                  src={src}
                  alt={`Buddha Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-800 dark:text-amber-200 mb-4">
            ဘုရားဒါယကာမကြီး ဒေါ်ဒွေး၏ကောင်းမှုများ
          </h1>
          <p className="text-lg md:text-xl text-amber-700 dark:text-amber-300">
            ကျိုက္ကစံဘုရား တနင်္ဂနွေထောင့်
          </p>
        </header>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/90 dark:bg-gray-800/80 p-6 rounded-2xl shadow-xl hover:shadow-amber-200 dark:hover:shadow-yellow-500/20 transition-all transform hover:-translate-y-1">
            <h2 className="text-2xl font-serif text-amber-800 dark:text-amber-200 mb-3">ဘုရားရှိခိုးပူဇော်နည်း</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              ကျိုက္ကစံဘုရားတွင် ပန်း၊ ဆီမီး၊ ရေချမ်း ကပ်လှူပူဇော်နိုင်ပါသည်။
            </p>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/80 p-6 rounded-2xl shadow-xl hover:shadow-amber-200 dark:hover:shadow-yellow-500/20 transition-all transform hover:-translate-y-1">
            <h2 className="text-2xl font-serif text-amber-800 dark:text-amber-200 mb-3">ဆုတောင်းပြည့်ဝစေမည့် အချက်များ</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              စိတ်ဓာတ်ကောင်းမွန်စွာဖြင့် ဆုတောင်းပြုလုပ်ပါ။ ဆုတောင်းပြည့်ပါက ပြန်လည်လာရောက်ဖူးမြော်ပါ။
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
