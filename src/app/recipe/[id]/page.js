import React from "react";
import recipes from "../../../../recipe.json";
import Button from "@/components/common/Button";
import Swal from "sweetalert2";
import UpdateRecipe from "@/components/recipe/UpdateRecipe";
import DeleteRecipe from "@/components/recipe/DeleteRecipe";

const RecipeDetails = async ({ params }) => {
  const { id } = params;
  const data = recipes.find((item) => item.id === id);

  return (
    <div>
      <div className="flex flex-col md:flex-row  justify-between gap-4 lg:gap-10">
        {data?.image && (
          <div className="w-full">
            <img
              src={data?.image}
              alt="img"
              className=" w-full max-h-[600px]"
            />
          </div>
        )}
        <div className="w-full">
          <div className=" text-3xl font-semibold mb-2 space-x-3">
            <span> {data.title}</span>
            <UpdateRecipe data={data} />
            <DeleteRecipe id={data.id} />
          </div>
          {data.video && (
            <a href={data.video} target="_blank">
              <Button>See Video</Button>
            </a>
          )}
          <h1 className=" mt-4 text-neutral-600">{data.instruction}</h1>
          <h1 className=" mt-4 font-semibold text-xl">Ingredients : </h1>
          <div className=" flex flex-col gap-2 justify-start items-start">
            {data.ingredients.map((item, index) => (
              <span key={item.id}>
                {index + 1} . {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
