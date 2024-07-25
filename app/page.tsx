import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import Header from '../components/header/Header';
import Product from '../components/product_details/Product';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Product />
      </main>
      <Footer />
    </div>
  );
}
