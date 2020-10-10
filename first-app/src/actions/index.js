
const link = "https://restcountries.eu/rest/v2/all";

    export const loadAll = (paises) => ({
        type: 'LOAD_ALL',
        paises
    })

    export const check = (id) => ({
        type: 'CHECK_PAIS',
        id
    })

    export const addPais = (pais) => ({
        type: 'ADD_PAIS',
        pais
    })

    export const removePais = (id) => ({
        type: 'REMOVE_PAIS',
        id
    })