"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbarmain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full z-10 max-w-[1440px] sticky top-0 mx-auto bg-white">
      <div className="flex items-center justify-between py-[35px] px-[35px] sm:py-6 sm:px-4 lg:px-10">
        <div className="flex  items-center  gap-2 md:gap-10 lg:gap-28">
          <h3 className="font-Montserrat text-[24px] tracking-wider font-semibold text-black">
            Bandage
          </h3>
          <div className="sm:hidden flex gap-6 items-center absolute right-10">
            <Image src={'/searchicon.png'} alt="icon" width={24} height={20} className="h-6  cursor-pointer"></Image>
            <Image src={'/carticon.png'} alt="icon" width={24} height={17} className="h-6  cursor-pointer"></Image>
            <Image src={'/menuicon.png'} alt="icon" width={24} height={14} className="h-3  cursor-pointer" onClick={toggleMenu}></Image>
          </div>
          <ul className="lg:ml-2 sm:gap-3 lg:gap-[24px] hidden sm:flex font-Montserrat font-semibold text-xs md:text-[14px] text-[#737373]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/products">Pages</Link></li>
          </ul>
        </div>
        <div className="hidden sm:flex items-center gap-4 lg:gap-9">

          <div className="flex items-center gap-2">
            <Image src={'/vector.png'} alt="user" width={12} height={12} />
            <span className="font-Montserrat text-[#23A6F0] cursor-pointer text-[14px] font-semibold">
              Login / Register
            </span>
          </div>


          <ul className="flex gap-2 lg:gap-10">
            <li>
              <Image src={'/icn settings icn-xs (6).png'} alt="search" width={16} height={16} />
            </li>
            <li>
              <Image src={'/icn settings icn-xs (7).png'} alt="cart" width={16} height={16} />
            </li>
            <li>
              <Image src={'/icn settings icn-xs (8).png'} alt="mail" width={16} height={16} />
            </li>
          </ul>
        </div>
      </div>


      <div
        className={`${isMenuOpen ? "flex" : "hidden"
          } lg:hidden flex-col items-center text-slate-400   py-6 gap-6`}
      >
        <ul className="mt-8 font-Montserrat text-[32px]  font-thin tracking-wider flex flex-col gap-6 items-center">
          <li className="text-black"><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/products">Pages</Link></li>
          <div className="flex items-center gap-2">
            <Image src={'/vector.png'} alt="user" width={24} height={24} />
            <span className="font-Montserrat text-[#23A6F0] cursor-pointer text-3xl font-semibold">
              Login / Register   
            </span>
          </div>
          <li> <ul className="space-y-6">
            <li>
              <Image src={'/icn settings icn-xs (6).png'} alt="search" width={24} height={24} />
            </li>
            <li>
              <Image src={'/icn settings icn-xs (7).png'} alt="cart" width={24} height={24} />
            </li>
            <li>
              <Image src={'/icn settings icn-xs (8).png'} alt="mail" width={24} height={24} />
            </li>
          </ul></li>
        </ul>


        <button
          onClick={toggleMenu}
          className="text-white font-Montserrat text-[14px]"
        >
          Close Menu
        </button>
      </div>
    </nav>
  );
}
