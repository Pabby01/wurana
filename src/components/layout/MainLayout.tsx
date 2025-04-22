'use client';

import { FC, ReactNode } from 'react';
import Header from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-20 container mx-auto px-4">
        {children}
      </main>
      <footer className="mt-20 py-8 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Wurana. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;