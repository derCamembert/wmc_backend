//client.ts
window.onload = () => {
    fetch('http://localhost:3000/cars')
        .then(response => {
        const data = response;
        console.log("Response:", data);
        return data.json();
    })
        .then(data => {
        const cars = data;
        const carsDiv = document.querySelector("#cars");
        for (let i = 0; i < cars.length; i++) {
            carsDiv.innerHTML += ` <p id=${i}>Todo: [${cars[i].marke}] ${cars[i].modell} - 
                                            ${cars[i].preis}</p>`;
        }
    });
};
export {};
