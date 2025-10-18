import mongoose from "mongoose";

const connectDB = async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅Mongoose Connected Successfully.");
  }catch(error){
    console.error("❌ Failed to Connect With Mongoose : ", error);
    process.exit(1);
  }
}

export default connectDB;