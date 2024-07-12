import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AllProducts from "./components/allProducts/AllProducts";
import ShopNow from "./components/shopNow/ShopNow";
import OurServices from "./components/ourServices/OurServices";
import TopRatedProducts from "./components/topRatedProducts/TopRatedProducts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AllProducts />
      <ShopNow />
      <OurServices />
      <TopRatedProducts />
      <Footer />
    </>
  );
}

export default App;