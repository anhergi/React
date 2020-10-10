import React from 'react';

class Display extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="display">
                <h4>{this.props.content}</h4>
            </div>
        )
    }
}

export default Display;