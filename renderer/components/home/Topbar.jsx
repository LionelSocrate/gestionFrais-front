import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";

export default function Topbar({}) {
  // const [query, setQuery] = useState("");
  // const handleInput = (e) => {
  //   setQuery(e.target.value);
  //   onSearch(e.target.value);
  // };
  return (
    <div className=" w-full flex items-center justify-between px-12 bg-[var(--white)]  py-4">
      <div className=" flex items-center gap-2 cursor-pointer">
        <Link href="/" className=" flex items-center gap-2">
          <div className=" flex items-center gap-2">
            <p className=" uppercase font-extrabold text-xl text-green-400">
              Eni <span className=" uppercase text-xl text-blue-400">Paye</span>{" "}
            </p>
          </div>
        </Link>
      </div>

      <div className=" relative z-10  rounded-full overflow-hidden  ">
        <input
          type="search"
          // onInput={handleInput}
          className=" w-[22rem] outline-none rounded-full border-none bg-[rgb(247,247,247)]  py-2 px-5 placeholder:font-extralight"
          placeholder="recherche..."
        />
        <div className=" absolute top-0 right-0 flex items-center justify-center h-full px-2 bg-orange-300">
          <HiOutlineSearch className=" text-white  font-bold" size={"1.2rem"} />
        </div>
      </div>
      <div className=" flex items-center gap-3  ">
        <div className="  w-10 h-10 rounded-full    ">
          <img
            src={"/images/eniLogo.jpg"}
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col max-w-[10rem]">
          <p className={"font-bold whitespace-nowrap overflow-hidden"}>
            Eni Fianarantsoa
          </p>
          <p className="text-[var(--gray-text)] whitespace-nowrap overflow-hidden font-light text-sm">
            enifianarantsoa@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
