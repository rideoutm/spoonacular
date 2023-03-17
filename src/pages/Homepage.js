import React from "react";

// Components
import Search from "../components/Search/Search";
import SearchResultsCont from "../components/SearchResultsCont/SearchResultsCont";

// Utils
import { useState } from "react";

// main key 69d0850be8cd47da9bf6d59767cf1c1f
// alt key 1f6183fb1ab64639b25c503248c7da3b

export default function Homepage({ getDataDetails, recipeDetails }) {
  // State for search query input value
  const [searchQuery, setSearchQuery] = useState({ query: "", list: [] });

  // State to manage cuisine filter checkbox state
  const [cuisineIsChecked, setCuisineIsChecked] = useState([]);

  // state to toggle filter modal
  const [filterIsClicked, setFilterIsClicked] = useState(false);

  // Render "no results found" if data array === 0
  const [noResultsFound, setNoResultsFound] = useState(false);

  // Fetch search data
  const getData = async (enteredValue) => {
    try {
      let encodedSearchQuery = encodeURI(enteredValue);
      let response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${encodedSearchQuery}&cuisine=${
          cuisineIsChecked ? cuisineIsChecked.join(",") : null
        }&number=50&apiKey=69d0850be8cd47da9bf6d59767cf1c1f`,
        { "Content-Type": "application/json" }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Error Fetching, status: ", response.status);
      }

      let data = await response.json();
      let { results } = data;

      if (results.length === 0) {
        setNoResultsFound(true);
      } else {
        setNoResultsFound(false);
      }

      setSearchQuery({ query: enteredValue, list: results });
      window.sessionStorage.setItem("search", JSON.stringify(results));
    } catch (error) {
      console.error("Error caught: ", error);
    }
  };

  return (
    <div>
      <Search
        getData={getData}
        searchquery={searchQuery}
        setSearchQuery={setSearchQuery}
        cuisineIsChecked={cuisineIsChecked}
        setCuisineIsChecked={setCuisineIsChecked}
        filterIsClicked={filterIsClicked}
        setFilterIsClicked={setFilterIsClicked}
      />
      <SearchResultsCont
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        recipeDetails={recipeDetails}
        getDataDetails={getDataDetails}
        noResultsFound={noResultsFound}
      />
    </div>
  );
}
