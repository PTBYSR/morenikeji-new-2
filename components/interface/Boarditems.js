import Link from "next/link";
import React from "react";
import { RiLinkM } from "react-icons/ri";

const Boarditems = ({ date, title, desc, href }) => {
  return (
    <Link href={href}>
      <div className="h-[150px] w-auto md:w-[600px] rounded-md shadow border px-4 py4 flex items-center gap-3 relative">
        {/* <div className='border h-[100px] w-[100px]'>


</div> */}
        <div className="flex flex-col gap-2 ">
          <div className="ml-1 text-xs text-opacity-50 text-black">{date}</div>
          <h1 className="text-3xl ">{title}</h1>
          <div className="w-[90%] text-opacity-50 text-black leading-5">
            {desc}
          </div>
        </div>

        {/* <div className=' border'>
<RiLinkM />

</div> */}
      </div>
    </Link>
  );
};

export default Boarditems;
