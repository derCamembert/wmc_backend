"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// MongoDB Verbindung
//TODO: In den neueren Versionen von Mongoose sind die Optionen useNewUrlParser und useUnifiedTopology nicht mehr erforderlich.
const mongoose_1 = __importStar(require("mongoose"));
const carschema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    marke: { type: String, required: true },
    modell: { type: String, required: true },
    baujahr: { type: Number, required: true },
    farbe: { type: String, required: true },
    ps: { type: Number, required: true },
    preis: { type: Number, required: true },
    image_url: { type: String, required: false }
});
const CarsModelDb = mongoose_1.default.model('Todo', carschema);
exports.Car = CarsModelDb;
