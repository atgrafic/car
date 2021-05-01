import style from "./css/index.scss";

//alert("Hello! I am an alert box!!");
const json = require("./json/list.json");
const jsonList = json.carsData;
const carName = document.getElementsByClassName("car");
const nextURL = "form.html";

function carNameClick() {
    for (let i = 0; i < carName.length; i++) {
        //    console.log(carName[i].id)
        let id = carName[i].id;
        carName[i].addEventListener("click", (e) => nextPage(e, id));
    }
}

function nextPage(e, id) {
    let carID = "";
    for (let i = 0; i < carName.length; i++) {
        if (id === jsonList[i].id) {
            carID += `<h2 class="car-name">${jsonList[i].name}</h2>
            <div class="all_car_photo">
            <img class="car-photo_1" src="${jsonList[i].image[0]}">
            <img class="car-photo_2" src="${jsonList[i].image[1]}">
            <img class="car-photo_3" src="${jsonList[i].image[2]}">
            <img class="car-photo_4" src="${jsonList[i].image[3]}">
            </div>
            <div>
            <button class="car-price">${jsonList[i].price}</button>
            <p class="car-brand"> ${jsonList[i].brand}</p>
            <p class="car-year">${jsonList[i].year}</p>
            <p class="car-km">${jsonList[i].km}</p>
            </div>
            <div>
            <h2>Opis</h2>
            <p class="car-description">${jsonList[i].description}</p>
            </div>
            `;

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

    console.log("localstorge:", carID);
    document.getElementById("carSelected").innerHTML = carID;
}
get();

//powrot
function goBack() {
    window.history.go(-1);
  }

  document.getElementById("back").addEventListener("click", goBack);