import express from "express";
import { getProduct, saveProduct, deleteProduct, updateProduct, getProductById } from "../controllers/productController.js";


const productRouter = express.Router();

productRouter.post("/",saveProduct);

productRouter.get("/",getProduct);

productRouter.delete("/:productId",deleteProduct);

productRouter.put("/:productId",updateProduct);

productRouter.get("/:productId", getProductById)

export default productRouter;