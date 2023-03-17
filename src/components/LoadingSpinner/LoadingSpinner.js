import React from "react";
import "./LoadingSpinner.scss";

export default function LoadingSpinner() {
  return (
    <div className="container">
      <div className="loadingSpinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
