import React from "react";
import Image from "next/image";
import Logo from "../../assests/logo.svg";
import burgerIcon from "../../assests/burger-icon.svg";
import searchIcon from "../../assests/search-icon.svg";
const Header = () => {
  return (
    <>
      <main>
        <div className="flex sm:justify-between items-center w-full h-12  sm:px-[179px]">
          {/* burger icon for mobile */}
          <div className="mr-3 sm:hidden ml-5 sm:ml-0">
            <Image src={burgerIcon} alt="burger icon" />
          </div>
          {/* logo div */}
          <div>
            <Image src={Logo} alt="logo" width={100} height={100} />
          </div>

          {/* search and burger icon div */}
          <div className="hidden sm:flex ">
            <div className="mr-3">
              <Image src={burgerIcon} alt="burger icon" />
            </div>
            <div className="">
              <Image src={searchIcon} alt="burger icon" />
            </div>
          </div>
        </div>
        <div>
          {/* <div className="h-1 w-full bg-red-500"></div> */}
          <hr className="shadow-2xl w-full " />
        </div>
      </main>
    </>
  );
};

export default Header;
