require("dotenv").config();
const express= require("express");

const app = express();

const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;
const products_route = require("./routes/products")

app.get("/", (req, res)=>{
  res.send("hi from server");
})

app.use("/api/products", products_route);

const start = async () => {
    
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, ()=>{
            console.log(`server connected on ${PORT}`);
        })
    } catch (error) {
        console.log("not connected");
    }
}

start();


