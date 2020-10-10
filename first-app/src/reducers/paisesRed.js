import React from 'react';

// const link = "https://restcountries.eu/rest/v2/all";
const paisesRed = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ALL':
            return action.paises;
        case 'ADD_PAIS':
            return [
                ...state,
                {
                    id: action.id,
                    codigo: action.codigo,
                    pais: action.pais,
                    capital: action.capital,
                    area: action.area,
                    poblacion: action.poblacion,
                    densidad: action.densidad,
                    bandera: action.bandera
                }
            ]
        case 'REMOVE_PAIS':
            return [
                ...state.filter(r => r.id !== action.id)
            ]
        case 'CHECK_PAIS':
            return [
                ...state.map(r => 
                    (r.id === action.id) ?
                    {...r, check: !r.check}
                    : r
                    )
            ]
        default:
            return state
    }
}

export default paisesRed