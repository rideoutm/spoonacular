import React from "react";
import "./CuisineDetails.scss";

// imgs
import backArrow from "../../ASSETS/backArrow.png";

// utils
import { useNavigate } from "react-router-dom";

export default function CuisineDetails({ recipeDetails }) {
  const navigate = useNavigate();

  if (!recipeDetails) return "Loading...";

  return (
    <section className="cuisineDetails">
      <div className="cuisineDetails__name">
        {recipeDetails.list.title}
        <div className="cuisineDetails__back" onClick={() => navigate("/")}>
          <img className="cuisineDetails__back-img" src={backArrow} alt="back button" /> Back
        </div>
      </div>
      <div className="cuisineDetails__details-container">
        <div className="cuisineDetails__left">
          <div className="cuisineDetails__image">
            <img className="cuisineDetails__image-img" src={recipeDetails.list.image} alt="recipe" />
          </div>
        </div>
        <div className="cuisineDetails__right">
          <h2 className="cuisineDetails__sub-header">Health Facts</h2>
          <div className="cuisineDetails__ingred">
            <span className="cuisineDetails__fact">Dairy Free:</span> {recipeDetails.list.dairyFree ? "Yes" : "No"}
          </div>
          <div className="cuisineDetails__ingred">
            <span className="cuisineDetails__fact">Gluten Free:</span> {recipeDetails.list.glutenFree ? "Yes" : "No"}
          </div>
          <div className="cuisineDetails__ingred">
            <span className="cuisineDetails__fact">Ketogenic:</span> {recipeDetails.list.ketogenic ? "Yes" : "No"}
          </div>
          <div className="cuisineDetails__ingred">
            <span className="cuisineDetails__fact">Vegan:</span> {recipeDetails.list.vegan ? "Yes" : "No"}
          </div>
          <div className="cuisineDetails__ingred">
            <span className="cuisineDetails__fact">Vegetarian:</span> {recipeDetails.list.vegetarian ? "Yes" : "No"}
          </div>
          <div className="cuisineDetails__ingred--second">
            <h2 className="cuisineDetails__sub-header">Ingredients</h2>
            <ul>
              {recipeDetails.list.extendedIngredients?.map((el, i) => {
                return (
                  <li key={i} className="cuisineDetails__item">
                    {`${el?.measures?.metric?.amount.toFixed(1) < 1 ? 1 : el?.measures?.metric?.amount.toFixed(0)} ${
                      el?.measures?.metric?.unitShort
                    } ${el.name}`}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="cuisineDetails__cookinst">
        <h2 className="cuisineDetails__sub-header">Cooking Instructions</h2>{" "}
        {!recipeDetails?.list?.instructions
          ? "No instructions provided"
          : recipeDetails?.list?.instructions?.replace(/(<([^>]+)>)/gi, "")}
      </div>
    </section>
  );
}
