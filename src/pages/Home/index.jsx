import React from "react";
import Hero from "../../components/hero/Hero";
import ProductsComponent from "../../components/ProductsComponent";
import ShopNow from "../../components/shopNow/ShopNow";
import OurServices from "../../components/ourServices/OurServices";

function Home() {
  return (
    <>
      <Hero />
      <ProductsComponent title="All Products" />
      <ShopNow />
      <OurServices />
      <ProductsComponent
        title="MOST TOP RATED PRODUCTS"
        topRatedProducts
      />
    </>
  );
}

export default Home;
