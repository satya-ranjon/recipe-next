"use client";
import { FaPlus } from "react-icons/fa6";
import Button from "../common/Button";
import Logo from "../common/Logo";
import { useGlobalContext } from "@/contexts/store";

const Navbar = () => {
  const { setIsCreateRecipe } = useGlobalContext();

  return (
    <div className="py-8 flex justify-between items-center w-full">
      <Logo />
      <Button onClick={() => setIsCreateRecipe((prev) => !prev)}>
        <span className=" md:hidden">
          <FaPlus />
        </span>
        <span className=" hidden md:block">Create Recipe</span>
      </Button>
    </div>
  );
};

export default Navbar;
