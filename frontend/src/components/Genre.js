import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import { genderListMovies } from '../actions/movieActions';
import MovieCard from './MovieCard';

const Genre = () => {

    const dispatch = useDispatch()

    const genderList = useSelector(state => state.genderList) 
    const { loading, movies } = genderList

    const getGender = (gender) => {
        dispatch(genderListMovies(gender))        
    }

    return ( 
        <>       
        <div>
            <img 
                src='../images/action.png'
                onClick={() => getGender('28')}
                className=""
            />
            <img 
                src='../images/animated.png'
                onClick={() => getGender('16')}
                className="imageGender"
            />
            <img 
                src='../images/comedy.png'
                onClick={() => getGender('35')}
                className="imageGender"
            />
            <img 
                src='../images/crime.png'
                onClick={() => getGender('80')}
                className="imageGender"
            />
            <img 
                src='../images/documentary.png'
                onClick={() => getGender('99')}
                className="imageGender"
            />
            <img 
                src='../images/drama.png'
                onClick={() => getGender('18')}
                className="imageGender2"
            />
            <img 
                src='../images/horror.png'
                onClick={() => getGender('27')}
                className="imageGender"
            />
            <img 
                src='../images/kids.png'
                onClick={() => getGender('10751')}
                className="imageGender"
            />
            <img 
                src='../images/romance.png'
                onClick={() => getGender('10749')}
                className="imageGender"
            />
            <img 
                src='../images/science.png'
                onClick={() => getGender('878')}
                className="imageGender"
            />
        </div>

        {loading ? <Loader /> : 
            <Row className="genreImages">
                {movies.map(movie => (
                    <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        }
        </>
    )
}

export default Genre