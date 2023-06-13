import React from "react";
import Button from "../base/Button";
import Link from "next/link";
import { getSingleProduct } from "@/redux/slices/productsSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product, handleAddToCart }) => {
  const dispatch = useDispatch();

  return (
    <div
     
      className="flex flex-col justify-between sm:w-[180px] sm:h-[250px] rounded-sm overflow-hidden p-2.5 bg-white"
    >
    <div> 
    <Link  href={`product/${product.id}`}
      onClick={() => dispatch(getSingleProduct(product.id))}> 
      <img
        className="w-full"
        src={product.image}
        alt="Sunset in the mountains"
      />
      <div className="py-4">
        <p className="text-sm text-blue-500">{product.price} ₺</p>
        <p className="text-sm">{product.name}</p>
      </div>
    </Link>
    </div>
    <Button  label="Add to Cart" onClick={() => handleAddToCart(product)} />
    </div>
  );
};

export default ProductCard;
