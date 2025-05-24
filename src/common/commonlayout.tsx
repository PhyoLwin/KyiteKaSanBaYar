import React from 'react';
import Link from 'next/link';

interface CommonLayoutProps {
  children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-amber-800 to-amber-600 bg-opacity-90 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-white font-semibold text-lg hover:text-amber-200 transition-colors">
                ထီးတော်ပုံ
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/DawDweiTomb" className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  ဒေါ်ဒွဲဂူ
                </Link>
                <Link href="/ALoTawPyae" className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  အလိုတော်ပြည့်
                </Link>
                <Link href="/SouthPagoda" className="text-white hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  တောင်ဘက်စေတီ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default CommonLayout;