
import express from "express";
import { createOrder } from "../controllers/orderController.js";
import verifyJWT from "../middleware/auth.js";

const orderRouter = express.Router();
orderRouter.post("/", verifyJWT, createOrder); 

export default orderRouter;
