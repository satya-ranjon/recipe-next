"use client";

import { createContext, useContext, useEffect, useState } from "react";
import data from "../../recipe.json";
const GlobalContext = createContext({
  isCreateRecipe: false,
});

export const GlobalContextProvider = ({ children }) => {
  const [isCreateRecipe, setIsCreateRecipe] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const initialData = JSON.parse(localStorage.getItem("recipes"));
    if (!(initialData?.length > 0)) {
      localStorage.setItem("recipes", JSON.stringify(data));
    }
    setRecipes(initialData);
  }, [data]);

  const addRecipes = (data) => {
    setRecipes((prev) => [...prev, data]);
  };

  const deleteRecipe = (id) => {
    const initialData = JSON.parse(localStorage.getItem("recipes"));
    const newData = initialData?.filter((item) => item.id !== id);
    localStorage.setItem("recipes", JSON.stringify(newData));
    setRecipes(newData);
  };

  const updateRecipe = (id, data) => {
    const initialData = JSON.parse(localStorage.getItem("recipes"));
    const newData = initialData?.filter((item) => {
      if (item.id === id) {
        {
          item.title = data.title;
          item.ingredients = data.ingredients;
          item.instruction = data.instruction;
          item.video = data.video;
          item.image = data.image;
        }
      }
      return item;
    });
    localStorage.setItem("recipes", JSON.stringify(newData));
    setRecipes(newData);
  };

  const getRecipeById = (id) => {
    return recipes?.find((item) => item.id === id);
  };

  const createRecipe = (data) => {
    const initialData = JSON.parse(localStorage.getItem("recipes"));
    const newData = [
      ...initialData,
      {
        ...data,
        id: Date.now().toString(36) + Math.random().toString(36),
      },
    ];
    localStorage.setItem("recipes", JSON.stringify(newData));
    setRecipes(newData);
  };

  return (
    <GlobalContext.Provider
      value={{
        isCreateRecipe,
        setIsCreateRecipe,
        recipes,
        addRecipes,
        deleteRecipe,
        updateRecipe,
        getRecipeById,
        createRecipe,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
