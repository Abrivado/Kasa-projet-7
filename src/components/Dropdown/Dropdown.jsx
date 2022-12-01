import React from "react";
import { useState } from "react";

function Dropdown({ title,content }) {
  const [open, setOpen] = useState(false); // false (fermé) est la valeur initiale // open correspond à l'état de départ (fermé) // setOpen permet de changer la valeur de open

  return (
    <div className="dropdown">
         <div className="dropdown-conteneur-titre"> 
          <div className="dropdown-titre">{title}</div>
            <div
              className={`dropdown-fleche-img ${open}`}
              onClick={() => setOpen(!open)}  // au clic, setOpen va prendre l'inverse de la valeur d'open
            >
              <img className="dropdown-fleche-img" src={require("../../assets/images/fleche-bas.png")} alt="Flèche fermé bas"/>
            </div>
        </div>
      {open && <div className="dropdown-contenu">{content}</div>}   
    </div>     // la div qui contient le contenu n'apparaitra que quand l'user aura cliqué dessus
  );
}

export default Dropdown;