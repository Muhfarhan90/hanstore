// import React from "react";
import search from "../../public/search.svg";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="What are you looking for ?"
        className="px-4 py-2 rounded-lg bg-gray-100 border border-black w-[300px]"
      />
      <button className="absolute top-2.5 right-3">
        <img src={search} alt="search-icon" className="text-black" />
      </button>
    </div>
  );
};

export default SearchBar;
