"use client";

import Image from "next/image";
import React from "react";
import { Great_Vibes } from "next/font/google";
import { FiChevronRight } from "react-icons/fi";
import Img from "../../../../public/31.png";
import Img1 from "../../../../public/32.png";
import Img2 from "../../../../public/33.png";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const defaultSmoothies = [
  { title: "Peanut Banana", desc: "Peanut Butter, Milk, Banana, Dates, Milk" },
  { title: "Mango Madness", desc: "Mango, Banana, Milk, Dates, Vimto" },
  { title: "Strawberry Banana", desc: "Strawberry, Banana, Milk" },
  { title: "Sweet Citrus", desc: "Pineapple, Orange, Lime, Banana" },
  { title: "Very Berry", desc: "Strawberry, Mixed Berry, Banana Milk" },
  { title: "Healthy Green", desc: "Spinach, Banana, Milk, Honey, Dates" },
  { title: "Pina Colada", desc: "Pineapple, Coconut, Coconut Water, Milk" },
  { title: "Peanut Banana", desc: "Peanut Butter, Milk, Banana, Dates, Milk" },
];

const defaultJuices = [
  { title: "Oranger", desc: "Orange, Carrot, Ginger, Lemon" },
  { title: "Green & Ginger", desc: "Apple, Ginger, Cucumber, Lime, Celery" },
  { title: "Mint Lemonade", desc: "Lemon, Lime, Mint, Milk Or Water" },
  { title: "Lemonade", desc: "Lemon, Lime, Sweetener" },
  { title: "OJ Citrus", desc: "Pineapple, Orange, Lime, Ginger" },
  { title: "Glowing Skin", desc: "Cucumber, Orange, Apple, Ginger, Lemon" },
  { title: "Feel The Beet", desc: "Beets, Apple, Carrot, Orange" },
  { title: "Sunrise Refresher", desc: "Orange, Pineapple, Carrot, Ginger" },
];

const MenuSection2 = ({
  leftPatternSrc,
  rightPatternSrc,
  bottomLeftImageSrc,
  bottomRightImageSrc,
  caterIcons = [],
  smoothies = defaultSmoothies,
  juices = defaultJuices,
  smallPriceLabel = "SM $7",
  largePriceLabel = "LG $8",
}) => {
  return (
<section
  className="w-full bg-[#f3e5d7] text-[#6a4a2f]"
  style={{ fontFamily: "unbounded" }}
>
  {/* Outer frame */}
  <div className="mx-auto max-w-[1050px] border border-[#d0b391] shadow-sm">
    {/* Top patterned band */}
    <div className="relative">
      <div className="absolute inset-y-0 left-0 w-16 md:w-20 hidden md:block">
        <Image src={Img} alt="Left pattern" fill className="object-cover" sizes="20vw" />
      </div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-20 hidden md:block">
        <Image src={Img1} alt="Right pattern" fill className="object-cover" sizes="20vw" />
      </div>

      {/* Top menu content (md and up) */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-24">
        <div className="pt-6 sm:pt-8 pb-4 sm:pb-6 text-center hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-bold tracking-wide text-[#D89C53]">
                SMOOTHIES
              </h2>
              <p className={`${greatVibes.className} text-[#b88647] text-lg sm:text-xl mt-1`}>
                Add Protein $2
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-bold tracking-wide text-[#D89C53]">
                FRESH JUICE
              </h2>
              <p className={`${greatVibes.className} text-[#b88647] text-lg sm:text-xl mt-1`}>
                Add Protein $2
              </p>
            </div>
          </div>

          {/* Divider with emblem */}
          <div className="relative my-3 sm:my-4">
            <div className="h-px bg-[#caa77a]" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#f3e5d7] px-3 text-[#D89C53]">
              <span className="inline-block text-xl sm:text-2xl leading-none">✺</span>
            </div>
          </div>
        </div>

        {/* Menu grid (two columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="border-t-2 border-r-0 md:border-r-2 border-[#C98D45]">
            {/* Mobile-only Smoothies heading */}
            <div className="md:hidden text-center py-3">
              <h2 className="text-[24px] font-bold tracking-wide text-[#D89C53]">SMOOTHIES</h2>
              <p className={`${greatVibes.className} text-[#b88647] text-base mt-1`}>Add Protein $2</p>
              <div className="mt-3 h-px bg-[#caa77a]" />
            </div>

            {smoothies.map((item, idx) => (
              <div key={idx} className="border-b-2 border-[#C98D45] py-3 sm:py-4 px-2 sm:px-0">
                <div className="font-semibold text-[#5a4431] text-base sm:text-[17px]">
                  {item.title}
                </div>
                <div className="text-sm sm:text-[15px] text-[#7a6a58] mt-1">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-[#C98D45] pr-0 sm:pr-2">
            {/* Mobile-only Fresh Juice heading */}
            <div className="md:hidden text-center py-3">
              <h2 className="text-[24px] font-bold tracking-wide text-[#D89C53]">FRESH JUICE</h2>
              <p className={`${greatVibes.className} text-[#b88647] text-base mt-1`}>Add Protein $2</p>
              <div className="mt-3 h-px bg-[#caa77a]" />
            </div>

            {juices.map((item, idx) => (
              <div key={idx} className="border-b-2 border-[#C98D45] py-3 sm:py-4 px-2 sm:px-0 text-end">
                <div className="font-semibold text-[#5a4431] text-base sm:text-[17px]">
                  {item.title}
                </div>
                <div className="text-sm sm:text-[15px] text-[#7a6a58] mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section with illustration/image */}
      <div className="relative px-4 sm:px-6 md:px-10 lg:px-14 pb-6 sm:pb-8 pt-4 sm:pt-6">
        <div className="flex justify-center">
          {/* Responsive image: fills width up to 850px, keeps aspect ratio */}
          <Image
            className="w-full max-w-[850px] h-auto rounded-sm"
            src={Img2}
            alt="abc"
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 850px"
          />
        </div>

        {/* Footer line */}
        <div className="mt-6 sm:mt-8 text-center text-[#6a4a2f] text-sm sm:text-base">
          6823 -25 5th Ave, Brooklyn, NY 11220
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default MenuSection2;
