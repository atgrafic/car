const json = require("./json/list.json");

function carTemplate(car) {
    return `
    <div class="car" id=${car.id}>
    <img class="car-photo" src="${car.image[0]}">
    <h2 class="car-name">${car.name}</h2>
    <p class="car-year">${car.year}</p>
    <p class="car-km">${car.km}</p>
    <hr/>
    <button class="car-price">${car.price}</button>

    </div> `;
}

document.getElementById("carsList").innerHTML = json.carsData.map(carTemplate).join("");

export function giveMeAll() {
    return json.carsData.map(carTemplate).join("");
}
