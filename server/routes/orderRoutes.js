
import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";
import verifyJWT from "../middleware/auth.js";

const orderRouter = express.Router();
orderRouter.post("/", verifyJWT, createOrder); 
orderRouter.get("/", verifyJWT, getOrders)

export default orderRouter;
