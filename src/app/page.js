import RecipeCard from "@/components/recipe/RecipeCard";
import recipes from "../../recipe.json";

export default async function Home() {
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

// export const getServerSideProps = async () => {
//   const recipes = prisma.recipe.findMany();
//   return recipes;
// };
