import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "./api";

function ProductPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState();

  const getProduct = useCallback(async () => {
    const { data } = await fetchProduct(productId);
    setProduct(data);
  }, [productId, setProduct]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <div className="flex flex-col items-center p-4 text-white bg-gray-800">
      <div className="w-80">
        <img
          src={product?.image}
          alt="Nike Airmax 270 React"
          className="w-full"
        />
      </div>
      <div className="text-left mt-6">
        <h1 className="text-2xl font-bold">Nike Airmax 270 React</h1>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">★★★★★</span>
          <a
            href="#reviews"
            className="ml-2 text-blue-400"
          >
            0 reviews
          </a>
          <a
            href="#submit-review"
            className="ml-2 text-blue-400"
          >
            Submit a review
          </a>
        </div>
        <div className="flex items-baseline mt-2">
          <span className="text-green-400 text-xl">$289.43</span>
          <span className="line-through ml-2">$384.33</span>
          <span className="text-red-500 ml-2">24% Off</span>
        </div>
        <div className="mt-4">
          <span>Availability:</span> <span>In stock: 10</span>
        </div>
        <div className="mt-2">
          <span>Category:</span> <span>Accessories</span>
        </div>
        <div className="mt-2">
          <span>Free shipping</span>
        </div>
        <div className="flex items-center mt-4">
          <button className="w-8 h-8 bg-gray-600 text-white">-</button>
          <input
            type="text"
            value="2"
            readOnly
            className="w-8 text-center mx-2"
          />
          <button className="w-8 h-8 bg-gray-600 text-white">+</button>
        </div>
        <div className="mt-4">
          <button className="bg-blue-600 text-white py-2 px-4">
            Add to Cart
          </button>
        </div>
        <div className="flex mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 mr-2">
            Share on Facebook
          </button>
          <button className="bg-blue-600 text-white py-2 px-4">
            Share on Twitter
          </button>
        </div>
      </div>
      <div className="text-left mt-6 w-full max-w-2xl">
        <h2 className="text-xl font-bold">Product Information</h2>
        <p className="mt-2">
          air max are always very comfortable fit, clean and just perfect in
          every way. just the box was too small and scrunched the sneakers up a
          little bit, not sure if the box was always this small but the 90s are
          and will always be one of my favorites.
        </p>
        <p className="mt-2">
          air max are always very comfortable fit, clean and just perfect in
          every way. just the box was too small and scrunched the sneakers up a
          little bit, not sure if the box was always this small but the 90s are
          and will always be one of my favorites.
        </p>
        <p className="mt-2">
          air max are always very comfortable fit, clean and just perfect in
          every way. just the box was too small and scrunched the sneakers up a
          little bit, not sure if the box was always this small but the 90s are
          and will always be one of my favorites.
        </p>
      </div>
    </div>
  );
}

export default ProductPage;
