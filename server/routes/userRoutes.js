import express from 'express';
import { getUser, loginUser, saveUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post("/",saveUser);
userRoute.post("/login",loginUser);
userRoute.get("/",getUser);

export default userRoute;