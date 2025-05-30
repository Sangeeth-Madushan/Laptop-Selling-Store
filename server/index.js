import mongoose from "mongoose";
import express from "express";
import productRouter from "./routes/productRoutes.js";
import userRoute from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import cors from 'cors';
import orderRouter from "./routes/orderRoutes.js";
import dotenv from 'dotenv';
import reviewRouter from "./routes/reviewRoutes.js";
import verifyJWT from "./middleware/auth.js";

dotenv.config(); // Load .env file variables

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use(verifyJWT);


mongoose
  .connect(
    process.env.DB_URL
  )
  .then(() => {
    console.log("Db is connected");
  })
  .catch(() => {
    console.log("Db connection failed");
  });

//Routes
app.use("/api/products",productRouter )
app.use("/api/users", userRoute)
app.use("/api/orders",orderRouter)
app.use("/api/reviews",reviewRouter)

app.listen(5000, ()=>{
    console.log("app is listening port 5000")
})