import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="px-9 flex justify-between items-center ">
      <div>
        <logo>logo</logo>
      </div>
      <nav className=" h-[80px] flex items-center">
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
    </div>
  );
};

export default Nav;
