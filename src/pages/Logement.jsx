import React from 'react';
import data_logement from "../assets/data_logement/logements.json"
import { useParams } from "react-router-dom";
import NotFound from "../components/Error/error"
import Dropdown from '../components/Dropdown/Dropdown';
import Host from '../components/Host/Host';
import Rating from '../components/Rating/Rating';
import Tags from '../components/Tags/Tags';
import "../styles/index.css"


function Logement() {
    const account = useParams().id;
    console.log(account)
    const obj = data_logement.find((product) => product.id === account)

    const { title, location, rating, host, description, equipments } = obj || {};

      if (obj === undefined) {
      return <NotFound />
    } 
    return (
        <div className="logement">
        <div className="logement-content">
          <div className="logement-infos">
            <div className="logement-host">
              <div className="logement-titre-location">
                <h1 className="logement-titre">{title}</h1>  
                <p className="logement-location">{location}</p>
                <div className="logement-tags">
                <Tags tags={obj?.tags}/>
                </div>
              </div>
              <div className="logement-host-stars">
              <Host host={host} />
              <Rating rating={rating} />



                
              </div>
            </div>
            <div className="logement-dropdown">
              <div className="logement-description-contenu">
                <Dropdown title="Description" content={description} />
              </div>
              <div className="logement-equipement-contenu">
                <Dropdown title="Équipement" content ={equipments}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  
    export default Logement



