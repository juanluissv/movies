import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listFavorites } from '../actions/movieActions';

const MovieCard = ({movie}) => {

    return ( 
        <Card className="my-4 p3 dounded" style={{ background: 'black' }}>
            <Link to={`/movie/${movie.id}`} >
                <Card.Img 
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="cardImg"
                />                 
            </Link>                       
        </Card>
    )
}

export default MovieCard