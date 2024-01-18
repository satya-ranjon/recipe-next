import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { lobster } from "@/styles/font";

const Logo = () => {
  return (
    <Link href="/">
      <div className=" flex gap-2 items-center justify-start">
        <Image src={logo} width={50} height={50} alt="logo" />
        <span
          className={` text-2xl md:text-3xl text-orange-300 ${lobster.className}`}>
          RecipeRealm
        </span>
      </div>
    </Link>
  );
};

export default Logo;
