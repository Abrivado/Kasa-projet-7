import React from "react";


function Card({ id, title, cover }) {
  return (
    <div className="card" id={id}>
      <div className="card-gradient"></div>
      <img className="card-img" src={cover} alt="card" />
      <span className="card-title">{title}</span>
    </div>
  );
}

export default Card;