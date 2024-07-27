import Footer from '@/components/footer/Footer';
import Header from '../components/header/Header';
import Product from '../components/product_details/Product';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-0 md:p-24">
          <Product />
      </main>
      <Footer />
    </div>
  );
}
