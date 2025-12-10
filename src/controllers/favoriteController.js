import asyncHandler from 'express-async-handler';
import Favorite from '../models/favoriteModel.js';


//POST /api/favorites
const addFavorites = asyncHandler(async (req, res) => {
    const { id, poster_path } = req.body

    const favorite = new Favorite({
        user: req.user._id,
        id,
        poster_path,
    })
    const createFavorite = await favorite.save()
    res.status(201).json(createFavorite)
})

//GET /api/favorites/myfavorites
const getMyFavorites = asyncHandler(async (req, res) => {
    const favorites = await Favorite.find({ user: req.user._id })
    res.json(favorites)

})

//DELETE /api/favorites/myfavorites/id
const deleteMyFavorites = asyncHandler(async (req, res) => {
    Favorite.find({ id: req.params.id, user: req.user._id }).deleteOne().exec();        
})


export {
    addFavorites,
    getMyFavorites,
    deleteMyFavorites
}