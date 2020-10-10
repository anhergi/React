
import React from 'react';
import { check } from '../actions'


export default class Tabla extends React.Component {

    listColumns = [
        {col: 'check', text: ""},
        {col: 'codigo', text: "Codigo"},
        {col: 'pais', text: "País"},
        {col: 'capital', text: "Capital"},
        {col: 'area', text: "Area"},
        {col: 'poblacion', text: "Población"},
        {col: 'densidad', text: "Densidad"},
        {col: 'bandera', text: "Bandera"}
    ];
    
    constructor(props) {
        super(props);
    }

    handleCheck(value) {
        this.props.dispatch(check(value));
    }


    render() {

        return (
            <div className="tablaPaises">
            <table className="table table-striped">
                <thead>
                    <tr>
                        {
                            this.listColumns.map((r, i) =>
                                <th key={i}>{r.text}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.paises.map(r =>
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
            </table>
    
        </div>
        )
    }
}