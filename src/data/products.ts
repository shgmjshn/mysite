import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'ワイヤレスヘッドホン',
    price: 15800,
    image: '/images/headphones.svg',
    description: '高音質のワイヤレスヘッドホン。ノイズキャンセリング機能付き。',
    category: '電子機器',
    stock: 25
  },
  {
    id: '2',
    name: 'スマートウォッチ',
    price: 32000,
    image: '/images/smartwatch.svg',
    description: '健康管理機能が充実したスマートウォッチ。防水対応。',
    category: '電子機器',
    stock: 15
  },
  {
    id: '3',
    name: 'コーヒーメーカー',
    price: 12500,
    image: '/images/coffee-maker.svg',
    description: '本格的なコーヒーが楽しめる全自動コーヒーメーカー。',
    category: '家電',
    stock: 8
  },
  {
    id: '4',
    name: 'ノートパソコン',
    price: 89800,
    image: '/images/laptop.svg',
    description: '軽量で高性能なノートパソコン。14インチディスプレイ。',
    category: '電子機器',
    stock: 12
  },
  {
    id: '5',
    name: 'デスクランプ',
    price: 6800,
    image: '/images/desk-lamp.svg',
    description: 'LED搭載の調光可能なデスクランプ。USB充電ポート付き。',
    category: 'インテリア',
    stock: 30
  },
  {
    id: '6',
    name: 'ワイヤレスマウス',
    price: 3200,
    image: '/images/mouse.svg',
    description: '静音設計のワイヤレスマウス。長時間使用でも疲れにくい。',
    category: '電子機器',
    stock: 45
  },
  {
    id: '7',
    name: 'ブルートゥーススピーカー',
    price: 8900,
    image: '/images/speaker.svg',
    description: 'ポータブルブルートゥーススピーカー。防水機能付き。',
    category: '電子機器',
    stock: 20
  },
  {
    id: '8',
    name: 'キーボード',
    price: 11200,
    image: '/images/keyboard.svg',
    description: 'メカニカルキーボード。バックライト機能付き。',
    category: '電子機器',
    stock: 18
  }
];
