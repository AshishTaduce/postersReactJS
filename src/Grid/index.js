import '../Square'
import React from 'react';
import Square from '../Square';
import './style.css'

class Grid extends React.Component {

    getRow(offSet) {
        return (
            <div class='row'>
                    <Square indexNumber = {offSet + 0}/>
                    <Square indexNumber = {offSet + 1}/>   
                    <Square indexNumber = {offSet + 2}/>
        </div>
        );
    }

    render(){
        return(
            <div class='grid'>
                
            {this.getRow(1)};
            {this.getRow(4)};
            {this.getRow(7)};
                
            </div>
            
        );
    }
}


export default Grid;