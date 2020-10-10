import React from 'react';

class Pais {
    
    id = null;
    codigo = "";
    pais = "";
    capital = "";
    area = null;
    poblacion = null;
    densidad = null;
    bandera = null;
    check = false;

    constructor(datos) {
        if (datos) {
            this.codigo = datos.alpha3Code;
            this.pais = datos.name;
            this.capital = datos.capital;
            this.area = datos.area;
            this.poblacion = datos.population;
            this.densidad = datos.population / datos.area;
            this.bandera = <img src={datos.flag} width="50px" />;
            this.check = false;
        } else {
            this.codigo = "";
            this.pais = "";
            this.capital = "";
            this.area = null;
            this.poblacion = null;
            this.densidad = null;
            this.bandera =  null;
            this.check = false;
        }

    }
}

export default Pais;