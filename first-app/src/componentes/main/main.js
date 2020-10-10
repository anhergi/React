import React from 'react';
import './main.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Calculator from "../calculator/calculator";
import Nasa from "../nasa/nasa";
import Cervezas from '../cervezas/cervezas';
import Paises from '../paises/paises';
import Trivial from '../trivial/trivial';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

    myComponent = null;
    show = false;
    constructor(props) {
        super(props);
        this.state = {};
    }

    showComponent(value) {
        if (!value) {
            this.myComponent = <Calculator />;
        } else {
            this.myComponent = null;
        }
        this.show = !value;
        this.setState({});
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav>
                            <ul className="router clearfix">
                                <li>
                                    <Link to="/">Calculator</Link>
                                </li>
                                <li>
                                    <Link to="/cervezas/">Cervezas</Link>
                                </li>
                                <li>
                                    <Link to="/paises/">Paises</Link>
                                </li>
                                <li>
                                    <Link to="/trivial/">Trivial</Link>
                                </li>
                            </ul>
                        </nav>

                        <Route path="/" exact component={Calculator} />
                        <Route path="/cervezas/" component={Cervezas} />
                        <Route path="/paises/" component={Paises} />
                        <Route path="/trivial/" component={Trivial} />
                    </div>
                </Router>
                {/* <div className="container">
                    <Tabs defaultActiveKey="trivial" id="uncontrolled-tab-example">
                        <Tab eventKey="calculator" title="Calculator">

                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                    <Calculator />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                </div>
                            </div>

                        </Tab>
                        <Tab eventKey="nasa" title="Nasa">
                            <Nasa />
                        </Tab>
                        <Tab eventKey="cervezas" title="Cervezas">
                            <Cervezas />
                        </Tab>
                        <Tab eventKey="paises" title="Paises">
                            <Paises />
                        </Tab>
                        <Tab eventKey="trivial" title="Trivial">
                            <Trivial />
                        </Tab>
                    </Tabs>
                </div> */}
            </div>
        )
    }
}

export default Main;