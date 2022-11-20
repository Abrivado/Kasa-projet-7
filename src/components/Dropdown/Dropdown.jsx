import React from "react";
import { useState } from "react";

function Dropdown({ content }) {
  const [open, setOpen] = useState(false);  

  return (
    <div className="dropdown">
      <div className="dropdown__header">
        <div className="dropdown__title">
            <div className="dropdown-button"></div>
            <div
              className={`dropDown__arrow ${open}`}
              onClick={() => setOpen(!open)}
            >
              <img className="dropDown__arrowImg" src={require("../../assets/images/fleche-bas.png")} alt="Flèche fermé bas"/>
            </div>
        </div>
      </div>
      {open && <div className="dropdown__content">{content}</div>}
    </div>
  );
}

export default Dropdown;