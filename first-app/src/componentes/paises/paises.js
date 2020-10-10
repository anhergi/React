import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import BotonesPaises from '../../containers/BotonesPaises'
import TablaPaises from '../../containers/TablaPaises'
import BotonesCrud from '../../containers/BotonesCrud';

class Paises extends React.Component {

    listRows = [];
    listColumns = [];
    link = "https://restcountries.eu/rest/v2/all";

    constructor(props) {
        super(props);
        this.listColumns = [
            { col: 'check', text: "" },
            { col: 'codigo', text: "Codigo" },
            { col: 'pais', text: "País" },
            { col: 'capital', text: "Capital" },
            { col: 'area', text: "Area" },
            // {col: 'poblacion', text: "Población"},
            // {col: 'densidad', text: "Densidad"},
            // {col: 'bandera', text: "Bandera"}
        ];
        this.state = { datos: [] }
    }


    componentWillMount() {

    }

    componenthidMount() {
    }

    loadAll() {
        fetch(this.link)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    this.listRows = data.map((r, i) => {
                        return {
                            id: i,
                            codigo: r.alpha3Code,
                            pais: r.name,
                            capital: r.capital,
                            area: r.area,
                            poblacion: r.population,
                            densidad: r.population / r.area,
                            bandera: <img src={r.flag} width="50px" />,
                            check: false
                        }
                    });
                    // console.log(this.listRows);
                    this.setState({});
                }
            });
    }

    handleClick(load) {
        if (load) {
            this.loadAll();
        } else {
            this.listRows = [];
            this.setState({});
        }
    }

    handleCheck(value) {
        this.listRows = this.listRows.map(r =>
            (r.id === value) ?
                { ...r, check: !r.check }
                : r)
    }

    changeValue(value) {
        console.log(value);
        if (value) {
            // this.setState({ datos: value });
        }
    }


    render() {

        return (
            <div>
                <h4>Países</h4>
                {/* <Typeahead
                    id="myTypeahead"
                    labelKey="name"
                    onChange={(e) => this.changeValue(e)}
                    options={this.myData}
                /> */}
                <div className="buttons row">
                    <BotonesPaises />
                    <BotonesCrud />
                </div>
                <TablaPaises />
                {/* <TablaPaises /> */}
                {/*<button className="btn btn-primary"
                    onClick={() => this.handleClick(true)}
                    disabled={this.listRows.length > 0}>Cargar Datos</button>
                <button className="btn btn-primary"
                    onClick={() => this.handleClick(false)}
                    disabled={this.listRows.length === 0}>Quitar Datos</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        {
                            this.listColumns.map((r,i) => 
                                <th key={i}>{r.text}</th>)
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.listRows.map(r => 
                                <tr key={r.id}>
                                    <td><input type="checkbox" onChange={() => this.handleCheck(r.id)} value={r.id}></input></td>
                                    <td>{r.codigo}</td>
                                    <td>{r.pais}</td>
                                    <td>{r.capital}</td>
                                    <td>{r.area}</td>
                                    <td>{r.poblacion}</td> 
                                    <td>{r.densidad}</td> 
                                    <td>{r.bandera}</td> 
                                </tr>
                            )
                        }
                    </tbody>
                    </table>*/}

            </div>
        )
    }
}

export default Paises;