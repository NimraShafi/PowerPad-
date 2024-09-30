import FeaturesSection from './components/FeaturesSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import './App.css';
import ProductSection from './components/ProductSection';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import BuyNow from './components/BuyNow';


const App = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto pt-20 px-6">
    <HeroSection/>
    </div>
    <ProductSection/>
    <FeaturesSection/>
    <Testimonial/>
    <BuyNow/>
    <Footer/>

    </>
  )
}

export default App