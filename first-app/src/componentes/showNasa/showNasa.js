import React from 'react';
import ReactPlayer from 'react-player'

class ShowNasa extends React.Component {

    link = "https://api.nasa.gov/planetary/apod?api_key=nMjxbpMxD96bAWGgeX2MpD8sF1zq8fhzfPjSZQ6A";
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(newProps) {
        this.loadDate(newProps);
    }

    loadDate(newProps) {
        let date = newProps.date;
        if (date !== undefined &&
            date instanceof Date &&
            date.getTime() <= new Date().getTime()) {
            let mes = date.getMonth() + 1;
            const mesString = mes < 10 ? ("0" + mes) : (mes + "");
            this.fechaString = date.getFullYear() + '-' + mesString + '-' + date.getDate() + '';
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

}

export default ShowNasa;
