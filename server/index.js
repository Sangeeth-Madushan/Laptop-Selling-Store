import mongoose from "mongoose";
import express from "express";
import productRouter from "./routes/productRoutes.js";
import userRoute from "./routes/userRoutes.js";
import jwt, { decode } from "jsonwebtoken";
import bodyParser from "body-parser";
import cors from 'cors';
import orderRouter from "./routes/orderRoutes.js";
import dotenv from 'dotenv';

dotenv.config(); // Load .env file variables

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use((req,res,next)=>{
  const tokenString = req.header("Authorization");
  if(tokenString != null){

    const token = tokenString.replace("Bearer ", "")
   
    jwt.verify(token, "AbcJayalath99",(err, decoded)=>{
     
      if(decoded != null){
        // Stores the decoded user data with user request inside req.user
        req.user = decoded
        next();
      }else{
        res.status(403).json({
          message: "Invalid token",
        });
      }

    })
    // when user try to log into the system no token
  }else{
    next();
  }


});



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

app.listen(5000, ()=>{
    console.log("app is listening port 5000")
})