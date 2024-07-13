import React, { useMemo } from "react";

function CartItem({
  image,
  name,
  price,
  quantity,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
}) {
  const totalPrice = useMemo(() => price * quantity, [price, quantity]);

  return (
    <tr className="border-b">
      <td className="py-4 flex items-center">
        <button
          className="text-red-500 mr-4"
          onClick={removeFromCart}
        >
          ✕
        </button>
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover mr-4"
        />
        <span>{name}</span>
      </td>
      <td className="py-4">${price}</td>
      <td className="py-4">
        <div className="flex items-center">
          <button
            className="w-8 h-8 bg-gray-100 text-blue-400"
            onClick={decrementQuantity}
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-10 h-8 text-center bg-gray-100"
          />
          <button
            className="w-8 h-8 bg-gray-100 text-blue-400"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
      </td>
      <td className="py-4">${totalPrice}</td>
    </tr>
  );
}

export default CartItem;
