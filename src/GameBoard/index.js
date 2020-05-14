import Grid from "../Grid"
import Square from "../Square"
import * as React from "react";
import './style.css'

class GameBoard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            movesList: Array(9).fill(null),
            isXNext : true,
            status: 'Player X turn',
        };
        // let [status, updateStatus] = useState('Player X turn',);

    }

    checkIfWon(squaresCopy){
        for(let offset = 0; offset < 7; offset+= 3){
            if((squaresCopy[offset] !== null) && (squaresCopy[offset] === squaresCopy[offset + 1]) && (squaresCopy[offset + 1] === squaresCopy[offset + 2]))
                return true;
        }
        for(let offset = 0; offset < 3; offset++){
            if((squaresCopy[offset] !== null) && (squaresCopy[offset] === squaresCopy[offset + 3]) && (squaresCopy[offset + 3]=== squaresCopy[offset + 6]))
                return true;
        }
        if((squaresCopy[4] !== null ) && (squaresCopy[4] === squaresCopy[0]) && (squaresCopy[0] === squaresCopy[8]))
            return true;
        return (squaresCopy[4] === squaresCopy[2]) && squaresCopy[2] === squaresCopy[6] && squaresCopy[2] !== null;
        

    }

    handleClicks(index){
        let squaresCopy = this.state.movesList.slice();

        if(squaresCopy[index] !== null || this.checkIfWon(squaresCopy)) return;

        squaresCopy[index] = this.state.isXNext ? 'X' : 'O';

        this.setState({
            movesList: squaresCopy,
            isXNext: !this.state.isXNext,
            status: !this.state.isXNext
                ? 'Player X turn' : 'Player O turn',
        });

        if(this.checkIfWon(squaresCopy)){
            this.setState({
                status: !this.state.isXNext
                    ? 'Player O Won' : 'Player X Won',
            });
            return;
        }

        if(squaresCopy.every(element => element !== null)){
            this.setState({
                status: 'It is a draw.',
            });
        }
        console.log('Finishing handle click: ', this.state.movesList, index);
    }

    getGridRow(offset) {
        return (
            <div className="grid-row">
                <div>{this.state.status}</div>
                <Square value={this.state.squares[offset + 0]} squarePressed ={() => this.handleClicks(offset + 0)}/>
                <Square value={this.state.squares[offset + 1]} squarePressed ={() => this.handleClicks(offset + 1)}/>
                <Square value={this.state.squares[offset + 2]} squarePressed ={() => this.handleClicks(offset + 2)}/>
            </div>
        );
    }

    calculateCurrentTurn(squares){
        squares.filter(e => e === null);
        this.setState({
            isXNext: squares.length %2 !== 0,
            status: squares.length %2 !== 0 ? 'Player X turn' : 'Player O turn',
        })
    }

    render(){
        console.log('Inside render with board of: ', this.state.movesList[this.state.movesList.length - 1]);
        return(
            <div className='main-page'>
                <div>
                    {this.state.status}
                </div>
                <Grid board = {this.state.movesList}
                handleClicks = {(index) => this.handleClicks(index)}
                />
            </div>
            );
    }
}

export default GameBoard;