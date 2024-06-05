import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL;

    try {
        const { connection } = await mongoose.connect(db, { useNewUrlParser: true });
        console.log(`MongoDB Connected to ${connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
}