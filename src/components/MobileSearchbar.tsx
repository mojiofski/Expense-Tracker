"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const MobileSearchbar = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      {}
      <div className="flex w-full">
        <div className="flex w-full">
          <form className="relative flex w-full overflow-hidden">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جست و جو"
              className="w-full p-2 border-2 border-purple-500 focus:outline-0 focus:border-2  focus:border-purple-500 bg-gray-300 rounded-lg text-sm overflow-hidden"
            />
            <div className="absolute rounded-lg top-0 flex items-center justify-center left-0 text-lg w-12 h-10  bg-purple-500 overflow-hidden text-white ">
              <FaSearch />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MobileSearchbar;
