import React, { useContext } from "react";
import { CheckoutContext } from "../../context/CheckoutContext";
import "./index.scss";
import CartItem from "./CartItem";

function CheckoutPage() {
  const { cart, setCart } = useContext(CheckoutContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-10 min-h-screen flex justify-center items-center">
      <div className="rounded-lg w-full max-w-7xl">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="pb-4">PRODUCT</th>
              <th className="pb-4">PRICE</th>
              <th className="pb-4">QTY</th>
              <th className="pb-4">UNIT PRICE</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                removeFromCart={() =>
                  setCart(cart.filter((i) => i.id !== item.id))
                }
                incrementQuantity={() =>
                  setCart(
                    cart.map((i) =>
                      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                    )
                  )
                }
                decrementQuantity={() =>
                  setCart(
                    cart.map((i) =>
                      i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
                    )
                  )
                }
              />
            ))}
          </tbody>
        </table>
        {cart.length === 0 && (
          <p className="text-center w-full block uppercase">Cart is empty</p>
        )}
        <div className="flex justify-end mt-16">
          <div className="w-full max-w-xs">
            <div className="flex justify-between py-2">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Shipping fee</span>
              <span>${cart.length > 0 ? 20 : 0}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Coupon</span>
              <span>No</span>
            </div>
            <div className="flex justify-between py-2 font-bold">
              <span>TOTAL</span>
              <span>${totalPrice + (cart.length > 0 ? 20 : 0)}</span>
            </div>
            <button className="bg-blue-500 text-white w-full py-2 mt-4 rounded-md">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
