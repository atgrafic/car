import style from "./css/index.scss";


//alert("Hello! I am an alert box!!");
const json = require("./json/list.json");
const brandList = json.carsData;
const carName = document.getElementsByClassName("car");
const nextURL = "car.html";

function carNameClick() {
    for (let i = 0; i < carName.length; i++) {
        //    console.log(carName[i].id)
        let id = carName[i].id;
        carName[i].addEventListener("click", (e) => nextPage(e, id));
    }
}

//
 function nextPage(e, id) {
    let carID = "";
    for (let i = 0; i < carName.length; i++) {
        if (id === brandList[i].id) {
            carID += `<h2 class="car-name-chosse">${brandList[i].name}</h2>
             <div id="content">
            <div class="all_car_photo">
                       <div>
            <img class="car-photo_1" src="${brandList[i].image[0]}">
            </div>
            <div>
            <img class="car-photo_2" src="${brandList[i].image[1]}">
            <img class="car-photo_3" src="${brandList[i].image[2]}">
            <img class="car-photo_4" src="${brandList[i].image[3]}">
            </div>
            </div>
            <div class="ditels">
            <button class="car-price-1">${brandList[i].price}</button>
            <div class="car-details">
            <div>
            <p> Marka:</p>
            <p class="car-brand"> ${brandList[i].brand}</p>
            </div>
            <div>
            <p>Rocznik:</p>
            <p class="car-year">${brandList[i].year}</p>
            </div>
            <div>
            <p>Przebieg:</p>
            <p class="car-km">${brandList[i].km}</p>
            </div>
            </div>
            <button id="car-buy">kup</button>
            </div>
            </div>
            <div>
            <h2 class="description">Opis</h2>
            <p class="car-description">${brandList[i].description}</p>
            </div>
            `;
            localStorage.setItem("carName", JSON.stringify(brandList[i].name));
            localStorage.setItem("carPrice", JSON.stringify(brandList[i].price));
        }
    }
    localStorage.setItem("carID", JSON.stringify(carID));
    location.href = nextURL;
    // console.log(id);
    // console.log(carID);
}

carNameClick();

function get() {
    let carID = JSON.parse(localStorage.getItem("carID"));

    // console.log("localstorge:", carID);
    document.getElementById("carSelected").innerHTML = carID;
}
get();

//powrot
 function goBack() {
    window.history.go(-1);
}

document.getElementById("back").addEventListener("click", goBack);


//przejście do formularza

const formName = document.getElementById("car-buy");
const nextFormURL = "form.html";

formName.addEventListener("click", () => pageForm());

function pageForm() {
    let carForm = `<p>Wybrany samochód:</p>
        <p class="car-name-orange">${JSON.parse(localStorage.getItem("carName"))}</p>
        <p>Cena samochodu:</p>
        <p class="car-price-orange">${JSON.parse(localStorage.getItem("carPrice"))}</p>`;

    localStorage.setItem("carForm", carForm);
    location.href = nextFormURL;
    console.log(carForm);
}
