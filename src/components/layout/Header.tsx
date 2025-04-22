'use client';

import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Wurana
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link href="/marketplace" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Marketplace
          </Link>
          <Link href="/artisans" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Artisans
          </Link>
          <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
            Connect Wallet
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;