import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function Layout() {
  return (
    <>
      <div className="w-screen h-screen flex overflow-hidden ">
        <div className="w-[50rem]">
          <SideBar />
        </div>

        <div className="flex flex-col max-w-full">
          <Header />
          <main className="">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;
