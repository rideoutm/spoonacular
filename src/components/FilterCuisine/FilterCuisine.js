import React from "react";
import "./FilterCuisine.scss";

// Imgs
import filter from "../../ASSETS/filter.png";

// Components
import FilterCuisineModal from "./FilterCuisineModal";

export default function FilterCuisine({ handleFilterCheckbox, filterIsClicked, setFilterIsClicked }) {
  // Toggle filter modal
  const handleFilterClick = () => {
    setFilterIsClicked(!filterIsClicked);
  };

  return (
    <>
      <div onClick={handleFilterClick} className="filtercuisine">
        <img className="filtercuisine__icon" src={filter} alt="filter icon" /> Filter by cuisine
      </div>
      <FilterCuisineModal
        filterIsClicked={filterIsClicked}
        handleFilterClick={handleFilterClick}
        handleFilterCheckbox={handleFilterCheckbox}
      />
    </>
  );
}
