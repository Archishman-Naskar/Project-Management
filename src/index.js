import dotenv from "dotenv";
import app from "./app.js"

dotenv.config({
  path:"./.env",
});

let val=process.env.val;
console.log("val : "+ val);


const port=process.env.PORT || 3000;



app.listen(port,()=>{
  console.log(`App is runnig on the port ${port}`);
})