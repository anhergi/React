import React from 'react';
import Display from '../display/display';
import Keyboard from '../keyboard/keyboard';
import './calculator.css'

/* Estados
Init
First
Second Init
Second
Result
*/

class Calculator extends React.Component {

    var1 = "";
    var2 = "";
    operacion = "suma";
    cambioEstado = "Init";
    valorDisplay = "";
    constructor(props) {
        super(props);
        this.state = {estado: 'Init'};
    }

    // Mounting
    componentWillMount() {}
    componentDidMount() {}

    //Props Change
    componentWillReceiveProps() {}
    shouldComponentUpdate() {
        return true;
    }
    componentDidUpdate() {}

    //State Change
    componentWillUpdate() {}

    //Unmounting
    componentWillUnmount() {}

    handleClick(event, oper = null) {

        if (this.state.estado === "Init") {
            if (typeof(event) === "number") {
                this.var1 += event + "";
                this.valorDisplay = this.var1;
                this.cambioEstado = "First";
            }
        } else if (this.state.estado === "First") {
            if (typeof(event) === "number" || (event === "." && !this.var1.includes("."))) {
                this.var1 += event + "";
                this.valorDisplay = this.var1;
            } else if (oper) {
                this.operacion = event;
                this.valorDisplay += oper; 
                this.cambioEstado = "Second Init"
            } else if (event === "borrar") {
                this.var1 = "";
                this.valorDisplay = "";
                this.cambioEstado = "Init"
            }
        } else if (this.state.estado === "Second Init") {
            this.var2 += event + "";
            this.valorDisplay += event + "";
            this.cambioEstado = "Second";
        } else if (this.state.estado === "Second") {
            if (typeof(event) === "number" || (event === "." && !this.var2.includes("."))) {
                this.var2 += event + "";
                this.valorDisplay += event + "";
            } else if (event === "borrar") {
                this.var1 = "";
                this.var2 = "";
                this.valorDisplay = "";
                this.cambioEstado = "Init"
            } else if (event === "igual" && this.var2 !== "") {
                let result = 0;
                if (this.operacion === "suma") {
                    result = parseFloat(this.var1) + parseFloat(this.var2);
                } else if (this.operacion === "resta") {
                    result = parseFloat(this.var1) - parseFloat(this.var2);
                } else if (this.operacion === "multiplicar") {
                    result = parseFloat(this.var1) * parseFloat(this.var2);
                } else {
                    result = parseFloat(this.var1) / parseFloat(this.var2);
                }
                this.valorDisplay += "=" + result + "";
                this.var1 = "";
                this.var2 = "";
                this.cambioEstado = "Result" 
            }
        } else {
            if (typeof(event) === "number") {
                this.var1 += event + "";
                this.valorDisplay = this.var1;
                this.cambioEstado = "First";
            } else if (event === "borrar") {
                this.var1 = "";
                this.var2 = "";
                this.valorDisplay = "";
                this.cambioEstado = "Init";
            }
        }
        this.setState({estado: this.cambioEstado});

    }
    render() {
        return (
            <div >
                <Display content={this.valorDisplay}/>
                <Keyboard signal={(e,n) => this.handleClick(e,n)}/>
            </div>
        )
    }
}

export default Calculator;

