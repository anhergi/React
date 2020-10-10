import React from 'react';
import InputRange from 'react-input-range';
import { Card } from 'react-bootstrap';
import './cervezas.css';
import 'react-input-range/lib/css/index.css';

class Cervezas extends React.Component {

    // Hay muchas más cervezas, pero solo se envian 80 cada vez
    apiUrl = "https://api.punkapi.com/v2/beers?per_page=80";
    listBeers = [];
    min = 0;
    max = 0.1;
    nameBeer = "";
    constructor(props) {
        super(props);
        this.state = { datos: [], grados: { min: this.min, max: this.max }, nombre: "" }
    }

    componentWillMount() {
        fetch(this.apiUrl)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    this.listBeers = [...data];
                    let minAux = 100;
                    this.listBeers.forEach(r => {
                        minAux = minAux > r.abv ? r.abv : minAux;
                        this.max = this.max < r.abv ? r.abv : this.max;
                    });
                    this.min = Math.floor(minAux);
                    this.max = Math.ceil(this.max);
                    this.setState({ datos: data.filter(res => res.abv >= this.min && res.abv <= this.max), grados: { min: this.min, max: this.max } });
                }
            });
    }

    changeRange(value) {
        // this.filter(value, this.state.nombre);
        this.setState({ datos: this.listBeers.filter(res => res.abv >= value.min && res.abv <= value.max), grados: value });
    }

    changeName(value) {
        console.log(value);
        // this.filter(this.state.datos, value);
    }

    filter(grados, nombre) {
        const listAux = this.listBeers.filter(r => r.name.toLowerCase().includes(nombre.toLowerCase()));
        const listAux2 = listAux.filter(r => r.abv >= grados.min && r.abv <= grados.max);
        this.setState({ datos: this.listAux2, grados: grados, nombre: nombre});
    }

    loadDate() {
    }

    render() {

        return (
            <div>
                <h4>Cervezas</h4>
                <div className="row" style={{ height: '100px', margin: '50px' }}>
                    <InputRange
                        step={1}
                        maxValue={this.max}
                        minValue={this.min}
                        value={this.state.grados}
                        onChange={value => this.changeRange(value)}
                    />
                </div>
                <div>{this.state.datos.length}</div>
                <ul className="row">
                    {
                        this.state.datos.map(
                            (res, i) =>
                                <li key={i} style={{ listStyle: 'none' }} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                    <Card>
                                        <Card.Img variant="top" src={res.image_url} style={{ width: '20%' }} />
                                        <Card.Body>
                                            <Card.Title>{res.name}</Card.Title>
                                            <Card.Text>
                                                {res.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Cervezas;