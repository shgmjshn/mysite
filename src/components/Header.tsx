'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CartIcon } from './CartIcon';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(price);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              🛒 ショップ
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              商品一覧
            </Link>
            <div className="flex items-center space-x-4">
              {cart.totalItems > 0 && (
                <div className="text-sm text-gray-600">
                  {formatPrice(cart.totalPrice)}
                </div>
              )}
              <CartIcon onClick={onCartClick} />
            </div>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden flex items-center space-x-2">
            {cart.totalItems > 0 && (
              <div className="text-sm text-gray-600">
                {formatPrice(cart.totalPrice)}
              </div>
            )}
            <CartIcon onClick={onCartClick} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                商品一覧
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
