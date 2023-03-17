import React from "react";
import "./Pagination.scss";

export default function Pagination({ searchQuery, paginate, postsPerPage, currentPosts }) {
  let totalPosts = searchQuery.list.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (!currentPosts) return "loading...";
  return (
    <div className="pagination__container">
      <ul className="pagination__list">
        {pageNumbers.map((num) => {
          return (
            <li key={num} className="pagination__list-item" onClick={() => paginate(num)}>
              {num}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
