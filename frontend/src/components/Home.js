import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import Loader from './Loader'
import { Row, Col } from 'react-bootstrap'
import { listMovies } from '../actions/movieActions';

const Home = () => {

    const dispatch = useDispatch();

    const movieList = useSelector(state => state.movieList)
    const { loading, movies } = movieList

    useEffect(() => {
        dispatch(listMovies())
    },[dispatch])

    return (
        <>
            {loading ? <Loader /> : 
                <Row>
                    {movies.filter(movie => movie.poster_path).map(movie => (
                        <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                            <MovieCard movie={movie}/>
                        </Col>
                    ))}
                </Row>            
            }
        </>
    )
}

export default Home;