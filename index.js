import dotenv from "dotenv";

dotenv.config({
  path:"./.env",
});

let val=process.env.val;
console.log("val : "+ val);