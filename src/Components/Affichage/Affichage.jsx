import React from "react";
import "./Affichage.css";

const Affichage = ({ fromage }) => {
  return (
    <div className="affichage-container">
      <h1>{fromage}</h1>
    </div>
  );
};

export default Affichage;
