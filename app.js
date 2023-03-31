import express  from "express";
import mongoose from "mongoose";
import { blogRouter } from "./routes/blog-routes.js";
import { router } from "./routes/user-routes.js";


const app = express();
app.use(express.json());
app.use("/api/user", router) ;

app.use("/api/blog",blogRouter);

mongoose.connect("mongodb+srv://yashparmarr:WN3HwB1HS2eJDDW7@cluster0.m3kgtdd.mongodb.net/social?retryWrites=true&w=majority"
   ).then(() => app.listen(3000))
   .then(() =>
        console.log("Connected to Database and listening to port number 3000")
    ).catch((err) => console.log(err));
    
// WN3HwB1HS2eJDDW7