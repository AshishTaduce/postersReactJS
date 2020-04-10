import React from "react";
import './style.css'

class DetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            isLoading: true,
        }
    }

    async componentDidMount() {
        let temp = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=a68598b6e3e81567486644082b967d8f`)
        temp = (await temp.json());
        console.log('Temp iss ' + temp.id);
        this.setState({
            movie: temp,
            isLoading: false
        });
    }

    render() {
        let movie = this.props.location.state.movie;
        let backdrop_url = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        console.log(`is Loading: ${this.state.isLoading}`);
        if (this.state.isLoading) {
            return (
                <div className='detailsPage isLoading'>
                    <div>
                        <div className="spinner"></div>
                    </div>
                </div>);
        }
        else {
            console.log('Inside else ' + this.state.movie);
            movie = this.state.movie
            return (
                <div>
                    <div className='detailsPage isNotLoading' style={{
                        backgroundImage: 'url(' + backdrop_url + ')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        overflow: 'hidden',
                        backgroundPosition: 'center',
                        backgroundColor: 'black',
                        overflow: 'hidden',
                    }}>
                        <div className='shade'></div>

                        <div className='details-poster'>
                            <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Poster"></img>
                        </div>
                        <div className='content-details'>

                            <div>
                                <h2>{movie.title}</h2>
                            </div>

                            <div className='tagline'>
                                {movie.tagline}
                            </div>

                            <div>
                                <p className='overview-details'>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default DetailsPage;