import React from "react";
import Square from "../Square";
import './style.css'

class Grid extends React.Component {

    getGridRow(offset) {

        return (
            <div className="grid-row">
            <Square value={this.props.board[offset]} squarePressed ={() => this.props.handleClicks(offset)}/>
            <Square value={this.props.board[offset + 1]} squarePressed ={() => this.props.handleClicks(offset + 1)}/>
            <Square value={this.props.board[offset + 2]} squarePressed ={() => this.props.handleClicks(offset + 2)}/>
            </div>
        );
    }

    render() {
        console.log('Inside square grid: ' , this.props.board);
        return (
            <div className={'grid'}>
                <div>{this.getGridRow(0)}</div>
                <div className={'center-row'}>{this.getGridRow(3)}</div>
                <div>{this.getGridRow(6)}</div>
            </div>
        );
    }
}

export default Grid;