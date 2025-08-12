import React from "react";
import Img from "../../../../public/25.png";
import Img1 from "../../../../public/30.png";
import Image from "next/image";

const MenuSection1 = () => {
  return (
    <div
      className="p-16 bg-center bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <div className="flex justify-center">
        <Image src={Img1} alt="menu" />
      </div>
    </div>
  );
};

export default MenuSection1;
