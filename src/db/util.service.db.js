"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRunningDB = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DB_URL = 'mongodb://localhost:27017/cars';
const connectDB = () => {
    mongoose_1.default.connect(DB_URL)
        .then(() => {
        console.log('### MongoDb connected');
    });
};
exports.connectDB = connectDB;
const isRunningDB = () => {
    const db = mongoose_1.default.connection;
    db.on('error', (error) => {
        console.error('#### mongoDB connection error:', error);
    });
    db.once('open', () => {
        console.log('#### mongoDB Connected to:', DB_URL);
    });
    return true;
};
exports.isRunningDB = isRunningDB;
