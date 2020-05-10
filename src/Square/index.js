import React from 'react';
import './style.css';

class Square extends React.Component{
    

    render() {
        return (
            <div className = {returnClassName(this.props.value)}
            onClick = {() => this.props.squarePressed()}
            >
            {this.props.value !== null ? <img className={'square-icon'} src={require(this.props.value === 'X' ? './cross-icon.png' : './circle-icon.png')} alt=""/> : <img src={require('./back-groung.png')} className={'square-icon'} alt=""/>}
            </div>
        );
    }
}

function returnClassName(value){
    if(value === null){
        return 'square-box';
    }
    else if(value === 'X'){
        return 'cross-box';
    }
    return 'circle-box';
}

export default Square;