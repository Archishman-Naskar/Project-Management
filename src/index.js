import dotenv from "dotenv";
import express from "express";

dotenv.config({
  path:"./.env",
});

let val=process.env.val;
console.log("val : "+ val);

const app=express();
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
  res.send("Hello World!");
})

app.get("/instagram",(req,res)=>{
  res.send("This is Instragram.");
})

app.listen(port,()=>{
  console.log(`App is runnig on the port ${port}`);
})