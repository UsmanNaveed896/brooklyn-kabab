// components/Header.jsx
"use client";

import React from "react";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import Img from "../../../public/1.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const baseLink =
    "text-black hover:text-orange-100 transition-colors duration-200 font-medium tracking-wide";
  const active =
    "bg-[#c98d45] text-white";

  return (
    <div className="w-full" style={{ fontFamily: "unbounded" }}>
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="">
              <Image className="" src={Img} alt="logo" />
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-2">
              <a
                href="/"
                className={`${baseLink} ${pathname === "/" ? active : ""} py-12 px-3`}
              >
                HOME
              </a>
              <a
                href="/about-us"
                className={`${baseLink} ${pathname === "/about-us" ? active : ""} py-5 px-1`}
              >
                ABOUT US
              </a>
              <a
                href="/menu"
                className={`${baseLink} ${pathname === "/menu" ? active : ""} py-7 px-2`}
              >
                MENU
              </a>
              <a
                href="/catering"
                className={`${baseLink} ${pathname === "/catering" ? active : ""} py-7 px-2`}
              >
                CATERING SERVICE
              </a>
              <a
                href="/contact-us"
                className={`${baseLink} ${pathname === "/contact-us" ? active : ""} py-7 px-2`}
              >
                CONTACT US
              </a>
              <a
                href="/order-online"
                className={`${baseLink} ${pathname === "/order-online" ? active : ""} py-7 px-2`}
              >
                ORDER ONLINE
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white hover:text-orange-100 transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;