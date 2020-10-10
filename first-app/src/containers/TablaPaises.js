import React from 'react';
import Tabla from './Tabla'
import { connect } from 'react-redux'

// const listColumns = [
//     {col: 'check', text: ""},
//     {col: 'codigo', text: "Codigo"},
//     {col: 'pais', text: "País"},
//     {col: 'capital', text: "Capital"},
//     {col: 'area', text: "Area"},
//     {col: 'poblacion', text: "Población"},
//     {col: 'densidad', text: "Densidad"},
//     {col: 'bandera', text: "Bandera"}
// ];
// const TablaPaises = ({paises = []}) => (

//     <div className="tablaPaises">
//         <table className="table table-striped">
//             <thead>
//                 <tr>
//                     {
//                         listColumns.map((r, i) =>
//                             <th key={i}>{r.text}</th>)
//                     }
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     paises.map(r =>
//                         <tr key={r.id}>
//                             <td><input type="checkbox" onChange={() => this.handleCheck(r.id)} value={r.id}></input></td>
//                             <td>{r.codigo}</td>
//                             <td>{r.pais}</td>
//                             <td>{r.capital}</td>
//                             <td>{r.area}</td>
//                             <td>{r.poblacion}</td> 
//                             <td>{r.densidad}</td>
//                             <td>{r.bandera}</td>
//                         </tr>
//                     )
//                 }
//             </tbody>
//         </table>

//     </div>
// )

const mapStateToProps = state => ({
    paises: state.paises
})

export default connect(mapStateToProps)(Tabla)