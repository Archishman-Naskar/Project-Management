import express from "express";
import cors from "cors";

const app=express();

//basic set up
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//basic cros set up
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://locahost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//setting up the routes

import healthCheckRouter from "./routes/healthcheck.routes.js";


app.use("/api/v1/healthcheck", healthCheckRouter);
          //home route    +   //specific route

app.get("/",(req,res)=>{
  res.send("Hello World!");
})

app.get("/instagram",(req,res)=>{
  res.send("This is Instragram.");
})

export default app;