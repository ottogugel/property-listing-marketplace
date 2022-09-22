import React from "react";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  let navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="hider-navbar">
      <h1 className="p-4 text-primary">
        Page you are looking for does not exist!
      </h1>

      <button className="hider-navbar-button" onClick={goBack}>  
        Back to browse
      </button>
    </div>
  );
}

export default PageNotFound;