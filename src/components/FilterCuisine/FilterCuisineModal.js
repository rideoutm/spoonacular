import React from "react";
import { cuisines } from "./FilterOptions";

// Imgs
import closeBtn from "../../ASSETS/close.png";

export default function FilterCuisineModal({ filterIsClicked, handleFilterClick, handleFilterCheckbox }) {
  return (
    <div className={filterIsClicked ? "filtercuisine__container" : "filtercuisine__container--hidden"}>
      <img onClick={handleFilterClick} className="filtercuisine__closebtn" src={closeBtn} alt="close modal button" />
      {cuisines.map((el, i) => {
        return (
          <div key={i} className="filtercuisine__item">
            <label className="filtercuisine__item-label" htmlFor={el.for}>
              {el.name}
            </label>
            <input
              onChange={handleFilterCheckbox}
              className="filtercuisine__checkbox"
              type="checkbox"
              id={el.for}
              value={el.value}
            />
          </div>
        );
      })}
    </div>
  );
}
