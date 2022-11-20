import React from "react";

function Banner() {
  return (
    <div className="home">
        <div className="banniere">
           <img src={require("../../assets/images/banniere.png")} alt="Bannière accueil"/>
           <span>Chez vous, partout ailleurs</span>
        </div>
    </div>
  );
}

export default Banner;