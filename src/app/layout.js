import { inter } from "@/styles/font";
import "./globals.css";
import { GlobalContextProvider } from "@/contexts/store";
import Navbar from "@/components/navbar";
import CreateRecipe from "@/components/recipe/CreateRecipe";

export const metadata = {
  title: "RecipeRealm",
  description:
    "RecipeRealm is a recipe application this application provide a multiple recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <div className="container mx-auto px-5 md:px-10">
            <Navbar />
            {children}
            <CreateRecipe />
          </div>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
