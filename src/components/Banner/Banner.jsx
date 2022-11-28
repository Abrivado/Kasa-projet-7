import "../../styles/index.css" 

function Banner({text}) {
  return (
        <div className="banniere-home">
           <img className="banniere-img" src={require("../../assets/images/banniere.png")} alt="Bannière page d'accueil"/>
           <span className="banniere-text">{text}</span>
           <div className="banniere-gradient"></div>
        </div>
  );
}

export default Banner;