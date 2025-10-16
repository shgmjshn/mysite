import { Layout } from '@/components/Layout';
import { ProductList } from '@/components/ProductList';
import { products } from '@/data/products';

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            商品一覧
          </h1>
          <p className="text-gray-600">
            お気に入りの商品を見つけて、カートに追加してください。
          </p>
        </div>
        
        <ProductList products={products} />
      </div>
    </Layout>
  );
}
