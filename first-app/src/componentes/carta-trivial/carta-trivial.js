import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './carta-trivial.css';

class CartaTrivial extends Component {

    respuestas = [];
    constructor(props) {
        super(props);
        this.state = { datos: null, selected: null, resolve: false };

    }

    componentWillMount() {
        // console.log(this.props);
        this.setState({ datos: this.props });
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        console.log("Componente carta", nextProps);
        this.setState({ datos: nextProps, resolve: nextProps.resol });
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

    handleClick(respuesta, carta, i) {
        if (respuesta === carta.correcta) {
            this.props.res("Correcta");
        } else {
            this.props.res("Incorrecta");
        }
        this.setState({ selected: i })
    }

    render() {
        let claseCarta = "btn primary-btn";
        if (this.state.resolve) {
            if (this.state.datos.contestada) {
                claseCarta += this.state.datos.correct ? "correct" : "incorrect";
            }
        }

        return (
            <div>
                <div className="card">
                    {/* <img class="card-img-top" src="holder.js/100x180/" alt="" /> */}
                    <div className="card-body">
                        <h4 className="card-title">{this.state.datos.categoria}</h4>
                        <p className="card-text">{this.state.datos.pregunta}</p>
                        <ul>
                            {
                                this.state.datos.respuestas.map((r, i) =>
                                    <li key={i} onClick={() => this.handleClick(r, this.state.datos, i)}
                                        className={this.state.selected === i ? 'active ' + claseCarta : ''}>{r}</li>
                                    // <li key={i}>
                                    //     <button className={this.state.selected === i ? 'active ' + claseCarta : ''}
                                    //         onClick={() => this.handleClick(r, this.state.datos, i)}>{r}</button>
                                    // </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

CartaTrivial.propTypes = {

};

export default CartaTrivial;