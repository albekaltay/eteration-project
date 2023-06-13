import React, { useState } from "react";
import SearchInput from "../custom/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "@/redux/slices/productsSlice";
import { useEffect } from "react";
import Link from "next/link";

const AppContainer = ({
  children,
  rightToolbar,
  leftToolbar,
  hiddenSmallScreen = true,
}) => {
  const [searchText, setSearchText] = useState("");

  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    dispatch(searchProducts(searchText));
  }, [searchText]);

  return (
    <>
      <nav className="bg-[#2A59FE]">
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex justify-between h-16 items-center">
            <div className="w-1/2 flex flex-row items-center justify-between">
              <Link href="/">
                <span className=" text-white font-bold">Eteration</span>
              </Link>
              <div className="w-8/12 hidden md:block px-7  ">
                <SearchInput value={searchText} onChange={handleSearchChange} />
              </div>
            </div>
            <ul className="w-1/2 flex justify-end pr-10">
              <li className="md:hidden mr-4">
                <i className="fa-regular fa-search mr-1 text-white" />{" "}
              </li>
              <li className="flex flex-row mr-4 items-center">
                <i className="fa-regular fa-briefcase mr-1 text-white" />{" "}
                <span className="text-white text-sm font-thin hidden sm:block">
                  {totalPrice.toLocaleString()} ₺
                </span>
              </li>
              <li className="flex flex-row items-center">
                <i className="fa-regular fa-user mr-2 text-white" />
                <span className="text-white text-sm font-thin hidden sm:block">
                  Kerem
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-7xl  px-2 xl:px-0 flex flex-col sm:flex-row py-4 min-h-[700px]">
        {rightToolbar && (
          <div className="min-w-[220px] hidden lg:block">{rightToolbar}</div>
        )}
        <div className="w-full sm:px-6 mb-4 sm:mb-0">{children}</div>
        {leftToolbar && (
          <div
            className={`min-w-[213px] px-6 sm:px-0 ${
              hiddenSmallScreen && "hidden"
            } md:block`}
          >
            {leftToolbar}
          </div>
        )}
      </div>
    </>
  );
};

export default AppContainer;
