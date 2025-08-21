import React from "react";
import Img from "../../../public/13.png";
import Img1 from "../../../public/14.png";
import Img2 from "../../../public/18.png";
import Img3 from "../../../public/15.png";
import Img4 from "../../../public/16.png";
import Img5 from "../../../public/17.png";

import Image from "next/image";
const Section4 = () => {
  return (
    <div
      className="bg-cover bg-center px-4 sm:px-8 md:px-14 lg:px-24 xl:px-40 2xl:px-60 pt-10 md:pt-12 pb-16 md:pb-28 min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]"
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <div
        className="relative z-10 pt-16 pb-32 md:px-12 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Img1.src})` }}
      >
        {/* Title */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl text-white uppercase mb-6 sm:mb-10 md:mb-12">
          Fresh And Delicious
        </h2>

        {/* Food Items Grid */}
        <div className="flex md:flex-row flex-col justify-center gap-8 md:gap-6">
          {/* Mix Grill */}
          <div className="flex flex-col items-center w-full md:w-52 lg:w-[400px]">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={Img2}
                alt="Mix Grill"
                width={250}
                height={200}
                className="object-cover w-[250px] h-[250px] md:h-[300px] md:w-[350px]"
                
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="mt-2 bg-yellow-700/80 text-white py-1 px-3 rounded-b-md text-center uppercase text-xs sm:text-sm md:text-base">
              Mix Grill
            </div>
          </div>

          {/* Falafel */}
          <div className="flex flex-col items-center  w-full md:w-52 lg:w-[400px]">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={Img3}
                alt="Falafel"
                width={224}
                height={160}
                className="object-cover w-[250px] h-[250px] md:h-[300px] md:w-[350px]"
               
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="mt-2 bg-yellow-700/80 text-white py-1 px-3 rounded-b-md text-center uppercase text-xs sm:text-sm md:text-base">
              Falafel
            </div>
          </div>

          {/* Massloug Lamb */}
          <div className="flex flex-col items-center  w-full md:w-52 lg:w-[400px]">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={Img4}
                alt="Massloug Lamb"
                width={224}
                height={160}
                className="object-cover w-[250px] h-[250px] md:h-[300px] md:w-[350px]"
                
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="mt-2 bg-yellow-700/80 text-white py-1 px-3 rounded-b-md text-center uppercase text-xs sm:text-sm md:text-base">
              Massloug Lamb
            </div>
          </div>

          {/* Baba Ghanoush */}
          <div className="flex flex-col items-center  w-full md:w-58 lg:w-[400px]">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={Img5}
                alt="Baba Ghanoush"
               
                className="object-cover   w-[250px] h-[250px] md:h-[300px] md:w-[350px]"
             
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="mt-2 bg-yellow-700/80 text-white py-1 px-3 rounded-b-md text-center uppercase text-xs sm:text-sm md:text-base">
              Baba Ghanoush
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
