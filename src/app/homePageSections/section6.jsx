import React from "react";
import Img from "../../../public/5.png";
import Img1 from "../../../public/6.png";
import Img2 from "../../../public/20.png";
import Img3 from "../../../public/22.png";
import Img4 from "../../../public/21.png";
import Img5 from "../../../public/47.png";
import Img6 from "../../../public/48.png";
import Image from "next/image";

const Section6 = () => {
  return (
    <div
      className="main relative  md:bg-white"
      style={{ fontFamily: "unbounded" }}
    >
      <div className=" justify-between absolute w-full hidden md:flex">
        <Image src={Img} alt="left" />
        <Image src={Img1} alt="left" />
      </div>
      <div>
        <Image className="w-full md:hidden block" src={Img5} alt="left" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center  gap-6 w-full pb-16 pt-20  px-4">
        {/* Hummus Section */}
        <div className="flex-1 md:max-w-sm max-w-full text-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={Img2}
              alt="Hummus"
              width={300}
              height={200}
              className="object-cover w-[250px] h-[250px] md:h-[300px] md:w-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>

        {/* Kebab Section */}
        <div className="flex-1 md:max-w-sm max-w-full text-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={Img3}
              alt="Kebab"
              width={300}
              height={200}
              className="object-cover w-[250px] h-[250px] md:h-[300px] md:w-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>

        {/* Shawarma Section */}
        <div className="flex-1 md:max-w-sm max-w-full text-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={Img4}
              alt="Shawarma"
              width={300}
              height={200}
              className="object-cover w-[250px] h-[250px] md:h-[300px] md:w-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
      <div>
        <Image className="w-full md:hidden block" src={Img6} alt="left" />
      </div>
    </div>
  );
};

export default Section6;
