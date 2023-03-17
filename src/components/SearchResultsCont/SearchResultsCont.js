import React from "react";
import "./SearchResultsCont.scss";

// components
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Pagination from "../Pagination/Pagination";

// utils
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SearchResultsCont({ searchQuery, getDataDetails, noResultsFound, setSearchQuery }) {
  const navigate = useNavigate();

  // Navigate to details page onClick, fetch details data.
  const handleNavigateAndFetch = (id) => {
    navigate(`/recipe/${id}`);
    getDataDetails(id);
  };

  // retrieve search results from session storage on render
  useEffect(() => {
    setSearchQuery({ list: JSON.parse(window.sessionStorage.getItem("search")) });
  }, []);

  // Pagination states
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination values
  const IndexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = IndexOfLastPost - postsPerPage;
  const currentPosts = searchQuery?.list?.slice(indexOfFirstPost, IndexOfLastPost);

  // update page number onClick
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!currentPosts) return <LoadingSpinner />;

  return (
    <>
      <main className="searchResultsCont">
        <div className="searchResultsCont__inner">
          {noResultsFound ? (
            <div className="searchResultsCont__not-found">
              <p>No Results Found.</p> Please adjust your filters or try another phrase.
            </div>
          ) : (
            currentPosts.map((el) => {
              return (
                <div onClick={() => handleNavigateAndFetch(el.id)} className="searchResultsCont__item" key={el.id}>
                  <div className="searchResultsCont__title">{el.title}</div>
                  <img className="searchResultsCont__img" src={el.image} alt="recipe image" />
                </div>
              );
            })
          )}
        </div>
      </main>
      <Pagination
        searchQuery={searchQuery}
        paginate={paginate}
        currentPosts={currentPosts}
        postsPerPage={postsPerPage}
      />
    </>
  );
}
