import React from "react";
import { useState } from "react";

function Dropdown({ title,content }) {
  const [open, setOpen] = useState(false);  

  return (
    <div className="dropdown">
         <div className="dropdown-conteneur-titre"> 
          <div className="dropdown-titre">{title}</div>
            <div className="dropdown-button"></div>
            <div
              className={`dropdown-fleche-img ${open}`}
              onClick={() => setOpen(!open)}
            >
              <img className="dropdown-fleche-img" src={require("../../assets/images/fleche-bas.png")} alt="Flèche fermé bas"/>
            </div>
        </div>
      {open && <div className="dropdown-contenu">{content}</div>}
    </div>
  );
}

export default Dropdown;