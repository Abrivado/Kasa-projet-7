import React from 'react';


function Footer() {
    return (
        
      <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={require("../../assets/images/logo-footer.png")} alt="Logo Footer Kasa" />
        </div>
        <div className="footer-text">
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>

    )
}



export default Footer;

