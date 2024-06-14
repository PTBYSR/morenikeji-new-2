"use client"; // This is a client component 👈🏽

import Link from "next/link";
import React , {useState} from "react";
import logo from '@/public/logo.jpg'
import { Fade as Hamburger } from "hamburger-react";
import Image from "next/image";

const Nav = () => {



  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="absolute w-full manrope px-3   pt-2  md:px-9 flex justify-between items-center ">
        <div className="z-20 mt-1">
      <Link href="/">
          <div className="w-12">
          <Image src={logo} />
          </div>
      </Link>
        </div>
      <nav className="    h-[80px] hidden md:flex items-center">
        <ul className="flex gap-10">
          <li>
            <Link href="">My Works</Link>
          </li>
          <li>
            <Link href="">My Blog</Link>
          </li>
          <li>
            <Link href="">Let's talk</Link>
          </li>
        </ul>
      </nav>
      <div   onClick={toggleNavbar} className="block md:hidden z-20      ">
        <Hamburger size={25} />
      </div>
      <nav className="md:hidden flex bg-white absolute w-full left-0 top-0">
        {/* <ul className="flex gap-10 flex-col w-full  px-3 "> */}
        <ul className={` w-full   gap-5 flex flex-col  px-3  mt-20  overflow-hidden transition-all duration-1000 ${isOpen ? 'max-h-screen pb-5 border-b' : 'max-h-0 '}`}>
          <li>
            <Link href="">My Works</Link>
          </li>
          <li>
            <Link href="">My Blog</Link>
          </li>
          <li>
            <Link href="">Let's talk</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
