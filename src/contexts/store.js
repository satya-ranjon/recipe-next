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

  return (
    <GlobalContext.Provider
      value={{
        isCreateRecipe,
        setIsCreateRecipe,
        recipes,
        addRecipes,
        deleteRecipe,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
