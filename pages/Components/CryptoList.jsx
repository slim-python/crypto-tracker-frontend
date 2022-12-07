import React from "react";
import TableComponent from "./TableComponent";
import Image from "next/image";
import StarIcon from "../../assests/StarIcon.svg";
const CryptoList = () => {
  return (
    <>
      <div className="mx-4 mt-8 sm:mx-44">
        <h1 className="text-left text-xl font-semibold font-Inter">
          Top 100 Cryptocurrencies by Market Cap
        </h1>
      </div>
      <div className="px-3 sm:px-36 ">
        <div className="hidden sm:flex justify-start items-center h-8 my-3 space-x-5">
          <div className="h-8 w-auto  flex justify-start items-center bg-[#EFF2F5] space-x-2 px-4 rounded-lg">
            <Image src={StarIcon} />
            <div className="h-8  w-auto flex justify-center items-center font-semibold text-xs leading-[18px] rounded-lg">
              Faviourates
            </div>
          </div>
          <div className="h-8 bg-[#EFF2F5] w-auto px-4 flex justify-center items-center font-semibold text-xs leading-[18px] rounded-lg text-[#3861FB]">
            CryptoCurrencies
          </div>
          <div className="h-8 bg-[#EFF2F5] w-auto px-4 flex justify-center items-center font-semibold text-xs leading-[18px] rounded-lg text-[#5B667C]">
            DeFi
          </div>
          <div className="h-8 bg-[#EFF2F5] w-auto px-4 flex justify-center items-center font-semibold text-xs leading-[18px] rounded-lg text-[#5B667C]">
            NFTs & Collectibles
          </div>
        </div>
        <TableComponent />
      </div>
    </>
  );
};

export default CryptoList;
