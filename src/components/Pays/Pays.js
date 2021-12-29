import { Link } from 'react-router-dom';



const pays = (props) => {
    return (
        <div className="row no-gutters border m-2 p-2">
            <div className="col-4 d-flex align-items-center">
                <img src={props.drapeau} alt={props.nom} className="p-2" width="100%" />
            </div>
            <div className="col">
                <h2>{props.nomFrancais}</h2>
                <div>Capitale : {props.capitale}</div>
                <div>Continent : {props.region}</div>
                <div>Population : {props.population}</div>
                <Link className="fs-4" to={`/pays/${props.nom}`}>Page du pays</Link>
            </div>
        </div>
    );
};

export default pays;