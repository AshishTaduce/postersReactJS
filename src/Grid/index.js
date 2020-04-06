import React from "react";
// import Square from "../Square";
import MoviesList from "../MoviesList"

class Grid extends React.Component {

    // constructor(props){
    //     super(props);
    //     // this.state = {
    //     //     // squares: this.props.board,
    //     // }
    // }

    // getPosters() {
    //     let items = [];
    //     for(let i = 0; i < movie.length; i++){
    //         items.push(<Poster 
    //             posterurl = {movie[i].posterurl}
    //             title = {movie[i].title}
    //             genre = {movie[i].genres}
    //             rating = {movie[i].contentRating}
    //             />)
    //     }
    //     return (<div className="grid-row">
    //             {items}
    //             </div>);
    // }

    // getGridRow(offset) {
    //     return (
    //         <div className="grid-row">
    //         <Square value={this.state.squares[offset + 0]} squarePressed ={() => this.props.handleClicks(offset + 0)}/>
    //         <Square value={this.state.squares[offset + 1]} squarePressed ={() => this.props.handleClicks(offset + 1)}/>
    //         <Square value={this.state.squares[offset + 2]} squarePressed ={() => this.props.handleClicks(offset + 2)}/>
    //         </div>
    //     );
    // }

    render() {
        return (
            <MoviesList/>
        );
    }
}



export default Grid;




// getPosters() {
//         let items = [];
//         for(let i = 0; i < movie.length; i++){
//             items.push(<Poster 
//                 posterurl = {movie[i].posterurl}
//                 title = {movie[i].title}
//                 genre = {movie[i].genres}
//                 rating = {movie[i].contentRating}
//                 />)
//         }
