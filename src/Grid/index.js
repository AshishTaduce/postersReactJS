import React from "react";
import Square from "../Square";
// import MoviesList from "../MoviesList"
// import { Link } from "react-router-dom";

class Grid extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            squares: this.props.board,
        }
    }

    getGridRow(offset) {
        return (
            <div className="grid-row">
            <Square value={this.state.squares[offset]} squarePressed ={() => this.props.handleClicks(offset)}/>
            <Square value={this.state.squares[offset + 1]} squarePressed ={() => this.props.handleClicks(offset + 1)}/>
            <Square value={this.state.squares[offset + 2]} squarePressed ={() => this.props.handleClicks(offset + 2)}/>
            </div>
        );
    }

    render() {
        return (
            <div className={'grid'}>
                <div>{this.getGridRow(0)}</div>
                <div>{this.getGridRow(3)}</div>
                <div>{this.getGridRow(6)}</div>
            </div>
        );
    }
}

export default Grid;