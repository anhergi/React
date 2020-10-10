import React from 'react'
import Popup from 'reactjs-popup'
import { removePais, addPais } from '../actions'
import Pais from '../model/pais';
import './botones2.css'


export default class Botones2 extends React.Component {

    addPais = false;
    // objetoPais = null;
    operation = "";
    constructor(props) {
        super(props);
        this.state = ({ open: false, objetoPais: new Pais(), value: "" });
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.save = this.save.bind(this);
        // this.objetoPais = new Pais();
    }

    componentWillMount() {
        // this.setState({ objetoPais: new Pais() });
    }


    add() {
        this.addPais = true;
        this.operation = "Añadir";
        // this.objetoPais = new Pais();
        this.setState({ objetoPais: new Pais() });
        this.openModal();
        console.log("Entra add", this.addPais);

    }

    modify() {
        this.operation = "Modificar";
        // this.objetoPais = this.props.paises.filter(r => r.check)[0];
        this.setState({ objetoPais: this.props.paises.filter(r => r.check)[0] });
        this.openModal();
    }

    remove() {
        // console.log(this.props.paises.filter(r => r.check), this.props.paises.filter(r => r.check)[0].id);
        this.props.dispatch(removePais(this.props.paises.filter(r => r.check)[0].id))
    }

    openModal() {
        this.setState({ open: true });

    }

    closeModal() {
        this.setState({ open: false });
    }

    handleChange(event) {
        console.log(event.target.name);
        const objetoAux = {...this.state.objetoPais};
        objetoAux[event.target.name] = event.target.value
        this.setState({ objetoPais: objetoAux });
    }

    save(e) {
        e.preventDefault();
        if (!this.state.objetoPais.id) {
            console.log("Alta");
            const objetoAux = {...this.state.objetoPais};
            objetoAux.id = this.props.paises.length;
            this.setState({ objetoPais: objetoAux });
            this.props.dispatch(addPais(this.objetoPais));
        } else {
            console.log("Modificado");
        }
    }

    render() {

        // const PopupCrud = () => {
        //     <Popup>
        //         <div>
        //             Content
        //         </div>
        //     </Popup>
        // }

        return (
            <div>
                <div className="buttonsCrud">
                    <button className="btn btn-secondary"
                        onClick={() => this.add()}
                        disabled={this.props.paises.filter(r => r.check).length > 0}>Añadir</button>
                    <button className="btn btn-secondary"
                        onClick={() => this.modify()}
                        disabled={this.props.paises.filter(r => r.check).length !== 1}>Editar</button>
                    <button className="btn btn-secondary"
                        onClick={() => this.remove()}
                        disabled={this.props.paises.filter(r => r.check).length !== 1 || this.props.paises.length === 0}>Eliminar</button>
                </div>
                <div className="popUpCrud">
                    <Popup open={this.state.open}
                        closeOnDocumentClick
                        onClose={this.closeModal}>
                        <div>
                            {this.operation}
                            <form className="form" onSubmit={(e) => this.save(e)}>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <label>Codigo:</label>
                                        <input name="codigo" type="text" value={this.state.objetoPais.codigo} onChange={(e) => this.handleChange(e)} required/>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <label>País:</label>
                                        <input name="pais" type="text" value={this.state.objetoPais.pais} onChange={(e) => this.handleChange(e)} required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <label>Capital:</label>
                                        <input name="capital" type="text" value={this.state.objetoPais.capital} onChange={(e) => this.handleChange(e)}/>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <label>Area:</label>
                                        <input name="area" type="number" value={this.state.objetoPais.area} onChange={(e) => this.handleChange(e)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <label>Población:</label>
                                        <input name="poblacion" type="number" value={this.state.objetoPais.poblacion} onChange={(e) => this.handleChange(e)} />
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <label>Densidad:</label>
                                        <input name="densidad" type="number" value={this.state.objetoPais.densidad} onChange={(e) => this.handleChange(e)} />
                                    </div>
                                </div>
                                <input className="submit" type="submit" value="Submit" />
                            </form>
                            <button className="btn btn-secondary exitPopUp"
                                onClick={() => this.closeModal()}
                            >Salir</button>
                        </div>
                    </Popup>
                </div>
            </div >
        )
    }
}