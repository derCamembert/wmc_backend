// MongoDB Verbindung
//TODO: In den neueren Versionen von Mongoose sind die Optionen useNewUrlParser und useUnifiedTopology nicht mehr erforderlich.
import mongoose, {Schema} from "mongoose";

const carschema = new Schema({
    id: { type: Number, required: true },
    marke: { type: String, required: true },
    modell: { type: String, required: true },
    baujahr: { type: Number, required: true },
    farbe: { type: String, required: true },
    ps: { type: Number, required: true },
    preis: { type: Number, required: true },
    image_url: {type: String, required: false}
});

const CarsModelDb = mongoose.model('Todo', carschema);

export const Car = CarsModelDb;