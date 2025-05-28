import express from 'express';
import { addReview, getAllReviews, getReviews } from '../controllers/reviewController.js';

const reviewRouter = express.Router();

reviewRouter.post("/", addReview);
reviewRouter.get("/",getAllReviews);
reviewRouter.get("/:productId",getReviews);

export default reviewRouter