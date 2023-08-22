import { links } from "@/utils/dashboard/sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navState, pathState } from "../../../atoms/providerState";
import { useRecoilState } from "recoil";
import Button from "@/app/common/button/button-component";

function SideBar() {
  const [pathText, setPathText] = useRecoilState(pathState);
  const [openNav, setOpenNav] = useRecoilState(navState);

  const handleClick = () => {
    console.log("sidebar");
  };

  return (
    <section className="nav-bar w-full h-full py-7 flex flex-col items-center bg-white overflow-y-scroll">
      <div className={`nav-header flex gap-4 items-center`}>
        <Image
          width={50}
          height={50}
          alt="logo"
          src={"/dashboard/logo.png"}
          className="image shadow-md rounded-2xl"
        />
        <h1 className="logo-name text-2xl font-bold">Dabang</h1>
      </div>

      <nav className="navbar-link-wrapper pt-12 ">
        <div className="nav-links flex flex-col gap-4">
          {links?.map((link) => (
            <Link
              key={link?.id}
              href={link?.url}
              onClick={() => setPathText(link?.name)}
              className={`navlink flex gap-4 items-center text-sm font-normal text-text-gray px-4 py-3 hover:bg-[#5D5FEF] hover:rounded-2xl hover:shadow-md hover:text-white hover:font-semi-bold`}
            >
              <link.icon size={25} />
              <h2 className={`link-name `}>{link?.name}</h2>
            </Link>
          ))}
        </div>
      </nav>

      <div className="nav-container relative mt-[30%] m-3 hidden xl:block">
        <Image
          width={230}
          height={250}
          alt="logo"
          src={"/dashboard/background.png"}
          className="image shadow-md object-contain rounded-3xl"
        />

        <div className="sidebar-items absolute top-4  flex flex-col items-center justify-center gap-7 text-white z-[99] ">
          <div className="sidebar-info flex flex-col gap-2 justify-center items-center px-[10%] ">
            <Image
              width={30}
              height={30}
              alt="logo"
              src={"/dashboard/logo.png"}
              className="image shadow-md"
            />
            <h1 className="sidebar-paragraph text-xl font-semibold ">
              Dabang Pro
            </h1>
            <p className="sidebar-paragraph text-xs text-center font-medium ">
              Get access to all fetures on tetumbas
            </p>
          </div>

          <Button
            className="bg-white text-black rounded-3xl px-7 py-3"
            name="Get Pro"
            handleClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
}

export default SideBar;
