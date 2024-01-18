"use client";

import { useState } from "react";
import ingredients from "../../../ingredients.json";
import InputField from "../common/InputField";
import Select from "../common/Select";
import Button from "../common/Button";
import Swal from "sweetalert2";
import Modal from "../common/Modal";
import { FaEdit } from "react-icons/fa";

export default function UpdateRecipe({ data }) {
  const [recipe, setRecipe] = useState(data);
  const [isUpdateRecipe, setIsUpdateRecipe] = useState(false);

  const handleUpdateRecipe = () => {
    setIsUpdateRecipe((prev) => !prev);
  };

  const handleInputData = ({ target: { name, value } }) => {
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleIngredientSelect = (data) => {
    setRecipe((prev) => ({ ...prev, ingredients: data }));
  };

  const showError = (field) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: `Recipe ${field} is required!`,
      showConfirmButton: false,
      iconColor: "#fb923c",
      timer: 1500,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recipe.title) {
      showError("title");
      return;
    } else if (!recipe.ingredients.length > 0) {
      showError("ingredients");
      return;
    } else if (!recipe.instruction) {
      showError("instruction");
      return;
    }

    console.log(recipe);
  };

  return (
    <>
      <Button onClick={handleUpdateRecipe}>
        <span className=" md:hidden text-xl">
          <FaEdit />
        </span>
        <span className=" hidden md:block text-lg font-normal">Edit</span>
      </Button>
      <Modal
        title="Create a Recipe"
        isOpen={isUpdateRecipe}
        closeFn={handleUpdateRecipe}>
        <div className="py-2">
          <form onSubmit={handleSubmit} className=" space-y-2">
            <InputField
              label="Title"
              value={recipe.title}
              onChange={handleInputData}
              name="title"
              placeholder="input the recipe title"
            />

            <Select
              label="Select ingredients"
              initialData={ingredients}
              getSelectedData={handleIngredientSelect}
              initialSelectedData={recipe.ingredients}
            />

            <InputField
              textarea={true}
              label="Instruction"
              value={recipe.instruction}
              onChange={handleInputData}
              name="instruction"
              placeholder="input the recipe instruction"
            />

            <InputField
              label="Image Url (optional)"
              value={recipe.image}
              onChange={handleInputData}
              name="image"
              placeholder="input the recipe image url"
            />

            <InputField
              label="Video Url (optional)"
              value={recipe.video}
              onChange={handleInputData}
              name="video"
              placeholder="input the recipe video url"
            />
            <Button type="submit" className="w-full" variant="contained">
              <div className=" flex justify-center gap-3 items-center w-full text-lg ">
                Update Recipe
              </div>
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
