"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  isCreateRecipe: false,
});

export const GlobalContextProvider = ({ children }) => {
  const [isCreateRecipe, setIsCreateRecipe] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const addRecipes = (data) => {
    setRecipes((prev) => [...prev, data]);
  };

  return (
    <GlobalContext.Provider
      value={{
        isCreateRecipe,
        setIsCreateRecipe,
        recipes,
        addRecipes,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
