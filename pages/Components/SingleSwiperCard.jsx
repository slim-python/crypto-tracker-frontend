import React from "react";
import Image from "next/image";
import PortfolioIcon from "../../assests/protfolio-icon.svg";
import FireEmojiIcon from "../../assests/fireEmoji.svg";
const SingleSwiperCard = ({ title, desc, image }) => {
  return (
    <>
      <div
        className="flex justify-center items-center space-x-4  rounded-lg p-3 "
        id="SingleSwiperCard"
      >
        <div>
          <Image src={image} alt="Portfolio" />
        </div>
        <div className="text-left">
          <div
            id="PortFolioIcon_title"
            className="text-[#656C7E] flex items-center  "
          >
            {title}
            {title === "Portfolio" ? (
              <Image src={FireEmojiIcon} alt="FireEmoji" className="ml-1" />
            ) : (
              ""
            )}
          </div>
          <div id="PortFolioIcon_desc">{desc}</div>
        </div>
      </div>
    </>
  );
};

export default SingleSwiperCard;
