import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import Loader from './Loader';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { searchMovie } from '../actions/movieActions';

const Search = () =>  {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const searchMovies = useSelector(state => state.searchMovies)
  const { loading, movies } = searchMovies

  const getMovie = (e) => {
    e.preventDefault()
    dispatch(searchMovie(title))
  }


    return (
      <div>
          <Row>
            <Col>
            <Form onSubmit={getMovie} className="searchForm">
                <Form.Group controlId='name'>
                  <Form.Control
                    type="title"
                    name="title"
                    placeholder="Please enter Movie Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              <Button type='submit' variant='outline-primary' size="lg" className="searchButton">
                Search
              </Button> 
            </Form>
            </Col>
          </Row>

            {loading ? <Loader /> : 
            <Row>
              {movies.filter(movie => movie.poster_path).map(movie => (
                <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
            }

        </div>
    )
}


export default Search