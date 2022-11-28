import React from 'react';
import data_logement from "../assets/data_logement/logements.json"
import { useParams } from "react-router-dom";
import NotFound from "../components/Error/error"
import "../styles/index.css" 



import "../styles/index.css"


// function Logement () {
//     const id = useParams(0);
//     const logementData = data_logement.find((product) => product.id === id)
//     if (!logementData) return <NotFound />
    

// }


// export default Logement

function Logement() {
    const account = useParams().id;
    console.log(account)
  
    const obj = data_logement.find((c) => c.id === account)
  
    //Mise à jour après soutenance
    if (obj === undefined) {
      return <NotFound />
    } 
    return (
      <div> jjjhhjhh </div>)
  }
  
    export default Logement



