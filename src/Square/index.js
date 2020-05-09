import React from 'react';
import './style.css';

class Square extends React.Component{
    

    render() {
        return (
            <div className = 'square-box'
            onClick = {() => this.props.squarePressed()}
            >
            {this.props.value}
            </div>
        );
    }
}

export default Square;