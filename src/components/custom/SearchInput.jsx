import React from "react";

const SearchInput = ({className, bgColor, ...props}) => {
  return (
    <div className={`relative ${className}`}>
      <input
      data-testid="searchInput"
        className={`relative flex items-center  placeholder-gray-500 placeholder-opacity-50 placeholder:text-sm placeholder:font-light rounded-sm w-full py-2 px-3 text-gray-700 ${bgColor} leading-tight focus:outline-none focus:shadow-outline pl-10`}
        id="search-input"
        type="text"
        placeholder="Search"
        {...props}
      />
      <div className="absolute top-0 translate-y-1.5 start-3">
        <i className="fa-regular fa-search text-sm text-gray-400" />
      </div>
    </div>
  );
};

export default SearchInput;
