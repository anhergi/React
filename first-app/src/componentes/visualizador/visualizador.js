import React from 'react';
import ReactPlayer from 'react-player'

class Visualizador extends React.Component {

    objetoDOM = null;
    constructor(props) {
        super(props);
        this.state = { datos: null }
    }

    componentWillReceiveProps(newProps) {
        this.loadDate(newProps);
    }

    loadDate(newProps) {
        if (newProps.tipo === "image") {
            this.objetoDOM =
                    <div className="row imagen">
                        <img src={newProps.url} />
                    </div>
        } else {
            this.objetoDOM =
                <div className="row imagen">
                    <ReactPlayer
                        url={newProps.url}
                        className='react-player'
                        playing
                        width='400px'
                        height='400px'
                    />
                </div>
        }
        this.setState({datos: newProps});
    }

    render() {
        return (
            <div>
                {this.objetoDOM}
            </div>
        )
    }

}

export default Visualizador;