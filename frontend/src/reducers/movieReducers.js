import { 
    MOVIES_LIST_REQUEST, 
    MOVIES_LIST_SUCCESS, 
    MOVIES_LIST_FAIL,
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

export const movieListReducer = (state = { movies: [] }, action) => {
    switch(action.type) {
        case MOVIES_LIST_REQUEST:
            return {
                loading: true,
                movies: []
            }
        case MOVIES_LIST_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }
        case MOVIES_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}

export const movieDetailsReducer = (state = {movie: {}}, action) => {
    switch(action.type) {
        case MOVIES_DETAILS_REQUEST:
            return {
                loading: true
            }
        case MOVIES_DETAILS_SUCCESS:
            return {
                loading: false,
                movie: action.payload
            }
        case MOVIES_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const searchMovieReducer = (state = { movies: [] }, action) => {
    switch(action.type) {
        case SEARCH_MOVIE_REQUEST:
            return {
                loading: true,
                movies: []
            }
        case SEARCH_MOVIE_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }
        case SEARCH_MOVIE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}

export const addMovieFavoritesReducer = (state = {}, action) => {
    switch(action.type) {
        case ADD_MOVIE_FAVORITE_REQUEST:
            return {
                loading: true
            }
        case ADD_MOVIE_FAVORITE_SUCCESS:
            return {
                loading: false,
                favoriteMovie: action.payload
            }
        case ADD_MOVIE_FAVORITE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const removeMovieFavoritesReducer = (state = {}, action) => {
    switch(action.type) {
        case REMOVE_MOVIE_FAVORITE_REQUEST:
            return {
                loading: true
            }
        case REMOVE_MOVIE_FAVORITE_SUCCESS:
            return { 
                loading: false, 
                favoriteMovie: action.payload
            }
        case REMOVE_MOVIE_FAVORITE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const listMyFavoritesReducer = (state = {favoriteMovies:[]}, action) => {
    switch(action.type) {
        case LIST_MOVIE_FAVORITE_REQUEST:
            return {
                loading2: true
            }
        case LIST_MOVIE_FAVORITE_SUCCESS:
            return  {
                loading2: false,
                favoriteMovies: action.payload
            }
        case LIST_MOVIE_FAVORITE_FAIL:
            return {
                error: action.payload
            }
        default:
            return state
    }
} 

export const GenderListMoviesReducer = (state = { movies: [] }, action) => {
    switch(action.type) {
        case GENDER_LIST_REQUEST:
            return {
                loading: true,
                movies: []
            }
        case GENDER_LIST_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }
        case GENDER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}