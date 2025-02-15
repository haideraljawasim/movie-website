import React from "react";
import Search from "../ features/search/Search";
function Header() {
  return (
    <div className="w-screen h-20 flex  py-4 items-center bg-gray-800">
      <Search />
    </div>
  );
}

export default Header;
