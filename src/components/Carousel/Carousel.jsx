import React, { useState } from "react";
import "../../styles/index.css";

function Carousel({ slider }) {   // useState sert à créer un état et le sauvegarder dans current
  const [current, setCurrent] = useState(0);   // 0 est la valeur initiale, current correspond à la photo sur laquelle est arreté, setCurrent permet de changer la valeur de current
  const length = slider.length;  // length permet de répertorier le nombre d'image que possege un logement // slider regroupe toutes les images du carousel

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);  // formule qui permet de passer à la slide suivante
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // formule qui permet de passer à la slide précédente
  };

  return (
    <section className="slider">
      {slider.map((picture, i) => {     // le .map sert à retourner un tableau de slide(pictures) à partir du tableau [current, setCurrent] de useState
        return (
 
          <div className={i === current ? "slide-active" : "slide"} key={i}>  
            {i === current && (   //  l'img affichée basculera en div slide active lorsque que l'image sera sélectionnée
              <img className="slider-image" src={picture} alt="Gallerie logement"/>
            )}
          </div>
        );
      })}

      {length > 1 && (
        <div>
          <img
            className="slider-fleche-gauche"
            src={require("../../assets/images/fleche-gauche.png")}      // correspond à la fleche de gauche
            alt="Fleche de gauche"
            onClick={prevSlide}     // devra montrer la slide précédente au clic
          />

          <img
            className="slider-fleche-droite"
            src={require("../../assets/images/fleche-droite.png")}  // correspond à la fleche de droite
            alt="Fleche de droite"   
            onClick={nextSlide}       // devra montrer la slide suivante au clic
          />
        </div>
      )}
    </section>
  );
}
export default Carousel;