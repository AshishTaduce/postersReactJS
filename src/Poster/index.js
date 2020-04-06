import React from 'react';
import './style.css';

class Poster extends React.Component {
    render() {
        return (
            <div class='poster' style={{
                backgroundImage: 'url(' + this.props.posterurl + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                overflow: 'hidden',
            }}>
                <div class='details'>
                    <h4 class='title'>
                        {this.props.title}
                    </h4>
                    <p className = 'overview'>
                        {this.props.overview}
                    </p>
                    <div class='genre-rating'>

                        <div class='rating'>
                            {this.props.rating}
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Poster;