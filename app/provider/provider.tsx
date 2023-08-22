"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import SideBar from "../component/dashboard/side-bar";
import Header from "../component/dashboard/header";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <div className="box-container grid grid-cols-12  w-full h-screen bg-background-color  overflow-hidden ">
        <div className="first-container hidden lg:block col-span-2 h-full overflow-y-auto">
          <SideBar />
        </div>
        <div className="second-container col-span-12 lg:col-span-10 grid grid-rows-12 h-screen overflow-hidden ">
          <div className="row-span-1">
            <Header />
          </div>
          <div className="p-7 row-span-10 overflow-y-auto">{children}</div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default Provider;
