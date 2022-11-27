import "../../styles/index.css" 

function Banner({text}) {
  return (
    <div className="home">
        <div className="home-banniere">
           <img src={require("../../assets/images/banniere.png")} alt="Bannière accueil"/>
           <span className="banniere-text">{text}</span>
        </div>
    </div>
  );
}

export default Banner;