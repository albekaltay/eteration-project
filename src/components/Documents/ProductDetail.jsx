import React from "react";
import Card from "../base/Card";
import Button from "../base/Button";

const ProductDetail = ({ singleProduct, handleAddToCart }) => {
  return (
    <Card>
      <div className="flex flex-col xl:flex-row w-full">
        <div className="flex justify-center">
          <img
            className=" w-[371.91px]"
            src={singleProduct.image}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="flex flex-col w-full p-2.5">
          <div className="flex flex-col">
            <span className="font-light text-center xl:text-start">
              {singleProduct.name}
            </span>
            <span className="text-blue-500 text-center xl:text-start mb-2">
              {singleProduct.price} ₺
            </span>
          </div>
          <Button
            onClick={() => handleAddToCart(singleProduct)}
            label="Add to Cart"
            className="mb-2"
          />

          <p className="font-light text-sm">{singleProduct.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetail;
