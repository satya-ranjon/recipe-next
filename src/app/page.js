"use client";
import RecipeCard from "@/components/recipe/RecipeCard";
import { useGlobalContext } from "@/contexts/store";

export default async function Home() {
  const { recipes } = useGlobalContext();
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
        {recipes.map((item, index) => (
          <RecipeCard key={index} recipe={item} />
        ))}
      </div>
    </>
  );
}
