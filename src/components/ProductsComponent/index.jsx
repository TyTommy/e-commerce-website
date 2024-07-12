import React, { useEffect, useState, useCallback } from "react";
import { fetchProducts } from "./api";
import ProductCardComponent from "./ProductCardComponent";
import "./index.scss";

const ProductsComponent = ({ title, topRatedProducts = false }) => {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const { data = [] } = await fetchProducts();
    if (topRatedProducts) {
      setProducts(data.sort((a, b) => b.rating - a.rating).slice(0, 3));
    } else {
      setProducts(data.slice(0, 8));
    }
  }, [topRatedProducts, setProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="products">
      <h1>{title}</h1>
      <div className="products__container">
        {products.map((product) => (
          <ProductCardComponent
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            horizontal={topRatedProducts}
          />
        ))}
      </div>
      {!topRatedProducts && (
        <button className="products__btn">Load More</button>
      )}
    </div>
  );
};

export default ProductsComponent;
