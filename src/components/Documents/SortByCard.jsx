import React, { useState } from "react";
import Card from "../base/Card";
import RadioButton from "../base/RadioButton";
import { sortByProducts } from "@/redux/slices/productsSlice";
import { useDispatch } from "react-redux";

const SortByCard = () => {
  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    dispatch(sortByProducts(event.target.value));
  };

  return (
    <> 
    <span className="mb-1 text-gray-500 text-xs font-normal">Sort By</span>
    <Card className="mb-2 shadow-lg">
      <RadioButton
        id="old-to-new"
        name="sortBy"
        value="OLD_TO_NEW"
        onChange={handleRadioChange}
        label="Old to new"
      />
      <RadioButton
        id="new-to-old"
        name="sortBy"
        value="NEW_TO_OLD"
        onChange={handleRadioChange}
        label="New to old"
      />
      <RadioButton
        id="price-high-to-low"
        name="sortBy"
        value="PRICE_HIGH_TO_LOW"
        onChange={handleRadioChange}
        label="Price hight to low"
      />
      <RadioButton
        id="price-low-to-high"
        name="sortBy"
        value="PRICE_LOW_TO_HIGH"
        onChange={handleRadioChange}
        label="Price low to High"
      />
    </Card>
    </>
  );
};

export default SortByCard;
