import React from "react";
import { LuMenu } from "react-icons/lu";
import { ImSearch } from "react-icons/im";
import { BsBell } from "react-icons/bs";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { navState, pathState } from "../../../atoms/providerState";

function Header() {
  const [pathText, setPathText] = useRecoilState(pathState);
  const [openNav, setOpenNav] = useRecoilState(navState);

  return (
    <section className="header-component flex justify-between px-10 py-7 bg-white">
      <header className="header-title flex gap-4 items-center">
        <LuMenu size={30} onClick={() => setOpenNav(!openNav)} />
        <h1 className="header-highlight text-4xl font-semibold">{pathText}</h1>
      </header>

      <div className="header-right-container flex gap-10">
        <div className="input-wrapper w-[500px] border my-2 rounded-2xl bg-[#F9FAFB] px-3 flex gap-3 items-center">
          <ImSearch size={20} className="text-[#5D5FEF]" />
          <input
            className=" input-container w-full  bg-transparent text-base text-[#737791] outline-none"
            placeholder="Search...."
          />
        </div>

        <div className="languages flex items-center gap-3">
          <Image
            width={24}
            height={24}
            src={"/dashboard/language.png"}
            alt="language"
            className="language-image rounded-[50%]"
          />
          <select className="language-selection bg-transparent outline-none">
            <option>Eng (US)</option>
            <option>Nepali</option>
            <option>Hindi</option>
          </select>
        </div>

        <div className="profile-information flex items-center gap-6">
          <div className="bell-wrapper relative p-3 bg-[#FFFAF1] rounded-lg">
            <BsBell size={19} className="text-[#FFA412]" />
            <div className="w-1.5 h-1.5 rounded-[50%] bg-red-700 absolute top-2 right-2"></div>
          </div>
          <div className="profile-wrapper flex items-center gap-5">
            <Image
              width={60}
              height={60}
              src={"/dashboard/profile.png"}
              alt="language"
              className="language-image rounded-2xl object-contain"
            />
            <div className="profile-info ">
              <div className="flex gap-3">
                {" "}
                <h1 className="profile-name text-base font-medium ">
                  Musfiq{" "}
                </h1>{" "}
                <select className="language-selection bg-transparent outline-none">
                  <option></option>
                  <option>Nepali</option>
                  <option>Hindi</option>
                </select>
              </div>
              <h1 className="profile-admin text-sm font-normal text-[#737791] ">
                Admin
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
