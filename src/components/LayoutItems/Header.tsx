"use client";

import { headerItems } from "@/constants/headerItems";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HeaderMenu } from ".";
import { Logo } from "../../../public/svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-7xl m-auto px-4 py-4 bg-white">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} alt="pet+ logo" width={60} height={60} />
        </Link>
        <div className="sm:flex items-center justify-center hidden gap-10">
          {headerItems.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.title}
            </Link>
          ))}
          <Link
            href={"/login"}
            className="flex items-center justify-center cursor-pointer rounded-sm font-regular text-black hover:bg-blue-500 bg-sky-400 w-full p-4"
          >
            LOGIN
          </Link>
        </div>
        <HeaderMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
