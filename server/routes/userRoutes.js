import express from 'express';
import { getUser, loginUser, loginWithGoogle, saveUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post("/",saveUser);
userRoute.post("/login",loginUser);
userRoute.get("/",getUser);
userRoute.post("/login/google", loginWithGoogle)

export default userRoute;