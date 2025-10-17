'use client';

import React from 'react';
import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/product';
import { useCart } from '@/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;// カートアイテムのデータ（商品情報 + 数量）
}
// カートアイテムを表示
export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  // カートアイテムの更新と削除のための関数を取得

  // 価格を日本円の価格表示に変換
  //Intl.NumberFormat:数値を地域に応じた形式でフォーマットするJSのAPI
  const formatPrice = (price: number) => {
      return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(price);
  };

  // 数量(Quantity)を変更したときの処理
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(item.product.id);
    } else {
      updateQuantity(item.product.id, newQuantity);
    }
  };

  // カートアイテムを表示
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          unoptimized
          className="object-cover rounded-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder.svg';
          }}
        />
      </div>
      
      <div className="flex-grow min-w-0">
        <h3 className="font-medium text-gray-800 truncate">
          {item.product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {formatPrice(item.product.price)}
        </p>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center border rounded-md">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-l-md"
          >
            −
          </button>
          <span className="px-3 py-1 border-l border-r min-w-[3rem] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="px-3 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-r-md"
          >
            ＋
          </button>
        </div>
        
        <div className="text-right min-w-[6rem]">
          <p className="font-semibold text-gray-800">
            {formatPrice(item.product.price * item.quantity)}
          </p>
        </div>
        
        <button
          onClick={() => removeFromCart(item.product.id)}
          className="text-red-500 hover:text-red-700 p-1"
          title="削除"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};
