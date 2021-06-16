import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import Loader from './Loader'
import { Row, Col } from 'react-bootstrap'
import { listMyFavorites } from '../actions/movieActions'


const Favorites = ({history}) => {

  

    const dispatch = useDispatch()
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const MovieFavorites = useSelector(state => state.listMyFavorites)
    const { favoriteMovies, loading2 } = MovieFavorites




    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        } else {
            dispatch(listMyFavorites())
        }

    },[dispatch, history, userInfo])



    return ( 
        <>
            {loading2 ? <Loader /> : 
                <Row>
                    {favoriteMovies.map(movie => (
                        <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                            <MovieCard  movie={movie} />
                        </Col>
                    ))}
                </Row>  
            } 
        </> 
    )
}

export default Favorites;