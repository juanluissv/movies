import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import { listMovieDetails, addMovieFavorites, removeMovieFavorites, listMyFavorites } from '../actions/movieActions';

const Movie = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams();

    let inFavorites;
    let newTitle;
    
    const movieDetails = useSelector(state => state.movieDetails);
    const { movie, loading } = movieDetails;

    const MovieFavorites = useSelector(state => state.listMyFavorites)
    const { favoriteMovies, loading2 } = MovieFavorites

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {         
        dispatch(listMovieDetails(id))
        dispatch(listMyFavorites())          
    },[dispatch])

    const addMovie = (mymovie) => {
        const mymovie2 = {
            id,
            poster_path : movie.poster_path
        }
        dispatch(addMovieFavorites(mymovie2))
        navigate('/favorites')
    }

    const removeMovie = (id) => {
        dispatch(removeMovieFavorites(id))
        navigate('/favorites')
    }

    if (loading2 == false ) {
        for (const iterator of favoriteMovies) {
            if (iterator.id == id) {
                inFavorites = true
                break
            } else {
                inFavorites = false
            } 
        }
    }  

    return (
        <>
        
        { loading ? <Loader /> :
            <Row>
                    <Col md={6}>
                    <Image 
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                            fluid className="movieImage" />
                    </Col>
                    <Col md={6}>
                        <div className="movieDetailHeader">
                            <h3 className="movieDetailTitle">{movie.title}</h3>
                            <p className="movieDetailDescription">{movie.overview}</p>
                            <p className="movieDetailDescription">Rating: {movie.vote_average}</p>
                            <p className="movieDetailDescription">
                                <a target='_blank' 
                                    href={`https://www.youtube.com/results?search_query=${movie.title}+trailer`}>
                                    Trailer
                                </a>
                            </p>
                            { inFavorites ? 
                                <Button 
                                onClick={() => removeMovie(movie.id)}
                                className="btn btn-primary btn-lg favButton2">
                                Remove from Favorites
                                </Button>    
                            :                    
                                <Button 
                                onClick={() => addMovie(movie)}
                                className="btn btn-primary btn-lg favButton">
                                Add To Favorites
                                </Button> 
                            }
                        </div>
                    </Col>
            </Row>
       }
       </>
    )
}

export default Movie;