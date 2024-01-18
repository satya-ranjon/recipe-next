import Link from "next/link";
import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <div className="bg-orange-200 cursor-pointer relative h-60">
        {recipe?.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full"
          />
        )}
        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#0000008e]">
          <div className=" w-full h-full flex justify-center items-center">
            <h1 className=" font-bold text-xl text-white">{recipe?.title}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
