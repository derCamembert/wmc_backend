import express from "express";
import {Car} from "../src/db/Cars.model.db";
import {ICar} from "../src/model/ICar";

let router = express.Router();

router.get("/", (req, res) => {
    console.log("GET");

    const sortParam: string = req.query.sortBy as string;
    
    Car.find()
        .then((cars: ICar[]) => {
            switch (sortParam) {
                case "modell":
                    cars.sort((a, b) =>
                        a.modell.localeCompare(b.modell));
                    break;
                case "marke":
                    cars.sort((a, b) =>
                        a.marke.localeCompare(b.marke));
                    break;
            }
            res.send(cars);

        })
        .catch(error => {
            console.error("GET ERROR:", error);
            res.status(500).send("EORROR-GET:" +
                error);
        })
});

router.post("/", (req, res) => {
    const newCar = req.body;
    console.log("new car:", newCar);
    res.status(201).json(newCar);
});

router.patch("/:id", async (req, res) => {
    try {
        const carId = req.params.id;
        const doneValue = req.body.done;

        if (carId === undefined || doneValue ===undefined ) {
            return res.status(400). json ( { error: "Ungültige Parameter!"});
        }

        const updatedCar = await Car.findByIdAndUpdate( {_id: carId}, {done:doneValue},
            {new :true});

        console.log("Patch updated:", updatedCar);
        return res.status(200).json ( {done: "is updated"});

        } catch (error) {
            return res.status(500).json({error: "Interner Patch Fehler:" + error})
    }
})

module.exports = router;