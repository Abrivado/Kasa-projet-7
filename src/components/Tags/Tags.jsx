import React from "react";
import "../../styles/index.css";

function Tags({tags}) {
  return tags.map((tag, i) => (
    <div className="tag-container" key={`${tag}-${i}`}>
      <span className="tag-contenu">{tag}</span>
    </div>
  ));
}

export default Tags;