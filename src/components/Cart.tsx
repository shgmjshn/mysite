'use client';

import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { CartItem } from './CartItem';

export const Cart: React.FC = () => {
  const { cart, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const formatPrice = (price: number) => {
    // 価格を日本円の価格表示に変換
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(price);
  };

  // 注文確定ボタンを押したときの処理
  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // 実際のアプリケーションでは、ここで決済処理を行います
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('ご注文ありがとうございました！');
    clearCart();
    setIsCheckingOut(false);
  };

  if (cart.items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          カートが空です
        </h2>
        <p className="text-gray-600">
          商品を追加してショッピングを始めましょう！
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            ショッピングカート
          </h2>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            すべて削除
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {cart.totalItems}個の商品
        </p>
      </div>
      
      <div className="p-6 space-y-4">
        {cart.items.map(item => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
      
      <div className="p-6 border-t bg-gray-50">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span>小計:</span>
            <span>{formatPrice(cart.totalPrice)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>配送料:</span>
            <span>無料</span>
          </div>
          <div className="flex justify-between text-lg font-semibold border-t pt-2">
            <span>合計:</span>
            <span className="text-blue-600">{formatPrice(cart.totalPrice)}</span>
          </div>
        </div>
        
        <button
          onClick={handleCheckout}
          disabled={isCheckingOut}
          className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
            isCheckingOut
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
          }`}
        >
          {isCheckingOut ? '処理中...' : '注文を確定する'}
        </button>
      </div>
    </div>
  );
};
