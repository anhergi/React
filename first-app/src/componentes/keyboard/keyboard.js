import React from 'react';
import './keyboard.css';

class Keyboard extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(event, oper = null) {
        this.props.signal(event, oper);
    }

    render() {
        return (
            <div className="keyboard">
                <div>
                    <button onClick={() => this.handleClick(1)}>1</button>
                    <button onClick={() => this.handleClick(2)}>2</button>
                    <button onClick={() => this.handleClick(3)}>3</button>
                    <button onClick={() => this.handleClick("suma", "+")}>+</button>
                </div>
                <div>
                    <button onClick={() => this.handleClick(4)}>4</button>
                    <button onClick={() => this.handleClick(5)}>5</button>
                    <button onClick={() => this.handleClick(6)}>6</button>
                    <button onClick={() => this.handleClick("resta", "-")}>-</button>
                </div>
                <div>
                    <button onClick={() => this.handleClick(7)}>7</button>
                    <button onClick={() => this.handleClick(8)}>8</button>
                    <button onClick={() => this.handleClick(9)}>9</button>
                    <button onClick={() => this.handleClick("multiplicar", "*")}>*</button>
                </div>
                <div>
                    <button onClick={() => this.handleClick(".")}>.</button>
                    <button onClick={() => this.handleClick(0)}>0</button>
                    <button onClick={() => this.handleClick("borrar")}>C</button>
                    <button onClick={() => this.handleClick("dividir", "/")}>/</button>
                </div>
                <div className="buttonEqual">
                    <button onClick={() => this.handleClick("igual")}>=</button>
                </div>
            </div>
        )
    }
}

export default Keyboard;