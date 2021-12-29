import React, { Component } from "react";
import axios from "axios";

import TitreH1 from "../../components/Titres/TitreH1";
import Bouton from "../../components/Bouton/Bouton";
import Pays from "../../components/Pays/Pays";



class PaysManager extends Component {
    state = {
        listePays: null,
        regionSelection: null,
        numeroPageActuelle: 1
    };

    componentDidMount = () => {
        this.handleSelectionPaysParRegion("all");
    };

    handleSelectionPaysParRegion = (region) => {
        this.setState({listePays: null});
        let param = "";
        if (region === "all") param = region;
        else param = `region/${region}`;

        axios.get(`https://restcountries.com/v2/${param}`)
            .then(reponse => {
                const listePays = reponse.data.map(pays => {
                    return {
                        nom: pays.name,
                        nomFrancais: pays.translations.fr,
                        capitale: pays.capital,
                        region: pays.region,
                        drapeau: pays.flag,
                        population: pays.population
                    }
                })
                this.setState({
                    listePays,
                    regionSelection: region,
                    numeroPageActuelle: 1
                });
            })
            .catch(error => {
                console.log(error);
            })
    };

    render() {
        const pagination = [];
        let listePaysAffichee = null;
        if (this.state.listePays) {
            let nbBoutons = this.state.listePays.length / 10;
            if (this.state.listePays.length % 10 !== 0) nbBoutons++;
            for (let i = 1 ; i <= nbBoutons ; i++) {
                pagination.push(<Bouton 
                    key={i} 
                    typeBtn="btn-info" 
                    estSelection={this.state.numeroPageActuelle === i}
                    clic={() => this.setState({numeroPageActuelle: i})}
                >
                    {i}
                </Bouton>);
            }
            const debut = (this.state.numeroPageActuelle - 1) * 10;
            const fin = this.state.numeroPageActuelle * 10;
            const liteReduite = this.state.listePays.slice(debut, fin);
            listePaysAffichee =  liteReduite.map(pays => {
                return (
                    <div className="col-12 col-md-6"  key={pays.nom}>
                        <Pays {...pays} />
                    </div>
                );
            });
        }

        return (
            <div className="container">
                <TitreH1 className="container">Les pays du monde</TitreH1>
                <div className="m-2">
                <Bouton 
                    typeBtn="btn-info" clic={() => this.handleSelectionPaysParRegion("all")} 
                    estSelection={this.state.regionSelection === "all"}>
                    Tous
                </Bouton>
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("Europe")} 
                    estSelection={this.state.regionSelection === "Europe"}>
                    Europe
                </Bouton>
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("Africa")} 
                    estSelection={this.state.regionSelection === "Africa"}>
                    Afrique
                </Bouton>
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("Asia")} 
                    estSelection={this.state.regionSelection === "Asia"}>
                    Asie
                </Bouton>
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("Americas")} 
                    estSelection={this.state.regionSelection === "Americas"}>
                    Amérique
                </Bouton>
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("Oceania")} 
                    estSelection={this.state.regionSelection === "Oceania"}>
                    Océanie
                </Bouton>
                </div>
                <div className="m-2">Nombre de pays : <span className="badge bg-success">{this.state.listePays && this.state.listePays.length}</span></div>
                <div className="m-2">{pagination}</div>
                {
                    this.state.listePays 
                    ? <div className="row no-gutters">
                       {listePaysAffichee}
                      </div>
                    : <div className="d-flex justify-content-center mt-4">Chargement en cours...</div>
                }
                <div className="m-2">{pagination}</div>
            </div>
        );
    }
}

export default PaysManager;