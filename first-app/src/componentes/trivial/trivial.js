import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartaTrivial from '../carta-trivial/carta-trivial'

import './trivial.css';
import Card from '../../model/card';
import InfiniteScroll from 'react-infinite-scroller';

class Trivial extends Component {

    urlApi = "https://opentdb.com/api.php?amount=10";
    cartas = [];
    constructor(props) {
        super(props);
        this.state = { datos: [], resol: false };

    }

    componentWillMount() {
        fetch(this.urlApi)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    data.results.forEach((r, i) => {
                        this.cartas.push(new Card(r));
                        this.cartas[i].buildAnswers();
                    });
                    this.setState({ datos: [...this.cartas] });
                }
            });


    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    answer(value, carta) {
        carta.contestada = true;
        if (value === "Incorrecta") {
            carta.correcta = false;
        } else {
            carta.correcta = true;
        }
        console.log(value, carta);
    }

    resolve() {
        this.setState({ resol: true });
    }

    moreQuestions() {
        fetch(this.urlApi)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    data.results.forEach(r => {
                        this.cartas.push(new Card(r));
                        this.cartas[this.cartas.length - 1].buildAnswers();
                    });
                    this.setState({ datos: [...this.cartas] });
                }
            });
    }

    loadFunc() {}

    render() {
        return (
            <div>
                <h4>Trivial</h4>
                <button onClick={() => this.resolve()}>Resolver</button>
                <button className="ml-50" onClick={() => this.moreQuestions()}>Más Preguntas</button>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={() => this.moreQuestions()}
                    hasMore={!this.state.resol}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <ul className="row">
                        {
                            this.state.datos.map((r, i) =>
                                <li key={i} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b-20">
                                    <CartaTrivial
                                        categoria={r.category}
                                        dificultad={r.difficulty}
                                        incorrectas={r.incorrect_answers}
                                        respuestas={r.answers}
                                        correcta={r.correct_answer}
                                        pregunta={r.question}
                                        tipo={r.type}
                                        contestada={r.contestada}
                                        correct={r.correcta}
                                        resol={this.state.resol}
                                        res={(value) => this.answer(value, r)}
                                    />
                                </li>
                            )
                        }
                    </ul>
                </InfiniteScroll>
            </div>
        );
    }
}

Trivial.propTypes = {

};

export default Trivial;