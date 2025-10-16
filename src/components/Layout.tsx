'use client';

import React, { useState } from 'react';
import { Header } from './Header';
import { Cart } from './Cart';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCartClick={handleCartToggle} />
      
      <div className="flex">
        {/* メインコンテンツ */}
        <main className={`flex-1 transition-all duration-300 ${isCartOpen ? 'mr-96' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>

        {/* カートサイドバー */}
        <div
          className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-96 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          } overflow-y-auto`}
        >
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-lg font-semibold">カート</h2>
            <button
              onClick={handleCartToggle}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <Cart />
          </div>
        </div>

        {/* オーバーレイ */}
        {isCartOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={handleCartToggle}
          />
        )}
      </div>
    </div>
  );
};
