import React from "react";
import "../../styles/index.css";

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {stars.map((star, i) =>    // pour trouver à cb d'étoile est noté ce logement sur la data
        rating >= star ? (
          <div className="rating-etoile-rouge" key={`${star}-${i}`}>  
            <img
              className="rating-etoile"
              src={require("../../assets/images/etoile-rouge.png")}
              key={star.toString()}  // le toString analyse star pour déterminer cb d'étoile rouge devront apparaitre
              alt="Etoile rouge"
            />
          </div>
        ) : (  // les étoiles manquant seront grises
          <div className="rating-etoile-grise"> 
            <img
              className="rating-etoile"
              src={require("../../assets/images/etoile-grise.png")}
              key={star.toString()} // le toString analyse star pour déterminer cb d'étoile grise devront apparaitre
              alt="Etoile grise"
            />
          </div>
        )
      )}
    </div>
  );
}
export default Rating;