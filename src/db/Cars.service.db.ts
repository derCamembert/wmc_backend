// MongoDB Verbindung
//TODO: In den neueren Versionen von Mongoose sind die Optionen useNewUrlParser und useUnifiedTopology nicht mehr erforderlich.
import mongoose, {Schema} from "mongoose";
import mockdata from "../mock/mockdata";
import {Car} from "./Cars.model.db";


export async function initializeDB() {
    console.log("test test");
    try {
        await Car.deleteMany();
        const result = await Car.insertMany(mockdata);
        console.log("##### mongodb successfully inserted:", result.length);
    }
    catch (error) {
        console.error(" ### error: mongodb insertion error:", error);
    }
}