import React from 'react';
import { loadAll } from '../actions'
import Pais from '../model/pais'


export default class Botones extends React.Component {
link = "https://restcountries.eu/rest/v2/all";
listRows = [];
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    cargarDatos(load) {
        if (load) {
            fetch(this.link)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        // this.listRows = data.map((r, i) => {
                        //     return {
                        //         id: i,
                        //         codigo: r.alpha3Code,
                        //         pais: r.name,
                        //         capital: r.capital,
                        //         area: r.area,
                        //         poblacion: r.population,
                        //         densidad: r.population / r.area,
                        //         bandera: <img src={r.flag} width="50px" />,
                        //         check: false
                        //     }
                        // });
                        this.listRows = data.map((r,i) => {
                            return {...new Pais(r), id: i}
                        })
                        this.props.dispatch(loadAll(this.listRows))
                    }
                })
        } else {
            this.props.dispatch(loadAll([]))
        }
    }

    render() {
        return (
            <div className="buttonsPaises">
                <button className="btn btn-primary"
                    onClick={() => this.cargarDatos(true)}
                    disabled={this.props.paises.length > 0}>Cargar Datos</button>
                <button className="btn btn-primary"
                    onClick={() => this.cargarDatos(false)}
                    disabled={this.props.paises.length === 0}>Quitar Datos</button>
            </div>
        )

    }
}