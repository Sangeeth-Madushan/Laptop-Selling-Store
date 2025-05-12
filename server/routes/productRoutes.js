import express from "express";
import { getProduct, saveProduct, deleteProduct } from "../controllers/productController.js";


const productRouter = express.Router();

productRouter.post("/",saveProduct);

productRouter.get("/",getProduct);

productRouter.delete("/:productId",deleteProduct)

export default productRouter;