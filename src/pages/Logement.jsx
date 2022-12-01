import React from 'react';
import data_logement from "../assets/data_logement/logements.json"
import { useParams } from "react-router-dom";
import NotFound from "../components/Error/error"
import Dropdown from '../components/Dropdown/Dropdown';
import Host from '../components/Host/Host';
import Rating from '../components/Rating/Rating';
import Tags from '../components/Tags/Tags';
import Carousel from '../components/Carousel/Carousel';
import "../styles/index.css"


function Logement() {
    const account = useParams().id;  // pour récup l'id du produit
    const obj = data_logement.find((product) => product.id === account) // pour chercher l'id correspondante dans le fichier json

    const { title, location, rating, host, description, pictures } = obj || {}; // récup chaque donnée nécéssaire de notre fichier json

     const equipments = obj.equipments.map((equip) => {
         return <li key={`${equip}-${obj}`} className="logement-equipement">{equip}</li>;  // cette div sert à ce que les équipements des logements soient affichés en liste
     })

      if (obj === undefined) {   // si l'id ne match pas mes datas, ça renvoi les users sur le page 404
      return <NotFound />
    } 
    return (
        <div>            
        <Carousel slider={pictures} />        
        <div>
          <div className="logement-padding">
            <div className="logement-host">
              <div>
                <h1 className="logement-titre">{title}</h1>  
                <p className="logement-ville">{location}</p>
                <div className="logement-tags">
                <Tags tags={obj?.tags}/>
                </div>
              </div>
              <div className="logement-host-etoiles">
              <Host host={host} />
              <Rating rating={rating} />                
              </div>
            </div>
            <div className="logement-dropdown">
              <div className="logement-description-contenu">
                <Dropdown title="Description" content={description} />
              </div>
              <div className="logement-equipement-contenu">
                <Dropdown title="Équipement" content ={equipments} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  
    export default Logement



