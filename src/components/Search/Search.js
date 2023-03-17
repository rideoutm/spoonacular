import React from "react";
import "./Search.scss";

// Components
import FilterCuisine from "../FilterCuisine/FilterCuisine";

export default function Search({
  getData,
  searchquery,
  setSearchQuery,
  setCuisineIsChecked,
  filterIsClicked,
  setFilterIsClicked,
}) {
  const handleFilterCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCuisineIsChecked((prevState) => [...prevState, value]);
    } else {
      setCuisineIsChecked((prevState) => [...prevState.filter((cuisine) => cuisine !== value)]);
    }
  };

  // Prevent form reloading on submission, initiate GET req for search results.
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    getData(searchquery.query);
  };

  // if the filter modal is open and search btn is clicked, close it
  const closeFilterModalOnSearch = () => {
    if (filterIsClicked) {
      setFilterIsClicked(false);
    }
  };

  return (
    <section className="search">
      <h1 className="search__header">Recipe Search</h1>
      <form className="search__form" onSubmit={formSubmissionHandler}>
        <label htmlFor="searchInput" />
        <div className="search__fields-container">
          <input
            value={searchquery.query}
            onChange={(e) => setSearchQuery({ query: e.target.value })}
            className="search__field"
            type="text"
            id="searchInput"
            placeholder="Search for cuisines..."
          />
          <button onClick={closeFilterModalOnSearch} className="search__btn" type="submit">
            Search
          </button>
        </div>

        <FilterCuisine
          handleFilterCheckbox={handleFilterCheckbox}
          filterIsClicked={filterIsClicked}
          setFilterIsClicked={setFilterIsClicked}
          f
        />
      </form>
    </section>
  );
}
