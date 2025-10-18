import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path:"./.env",
});

let val=process.env.val;
console.log("val : "+ val);


const port=process.env.PORT || 3000;


connectDB()
.then(()=>{
    app.listen(port,()=>{
    console.log(`App is runnig on the port ${port}`);
    })
})
.catch((err)=>{
  console.error("Mongoose Error : ",err);
})
