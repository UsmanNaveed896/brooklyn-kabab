import React from "react";
import Img from "../../../../public/24.png";
const AboutSection1 = () => {
  return (
    <div
      className="min-h-[400px] w-full bg-center"
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <div className="flex justify-center items-center px-4">
        <h1 className="text-2xl  md:text-3xl lg:text-5xl font-semibold leading-tight tracking-tight text-center md:text-start text-white pt-32 md:pt-32 lg:pt-40 mb-6">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutSection1;
