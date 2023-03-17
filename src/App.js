import Homepage from "./pages/Homepage";
import CuisineDetails from "./components/CuisineDetails/CuisineDetails";

//utils
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [recipeDetails, setRecipeDetails] = useState({ list: [] });
  // fetch detailed recipe info
  const getDataDetails = async (id) => {
    try {
      let response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=1f6183fb1ab64639b25c503248c7da3b`,
        { "Content-Type": "application/json" }
      );

      if (!response.ok) {
        throw new Error("Error fetching, status: ", response.status);
      }
      // console.log("RESPONSE: ", response);
      let data = await response.json();

      setRecipeDetails({ list: data });
      console.log("DETAILS: ", recipeDetails.list);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage getDataDetails={getDataDetails} recipeDetails={recipeDetails} />} />
          <Route path="/recipe/:id" element={<CuisineDetails recipeDetails={recipeDetails} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
