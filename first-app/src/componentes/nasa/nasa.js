import React from 'react';
import DatePicker from 'react-datepicker';
import './nasa.css';
import "react-datepicker/dist/react-datepicker.css";
import Visualizador from '../visualizador/visualizador';

class Nasa extends React.Component {

    link = "https://api.nasa.gov/planetary/apod?api_key=nMjxbpMxD96bAWGgeX2MpD8sF1zq8fhzfPjSZQ6A";
    fecha = null;
    fechaString = "";
    visualizador = null;
    constructor(props) {
        super(props);
        this.state = { datos: null };
    }

    componentWillMount() {
        this.recuperarFoto();
    }

    handleChange(date) {
        if (date !== undefined &&
            date instanceof Date &&
            date.getTime() <= new Date().getTime()) {
            this.fecha = date;
            let mes = this.fecha.getMonth() + 1;
            const mesString = mes < 10 ? ("0" + mes) : (mes + "");
            this.fechaString = this.fecha.getFullYear() + '-' + mesString + '-' + this.fecha.getDate() + '';
            this.link = "https://api.nasa.gov/planetary/apod?date=" + this.fechaString + "&api_key=nMjxbpMxD96bAWGgeX2MpD8sF1zq8fhzfPjSZQ6A";
            this.recuperarFoto();
        }
    }

    recuperarFoto() {
        fetch(this.link)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    this.fecha = new Date(data.date);
                    this.setState({ datos: data });
                }
            });
    }

    render() {
        const rend = this.state.datos;
        return (
            <div className="nasa">
                <h4>Foto Diaria de la Nasa</h4>
                {rend ?
                    (<div>
                        <DatePicker
                            selected={this.fecha}
                            onChange={(e) => this.handleChange(e)}
                            dateFormat="dd-MM-YYYY"
                        />
                        <Visualizador 
                            tipo={rend.media_type}
                            url={rend.url}
                            />
                        <p className="texto">{rend.explanation}</p>
                    </div>)
                    : (<div></div>)
                }

            </div>
        )
    }
}

export default Nasa;