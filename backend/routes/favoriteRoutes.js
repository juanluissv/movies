import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMIddleware.js'
import { addFavorites, getMyFavorites, deleteMyFavorites } from '../controllers/favoriteController.js'

router.route('/').post(protect, addFavorites);
router.route('/myfavorites/').get(protect, getMyFavorites);
router.route('/myfavorites/:id').delete(protect, deleteMyFavorites);


export default router;