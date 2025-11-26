import express from 'express';
import { loginUser, registerUser, adminLogin, getProfile } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

// GET endpoint to fetch the user profile
userRouter.get('/profile', authMiddleware, getProfile);

export default userRouter;