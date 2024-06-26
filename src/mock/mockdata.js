"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cars = [
    { "id": 1, "marke": "BMW", "modell": "X5", "baujahr": 2020, "farbe": "Schwarz", "ps": 300, "preis": 50000, "image_url": "" },
    { "id": 2, "marke": "Audi", "modell": "A4", "baujahr": 2019, "farbe": "Weiß", "ps": 250, "preis": 40000, "image_url": "https://web21st.imgix.net/assets/images/new-vehicles/audi/audi-a4-avant-black-edition-mythos-black.png" },
    { "id": 3, "marke": "Mercedes", "modell": "C-Class", "baujahr": 2021, "farbe": "Blau", "ps": 280, "preis": 55000, "image_url": "" },
    { "id": 4, "marke": "Volkswagen", "modell": "Golf", "baujahr": 2018, "farbe": "Rot", "ps": 200, "preis": 30000, "image_url": "" },
    { "id": 5, "marke": "Porsche", "modell": "911", "baujahr": 2022, "farbe": "Gelb", "ps": 450, "preis": 100000, "image_url": "" },
    { "id": 6, "marke": "Tesla", "modell": "Model S", "baujahr": 2020, "farbe": "Grau", "ps": 500, "preis": 80000, "image_url": "" },
    { "id": 7, "marke": "Ford", "modell": "Mustang", "baujahr": 2017, "farbe": "Schwarz", "ps": 350, "preis": 45000, "image_url": "" },
    { "id": 8, "marke": "Chevrolet", "modell": "Camaro", "baujahr": 2019, "farbe": "Blau", "ps": 370, "preis": 42000, "image_url": "" },
    { "id": 9, "marke": "Lamborghini", "modell": "Huracan", "baujahr": 2021, "farbe": "Grün", "ps": 610, "preis": 200000, "image_url": "" },
    { "id": 10, "marke": "Ferrari", "modell": "488", "baujahr": 2020, "farbe": "Rot", "ps": 670, "preis": 250000, "image_url": "" },
    { "id": 11, "marke": "BMW", "modell": "3 Series", "baujahr": 2018, "farbe": "Weiß", "ps": 200, "preis": 35000, "image_url": "" },
    { "id": 12, "marke": "Audi", "modell": "Q5", "baujahr": 2020, "farbe": "Schwarz", "ps": 310, "preis": 60000, "image_url": "" },
    { "id": 13, "marke": "Mercedes", "modell": "E-Class", "baujahr": 2019, "farbe": "Grau", "ps": 280, "preis": 52000, "image_url": "" },
    { "id": 14, "marke": "Volkswagen", "modell": "Passat", "baujahr": 2021, "farbe": "Blau", "ps": 220, "preis": 33000, "image_url": "" },
    { "id": 15, "marke": "Porsche", "modell": "Cayenne", "baujahr": 2022, "farbe": "Schwarz", "ps": 340, "preis": 90000, "image_url": "" },
    { "id": 16, "marke": "Tesla", "modell": "Model 3", "baujahr": 2019, "farbe": "Weiß", "ps": 450, "preis": 50000, "image_url": "" },
    { "id": 17, "marke": "Ford", "modell": "Explorer", "baujahr": 2020, "farbe": "Blau", "ps": 400, "preis": 55000, "image_url": "" },
    { "id": 18, "marke": "Chevrolet", "modell": "Corvette", "baujahr": 2021, "farbe": "Rot", "ps": 490, "preis": 70000, "image_url": "" },
    { "id": 19, "marke": "Lamborghini", "modell": "Aventador", "baujahr": 2022, "farbe": "Orange", "ps": 700, "preis": 300000, "image_url": "" },
    { "id": 20, "marke": "Ferrari", "modell": "Roma", "baujahr": 2021, "farbe": "Blau", "ps": 620, "preis": 220000, "image_url": "" },
    { "id": 21, "marke": "BMW", "modell": "X3", "baujahr": 2021, "farbe": "Grau", "ps": 290, "preis": 45000, "image_url": "" },
    { "id": 22, "marke": "Audi", "modell": "A6", "baujahr": 2018, "farbe": "Schwarz", "ps": 240, "preis": 38000, "image_url": "" },
    { "id": 23, "marke": "Mercedes", "modell": "S-Class", "baujahr": 2020, "farbe": "Weiß", "ps": 330, "preis": 80000, "image_url": "" },
    { "id": 24, "marke": "Volkswagen", "modell": "Tiguan", "baujahr": 2019, "farbe": "Silber", "ps": 210, "preis": 35000, "image_url": "" },
    { "id": 25, "marke": "Porsche", "modell": "Panamera", "baujahr": 2021, "farbe": "Blau", "ps": 400, "preis": 110000, "image_url": "" },
    { "id": 26, "marke": "Tesla", "modell": "Model X", "baujahr": 2021, "farbe": "Rot", "ps": 490, "preis": 90000, "image_url": "" },
    { "id": 27, "marke": "Ford", "modell": "F-150", "baujahr": 2022, "farbe": "Grün", "ps": 450, "preis": 60000, "image_url": "" },
    { "id": 28, "marke": "Chevrolet", "modell": "Tahoe", "baujahr": 2020, "farbe": "Schwarz", "ps": 355, "preis": 70000, "image_url": "" },
    { "id": 29, "marke": "Lamborghini", "modell": "Urus", "baujahr": 2019, "farbe": "Gelb", "ps": 650, "preis": 250000, "image_url": "" },
    { "id": 30, "marke": "Ferrari", "modell": "SF90", "baujahr": 2022, "farbe": "Silber", "ps": 780, "preis": 350000, "image_url": "" },
    { "id": 31, "marke": "BMW", "modell": "i8", "baujahr": 2020, "farbe": "Blau", "ps": 369, "preis": 140000, "image_url": "" },
    { "id": 32, "marke": "Audi", "modell": "TT", "baujahr": 2021, "farbe": "Rot", "ps": 220, "preis": 45000, "image_url": "" },
    { "id": 33, "marke": "Mercedes", "modell": "GLA", "baujahr": 2019, "farbe": "Grau", "ps": 250, "preis": 40000, "image_url": "" },
    { "id": 34, "marke": "Volkswagen", "modell": "Arteon", "baujahr": 2020, "farbe": "Blau", "ps": 280, "preis": 45000, "image_url": "" },
    { "id": 35, "marke": "Porsche", "modell": "Macan", "baujahr": 2021, "farbe": "Weiß", "ps": 360, "preis": 85000, "image_url": "" },
    { "id": 36, "marke": "Tesla", "modell": "Model Y", "baujahr": 2020, "farbe": "Schwarz", "ps": 450, "preis": 60000, "image_url": "" },
    { "id": 37, "marke": "Ford", "modell": "Bronco", "baujahr": 2021, "farbe": "Orange", "ps": 310, "preis": 50000, "image_url": "" },
    { "id": 38, "marke": "Chevrolet", "modell": "Suburban", "baujahr": 2018, "farbe": "Weiß", "ps": 355, "preis": 60000, "image_url": "" },
    { "id": 39, "marke": "Lamborghini", "modell": "Gallardo", "baujahr": 2017, "farbe": "Grau", "ps": 570, "preis": 180000, "image_url": "" },
    { "id": 40, "marke": "Ferrari", "modell": "Portofino", "baujahr": 2020, "farbe": "Gelb", "ps": 591, "preis": 220000, "image_url": "" },
    { "id": 41, "marke": "BMW", "modell": "7 Series", "baujahr": 2021, "farbe": "Schwarz", "ps": 340, "preis": 120000, "image_url": "" },
    { "id": 42, "marke": "Audi", "modell": "Q7", "baujahr": 2019, "farbe": "Blau", "ps": 330, "preis": 70000, "image_url": "" },
    { "id": 43, "marke": "Mercedes", "modell": "GLE", "baujahr": 2022, "farbe": "Silber", "ps": 300, "preis": 75000, "image_url": "" },
    { "id": 44, "marke": "Volkswagen", "modell": "Jetta", "baujahr": 2020, "farbe": "Rot", "ps": 230, "preis": 28000, "image_url": "" },
    { "id": 45, "marke": "Porsche", "modell": "Taycan", "baujahr": 2021, "farbe": "Grün", "ps": 420, "preis": 150000, "image_url": "" },
    { "id": 46, "marke": "Tesla", "modell": "Roadster", "baujahr": 2022, "farbe": "Blau", "ps": 512, "preis": 43000, "image_url": "" }
];
exports.default = cars;
