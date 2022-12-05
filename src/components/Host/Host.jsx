import React from "react";
import "../../styles/index.css";

function Host({ host }) {
  return (
    <div className="host">
      <span className="host-name">{host.name}</span>
      <img className="host-picture" src={host.picture} alt="Profil Hôte" />
    </div>
  );
}

export default Host;