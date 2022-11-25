import React from 'react';
import data_logement from "../assets/data_logement/logements.json"
import { useParams } from "react-router-dom";
import NotFound from "../components/Error/error"



import "../styles/index.css"


function Logement () {
    const id = useParams(0);
    const logementData = data_logement.find((product) => product.id === id)
    if (!logementData) return <NotFound />
    

}


export default Logement



