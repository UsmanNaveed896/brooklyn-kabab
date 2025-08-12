import React from "react";
import Img from "../../../../public/34.png";

const ContactSection1 = () => {
  return (
    <div
      className="min-h-[400px] w-full bg-center"
      style={{
        backgroundImage: `url(${Img.src})`,
        fontFamily: "unbounded",
      }}
    >
      <div className="flex justify-center items-center ">
        <div>
          <h1 className="text-xl pt-36 md:text-3xl md:text-start text-center lg:text-5xl font-semibold leading-tight tracking-tight mb-6 text-white">
            Contact Us
          </h1>
         
        </div>
      </div>
    </div>
  );
};

export default ContactSection1;
