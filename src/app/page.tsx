import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import NewLaunch from '@/components/sections/NewLaunch';
import Collections from '@/components/sections/Collections';
import FAQBannerSubscribe from '@/components/sections/FAQBannerSubscribe';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <NewLaunch />
      <Collections />
      <FAQBannerSubscribe />
      <Footer />
    </div>
  );
}
