import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';

import { getUsers, getUserProfile, registerUser, authUser } from '../controllers/userController.js'

router.route('/').post(registerUser).get(getUsers)
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile)


export default router;