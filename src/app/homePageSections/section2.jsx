import React from "react";
import Img from "../../../public/5.png";
import Img1 from "../../../public/6.png";
import Img2 from "../../../public/7.png";
import Img3 from "../../../public/8.png";
import Img4 from "../../../public/9.png";

import Image from "next/image";

const Section2 = () => {
  return (
    <div className="main relative bg-black/70 md:bg-white" style={{fontFamily:"unbounded"}}>
      <div className="justify-between absolute w-full hidden md:flex">
        <Image className="" src={Img} alt="left" />
        <Image src={Img1} alt="left" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center  gap-6 w-full pb-16 pt-20  px-4">
        {/* Hummus Section */}
        <div className="flex-1 max-w-xs text-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={Img2} 
              alt="Hummus"
              width={300}
              height={200}
              className="object-cover w-full h-[250x]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="mt-2 bg-yellow-600 text-white font-bold py-2 px-4 rounded-b-lg shadow-md">
            HUMMUS
          </div>
        </div>

        {/* Kebab Section */}
        <div className="flex-1 max-w-xs text-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
               src={Img3} 
              alt="Kebab"
              width={300}
              height={200}
              className="object-cover w-full h-[250x]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="mt-2 bg-yellow-600 text-white font-bold py-2 px-4 rounded-b-lg shadow-md">
            KEBAB
          </div>
        </div>

        {/* Shawarma Section */}
        <div className="flex-1 max-w-xs text-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
               src={Img4} 
              alt="Shawarma"
              width={300}
              height={200}
              className="object-cover w-full h-[250x]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="mt-2 bg-yellow-600 text-white font-bold py-2 px-4 rounded-b-lg shadow-md">
            SHAWARMA
          </div>
        </div>
        </div>
    </div>
  );
};

export default Section2;
