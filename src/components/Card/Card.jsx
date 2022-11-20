import React from "react";

function Card({ id, title, cover }) {
  console.log(cover);
  return (
    <div className="card" id={id}>
      <img className="card-img" src={cover} alt="card" />
      <span className="card-title">{title}</span>
    </div>
  );
}

export default Card;