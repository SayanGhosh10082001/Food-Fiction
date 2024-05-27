import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('MONGO DB URL').then(()=>console.log("DB Connected"));
}
