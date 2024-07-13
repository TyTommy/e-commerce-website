import React from "react";
import Hero from "../../components/hero/Hero";
import ProductsComponent from "../../components/ProductsComponent";
import ShopNow from "../../components/shopNow/ShopNow";
import OurServices from "../../components/ourServices/OurServices";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <ProductsComponent title={t("allProducts")} />
      <ShopNow />
      <OurServices />
      <ProductsComponent
        title={t("topRated")}
        topRatedProducts
      />
    </>
  );
}

export default Home;
