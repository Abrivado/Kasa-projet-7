import React from "react";
import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <header>
            <div className="logo">
           <img src={require("../../assets/images/logo-header.png")} alt="Logo header"/>
        </div>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
        </header>
    )
}

export default Header