'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  items?: { href: string; text: string }[];
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
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
        { href: '/ShweBonePyae', text: 'ရွှေဘုန်းပြည်' },
        { href: '/YadanarPyae', text: 'ရတနာပြည်' },
      ],
    },
    {
      label: 'အခြား',
      href: '#',
      items: [{ href: '/GawPaGa', text: 'ဂေါပကအဖွဲ့' }],
    },
  ];

  return (
    <nav className="bg-amber-800/90 dark:bg-amber-900/90 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-amber-100 hover:text-amber-50 font-serif text-xl transition-colors">
            ကျိုက္ကစံဘုရား
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group nav-dropdown"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="text-amber-100 hover:text-amber-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === item.label ? 'true' : 'false'}
                >
                  {item.label}
                </button>
                {activeDropdown === item.label && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-amber-50 dark:bg-amber-900 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-label={item.label}>
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-amber-900 dark:text-amber-100 hover:bg-amber-100 dark:hover:bg-amber-800 transition-colors"
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-100 hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
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
                  aria-expanded={activeDropdown === item.label ? 'true' : 'false'}
                >
                  {item.label}
                </button>
                {activeDropdown === item.label && (
                  <div className="pl-4 py-2">
                    {item.items?.map((subItem) => (
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
  );
};

export default Navigation;