import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sayanghosh1008:0f768Q3n2IVotSyt@cluster0.a8biqnn.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}