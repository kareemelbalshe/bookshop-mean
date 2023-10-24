import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bookstore")
        console.log("connect To MongoDB ^_^");
    }
    catch (error) {
        console.log("connect Faild ", error);
    }
}