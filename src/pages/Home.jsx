import React from 'react';
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import data_logement from "../assets/data_logement/logements.json"
import { Link } from 'react-router-dom';
import "../styles/index.css" 




function Home() {
    return (
        <div className='home'>
            <Banner text={"Chez vous, partout et ailleurs"}/>
            
            <div className="home-logement">

              {data_logement.map((logement) => (   // pour créer un tableau de tous les logements du fichier json

            <Link
            className="home-link"
            key={logement.id}
            to={"/logement/" + logement.id}
          >
                  <Card
                      key={logement.id}
                      id={logement.id}
                      cover={logement.cover}
                      title={logement.title}
                  />

            </Link>
              ))}
            </div>
        
        </div>
    )
}


export default Home;
