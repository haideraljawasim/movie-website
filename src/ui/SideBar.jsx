import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-[14rem] h-screen bg-gray-800 flex flex-col pl-10 sticky left-0 z-50 text-white ">
      <div className=" top-4 absolute flex flex-col gap-10 h-full">
        {" "}
        <span className="text-4xl font-black text-blue-700   font-robot">
          <Logo />
        </span>
        <NavLink to={"/pagenotfound"}>New Realeses</NavLink>
      </div>
    </div>
  );
}

export default SideBar;
