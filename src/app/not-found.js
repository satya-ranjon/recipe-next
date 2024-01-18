import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full flex justify-center items-center h-[600px] flex-col text-orange-300  font-bold">
      <h1 className="text-[8rem] xl:text-[10rem] ">404</h1>
      <h1 className="text-orange-400 text-xl">PAGE NOT FOUND</h1>
      <div className=" mt-4">
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
