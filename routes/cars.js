"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Cars_model_db_1 = require("../src/db/Cars.model.db");
let router = express_1.default.Router();
router.get("/", (req, res) => {
    console.log("GET");
    const sortParam = req.query.sortBy;
    Cars_model_db_1.Car.find()
        .then((cars) => {
        switch (sortParam) {
            case "modell":
                cars.sort((a, b) => a.modell.localeCompare(b.modell));
                break;
            case "marke":
                cars.sort((a, b) => a.marke.localeCompare(b.marke));
                break;
        }
        res.send(cars);
    })
        .catch(error => {
        console.error("GET ERROR:", error);
        res.status(500).send("EORROR-GET:" +
            error);
    });
});
router.post("/", (req, res) => {
    const newCar = req.body;
    console.log("new car:", newCar);
    res.status(201).json(newCar);
});
router.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.id;
        const doneValue = req.body.done;
        if (carId === undefined || doneValue === undefined) {
            return res.status(400).json({ error: "Ungültige Parameter!" });
        }
        const updatedCar = yield Cars_model_db_1.Car.findByIdAndUpdate({ _id: carId }, { done: doneValue }, { new: true });
        console.log("Patch updated:", updatedCar);
        return res.status(200).json({ done: "is updated" });
    }
    catch (error) {
        return res.status(500).json({ error: "Interner Patch Fehler:" + error });
    }
}));
module.exports = router;
