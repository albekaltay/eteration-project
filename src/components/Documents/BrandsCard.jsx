import React, { useEffect, useState } from "react";
import Card from "../base/Card";
import SearchInput from "../custom/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loadings/Loading";
import {
  searchBrands,
  toggleBrand
} from "@/redux/slices/productsSlice";

const BrandsCard = () => {
  const [searchText, setSearchText] = useState("");

  const filteredBrands = useSelector((state) => state.products.filteredBrands);
  const getProductIsLoading = useSelector(
    (state) => state.products.getProductIsLoading
  );

  const selectedBrands = useSelector((state) => state.products.selectedBrands);


  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    dispatch(searchBrands(searchText));
  }, [searchText]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    dispatch(toggleBrand(value));
  };


  return (
    <> 
    <span className="mb-1 text-gray-500 text-xs font-normal">Brands</span>
    <Card className="mb-2 shadow-lg">
      <SearchInput
        value={searchText}
        onChange={handleSearchChange}
        className="mb-2"
        bgColor="bg-gray-100/50"
      />
      <div className="overflow-auto h-[83px]">
        {getProductIsLoading && <Loading />}
        {filteredBrands.map((brand, index) => (
          <div key={index} className="flex h-6 items-center gap-x-2">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="comments"
              className="text-sm leading-6 font-normal text-gray-900"
            >
              {brand}
            </label>
          </div>
        ))}
      </div>
    </Card>
    </>
  );
};

export default BrandsCard;
