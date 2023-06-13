import React, { useEffect, useState } from "react";
import Card from "../base/Card";
import SearchInput from "../custom/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loadings/Loading";
import { searchModels, toggleModel } from "@/redux/slices/productsSlice";

const ModelCard = () => {
  const [searchText, setSearchText] = useState("");

  const filteredModels = useSelector((state) => state.products.filteredModels);
  const getProductIsLoading = useSelector(
    (state) => state.products.getProductIsLoading
  );
  const selectedModels = useSelector((state) => state.products.selectedModels);

  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    dispatch(searchModels(searchText));
  }, [searchText]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    dispatch(toggleModel(value));
  };

  return (
    <>
      <span className="mb-1 text-gray-500 text-xs font-normal">Model</span>
      <Card className="shadow-lg">
        <SearchInput
          value={searchText}
          onChange={handleSearchChange}
          className="mb-2"
          bgColor="bg-gray-100/50"
        />
        <div className="overflow-auto h-[83px]">
          {getProductIsLoading && <Loading />}
          {filteredModels.map((model, index) => (
            <div key={index} className="flex h-6 items-center gap-x-2">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                value={model}
                checked={selectedModels.includes(model)}
                onChange={handleCheckboxChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="comments"
                className="text-sm leading-6 font-normal text-gray-900"
              >
                {model}
              </label>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default ModelCard;
