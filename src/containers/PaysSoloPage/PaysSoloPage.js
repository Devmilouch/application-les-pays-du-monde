import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Titreh1 from "../../components/Titres/TitreH1";



const PaysSoloPage = () => {
    const { id } = useParams();
    const [ lePays, setLePays ] = useState(null);
    useEffect(() => {
        axios.get(`https://restcountries.com/v2/name/${id}?fullText=true`)
            .then(reponse => {
                const truc = reponse.data[0];
                setLePays(truc);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div className="container">
            {
                lePays 
                ? 
                <>
                    <Titreh1>{lePays.translations.fr}</Titreh1>
                    <div className="container d-flex justify-content-center">
                        <img style={{maxHeight: "400px", maxWidth: "320px"}} src={lePays.flag} alt={lePays.translations.fr}></img>
                    </div>
                    <div className="d-flex flex-column align-items-center m-2">
                        <p>Nom d'origine : {lePays.nativeName}</p>
                        <p>Capitale : {lePays.capital}</p>
                        <p>Continent : {lePays.region}</p>
                        <p>Sous-continent : {lePays.subregion}</p>
                        <p>Population : {lePays.population}</p>
                        <p>Monnaie : {lePays.currencies[0].name}</p>
                    </div>
                </>
                :
                <div className="d-flex justify-content-center mt-4">Chargement en cours...</div>
            }
        </div>
    );
}

export default PaysSoloPage;