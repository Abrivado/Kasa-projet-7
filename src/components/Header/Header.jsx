import React from "react";
import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <header>
            <div className="header-logo">
           <img src={require("../../assets/images/logo-header.png")} alt="Logo header"/>
        </div>
        <nav>
            <Link to="/" className="header-nav">Accueil</Link>
            <Link to="/about" className="header-nav">A propos</Link>
        </nav>
        </header>
    )
}

export default Header