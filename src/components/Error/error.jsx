import "../../styles/index.css" 
import {Link} from 'react-router-dom'


function NotFound() {
    return (
        <div className="error404">
            <h1>404</h1>
            <h2>Oups ! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="error404-link">Retourner à la page d'accueil</Link>
        </div>
    )
}
 
export default NotFound