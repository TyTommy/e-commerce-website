import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import { fetchProduct } from "./api";
import RatingComponent from "../../components/RatingComponent";
import ProductsComponent from "../../components/ProductsComponent";
import { CheckoutContext } from "../../context/CheckoutContext";
import "./index.scss";

function ProductPage() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(CheckoutContext);

  const [product, setProduct] = useState();

  const getProduct = useCallback(async () => {
    const { data } = await fetchProduct(productId);
    setProduct(data);
  }, [productId, setProduct]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const handleAddToCart = () => {
    setCart((prevCart) => [...prevCart, { ...product, quantity }]);
  };

  const handleRemoveFromCart = () => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product?.id));
  };

  const isInCart = useMemo(
    () => cart.some((item) => item.id === product?.id),
    [cart, product?.id]
  );

  useEffect(() => {
    if (isInCart) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product?.id ? { ...item, quantity } : item
        )
      );
    }
  }, [setCart, isInCart, product?.id, quantity]);

  return (
    <div className="product-page p-10 min-h-screen flex justify-center items-center flex-col gap-32">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <img
              src={product?.image}
              alt="Nike Airmax 270 React"
              className="cover w-full"
            />
          </div>
          <div className="flex flex-col justify-between min-h-60 w-1/2 mt-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {product?.name}
              </h1>
              <div className="flex items-center my-8">
                <span className="text-yellow-500">
                  <RatingComponent rating={product?.rating} />
                </span>
                <a
                  href="#reviews"
                  className="ml-2 text-gray-400 text-sm"
                >
                  {product?.numReviews} reviews
                </a>
                <a
                  href="#submit-review"
                  className="ml-2 text-blue-400 text-sm"
                >
                  Submit a review
                </a>
              </div>
              <div className="flex items-baseline mt-2">
                <span className="text-blue-400 text-2xl">
                  ${product?.price}
                </span>
                <span className="line-through ml-2 text-gray-400">
                  ${product?.price * 1.24}
                </span>
                <span className="text-red-500 ml-2">24% Off</span>
              </div>
              <div className="flex mt-4 w-64 justify-between">
                <span>Availability:</span>
                <span>In stock: {product?.countInStock}</span>
              </div>
              <div className="flex mt-2 w-64 justify-between">
                <span>Category:</span>
                <span>Accessories</span>
              </div>
              <div className="mt-2">
                <span>Free shipping</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="w-12 h-12 bg-gray-100 text-blue-400"
                    onClick={() =>
                      setQuantity((quantity) =>
                        quantity > 1 ? quantity - 1 : quantity
                      )
                    }
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-16 h-12 text-center bg-gray-100 "
                  />
                  <button
                    className="w-12 h-12 bg-gray-100 text-blue-400"
                    onClick={() =>
                      setQuantity((quantity) =>
                        quantity < 100 ? quantity + 1 : quantity
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-4">
                  {!isInCart ? (
                    <button
                      className="bg-blue-50 text-blue-400 h-12 px-5 rounded-sm inline-flex items-center gap-2"
                      onClick={handleAddToCart}
                    >
                      <svg
                        className="h-8 w-8 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      className="bg-blue-50 text-red-500 h-12 px-5 rounded-sm"
                      onClick={handleRemoveFromCart}
                    >
                      Remove from Cart
                    </button>
                  )}

                  <button className="bg-blue-50 text-blue-400 h-12 px-5 rounded-sm">
                    <svg
                      className="h-8 w-8 text-blue-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                      />{" "}
                      <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex mt-4">
                <button className="bg-blue-700 text-white py-2 w-full rounded-lg mr-2">
                  Share on Facebook
                </button>
                <button className="bg-blue-400 text-white py-2  w-full rounded-lg">
                  Share on Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex mb-6">
            <h2 className="text-xl font-bold text-blue-400 py-5 border-b-blue-400 border-b-4 inline">
              Product Information
            </h2>
          </div>
          <ReactQuill
            theme="bubble"
            value={product?.richDescription}
            readOnly
          />
        </div>
      </div>

      <ProductsComponent
        title="MOST TOP RATED PRODUCTS"
        topRatedProducts
      />
    </div>
  );
}

export default ProductPage;
