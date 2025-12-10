import { MOVIES_LIST_FAIL, 
         MOVIES_LIST_SUCCESS, 
         MOVIES_LIST_REQUEST,
         MOVIES_DETAILS_REQUEST,
         MOVIES_DETAILS_SUCCESS,
         MOVIES_DETAILS_FAIL,
         SEARCH_MOVIE_REQUEST,
         SEARCH_MOVIE_SUCCESS,
         SEARCH_MOVIE_FAIL,
         GENDER_LIST_REQUEST,
         GENDER_LIST_SUCCESS,
         GENDER_LIST_FAIL,      
         ADD_MOVIE_FAVORITE_REQUEST,
         ADD_MOVIE_FAVORITE_SUCCESS,
         ADD_MOVIE_FAVORITE_FAIL,
         LIST_MOVIE_FAVORITE_REQUEST,
         LIST_MOVIE_FAVORITE_SUCCESS,
         LIST_MOVIE_FAVORITE_FAIL,
         REMOVE_MOVIE_FAVORITE_REQUEST,
         REMOVE_MOVIE_FAVORITE_SUCCESS,
         REMOVE_MOVIE_FAVORITE_FAIL
} from '../constants/movieConstants';
import axios from 'axios';

export const listMovies = () => async (dispatch) => {
    try {
        dispatch({
            type: MOVIES_LIST_REQUEST
        })
        
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=805be512078ad6fc74aec232fda73689&language=en-US&page=1&include_adult=false`)

        dispatch({
            type: MOVIES_LIST_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: MOVIES_LIST_FAIL,
            payload: error.response
        })

    }
}

export const listMovieDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: MOVIES_DETAILS_REQUEST
        })

        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=805be512078ad6fc74aec232fda73689&language=en-US`)

        dispatch({
            type: MOVIES_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: MOVIES_DETAILS_FAIL,
            payload: error.response
        })
    }
}


export const searchMovie = (title) => async (dispatch) => {
    try {
        dispatch({
            type: SEARCH_MOVIE_REQUEST
        })
        
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=805be512078ad6fc74aec232fda73689&language=en-US&query=${title}`)
        
        dispatch({
            type: SEARCH_MOVIE_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: SEARCH_MOVIE_FAIL,
            payload: error.response
        })

    }
}


export const  addMovieFavorites = (movie) => async(dispatch, getState) => {

    try {
        dispatch({
            type: ADD_MOVIE_FAVORITE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('/api/favorites', movie, config)

        dispatch({
            type: ADD_MOVIE_FAVORITE_SUCCESS,
            payload: data,
        })
            
    } catch(error) {
        dispatch({
            type: ADD_MOVIE_FAVORITE_FAIL,
            payload: error.response
        })
    }
}


export const removeMovieFavorites = (id) => async(dispatch, getState) => {
    try{
        dispatch({
            type: REMOVE_MOVIE_FAVORITE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(`/api/favorites/myfavorites/${id}`, config)

        dispatch({
            type: REMOVE_MOVIE_FAVORITE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: REMOVE_MOVIE_FAVORITE_FAIL,
            payload: error.response
        })

    }
}

export const listMyFavorites = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: LIST_MOVIE_FAVORITE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/favorites/myfavorites', config)

        dispatch({
            type: LIST_MOVIE_FAVORITE_SUCCESS,
            payload: data 
        })

    } catch (error) {
        dispatch({
            type: LIST_MOVIE_FAVORITE_FAIL,
            payload: error.response
        })
    }
}


export const genderListMovies = (gender) => async (dispatch) => {
    try {
        dispatch({
            type: GENDER_LIST_REQUEST
        })

        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=805be512078ad6fc74aec232fda73689&with_genres=${gender}&language=en-US`)

        dispatch({
            type: GENDER_LIST_SUCCESS,
            payload: data.results
        })
    } catch (error) {
        dispatch({
            type: GENDER_LIST_FAIL,
            payload: error.response
        })
    }
}