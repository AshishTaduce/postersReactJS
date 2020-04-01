import React from 'react';
import './style.css';

class Square extends React.Component{
    render() {
        return (
            <button class = 'square-box'>
            {this.props.indexNumber}
            </button>
        );
    }
}

export default Square;