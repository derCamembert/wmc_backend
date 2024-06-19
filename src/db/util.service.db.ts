import mongoose from "mongoose";

const DB_URL = 'mongodb://localhost:27017/cars';

export const connectDB = () => {
    mongoose.connect(DB_URL)
        .then(() => {
        console.log('### MongoDb connected');
    });
};

export const isRunningDB = () => {
    const db = mongoose.connection;

    db.on('error', (error) => {
        console.error('#### mongoDB connection error:', error);
    });

    db.once('open', () => {
        console.log('#### mongoDB Connected to:', DB_URL);
    });

    return true;
};
