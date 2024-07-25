import Image from 'next/image';
import Header from '../components/Header';
import Product from '../components/product_details/Product';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container mx-auto p-4">
          <Product />
        </div>
      </main>
    </div>
  );
}
