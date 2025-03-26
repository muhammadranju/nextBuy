import Footer from '@/components/Footer/Footer';
import LatestArticlesSlider from '@/components/LatestArticlesSlider/LatestArticlesSlider';
import Navbar from '@/components/Navbar';
import ProductsCard from '@/components/productsCard/ProductsCard';
// import ProductsCard from '@/components/productsCard/productsCard';
import Slider from '@/components/Slider/Slider';
// import Slider from '@/components/Slider';
import TechnicalSpecifications from '@/components/TechnicalSpecifications/TechnicalSpecifications';

export default function Home() {
   return (
      <>
         <Navbar />
         <Slider />
         <TechnicalSpecifications />
         <ProductsCard />
         <LatestArticlesSlider />
         <Footer />
      </>
   );
}
