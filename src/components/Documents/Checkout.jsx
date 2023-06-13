import React, { useEffect, useState } from "react";
import Card from "../base/Card";
import Button from "../base/Button";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalPrice = useSelector(state => state.cart.totalPrice)

  return (
    <Card>
      <div className="mb-2">
        <span className="text-sm font-light">Total Price:</span>
        <span className="text-blue-500 font-bold text-sm">{totalPrice.toLocaleString()} ₺</span>
      </div>

      <Button label="Checkout" />
    </Card>
  );
};

export default Checkout;
