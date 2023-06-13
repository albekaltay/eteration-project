import React from "react";
import Card from "../base/Card";

const Cart = ({cartItems, handleAddToCart,handleDecrementQuantity}) => {

  return (
    <Card className="mb-4">
      {cartItems?.length === 0 ? (
        <div><i className="fa-regular fa-cart-shopping text-blue-500 mr-1" /> <span className="text-blue-500">Your cart is empty.</span></div>
      ) : (
        cartItems.map(cartItem => (
          <div key={cartItem.id} className="flex flex-row items-center justify-between mb-2">
          <div className="flex flex-col">
            <span className="text-xs">{cartItem.name}</span>
            <span className="text-xs text-blue-500">{(cartItem.quantity * Math.round(cartItem.price)).toLocaleString()} ₺</span>
          </div>

          <div className="flex flex-row">
            <button onClick={() => handleDecrementQuantity(cartItem)} className="bg-gray-200 py-1 px-2 rounded-md rounded-r-none text-gray-500 hover:bg-gray-300">
              -
            </button>
            <div className="bg-blue-500 py-1 px-2 text-white">{cartItem.quantity}</div>
            <button onClick={()=> handleAddToCart(cartItem)} className="bg-gray-200 py-1 px-2 rounded-md rounded-l-none text-gray-500 hover:bg-gray-300">
              +
            </button>
          </div>
        </div>
        ))

      )}
    </Card>
  );
};

export default Cart;
