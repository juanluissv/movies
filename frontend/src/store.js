import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

import { 
        movieListReducer, 
        movieDetailsReducer,
        searchMovieReducer,
        GenderListMoviesReducer,
        listMyFavoritesReducer,
        addMovieFavoritesReducer,
        removeMovieFavoritesReducer
    } from './reducers/movieReducers';
import { userRegisterReducer, userLoginReducer, userDetailsReducer } from './reducers/userReducers'

const reducer = combineReducers({
    movieList: movieListReducer,
    movieDetails: movieDetailsReducer,
    searchMovies: searchMovieReducer,
    genderList: GenderListMoviesReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    addMovieFavorites: addMovieFavoritesReducer,
    listMyFavorites: listMyFavoritesReducer,
    removeMovieFavorites: removeMovieFavoritesReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store;