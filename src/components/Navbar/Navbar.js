import { NavLink } from "react-router-dom";



const navbar = () => {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center align-items-center">
                <button className="btn">
                    <NavLink to="/" className="fs-2">Accueil</NavLink>
                </button>
                </nav>
            </>
        );
}

export default navbar;