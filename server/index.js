import mongoose from "mongoose";
import express from "express";

const app = express();

mongoose.connect("")
app.use(bodyParser.json());
mongoose
  .connect(
    "mongodb+srv://user:12345@cluster0.mdhspzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Db is connected");
  })
  .catch(() => {
    console.log("Db connection failed");p
  });



app.listen(5000, ()=>{
    console.log("app is listening port 5000")
})