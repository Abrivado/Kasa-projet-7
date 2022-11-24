import React from 'react';
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import data_logement from "../assets/data_logement/logements.json"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';




function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className="home-gallery">

              {data_logement.map((logement) => (

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

Home.propTypes = {           // propTypes sert à sécuriser la composante Card
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Home;
