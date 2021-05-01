import { giveMeAll } from "./carData.js";

const json = require("./json/list.json");
const brandList = json.carsData;
const search = document.getElementById("brand");
const carName = document.getElementsByClassName("car");
const nextURL = "form.html";

function displayjson() {
    let brands = new Set();

    brands.add("<option >" + "</option>");

    for (let i = 0; i < brandList.length; i++) {
        let NewbrandList = brandList[i].brand;
        brands.add("<option value =" + NewbrandList + ">" + NewbrandList + "</option>");
    }
    return Array.from(brands).join(" ");
}

document.getElementById("brand").innerHTML = displayjson();

function filtr() {
    let car = "";
     if (search.value === "") {
        car = giveMeAll();
    }

    for (let i = 0; i < brandList.length; i++) {
     //console.log(search.value);
    // let id= brandList[i].id;

     //console.log(brandList[i].id)
        if (json.carsData[i].brand === search.value) {
            car += `<div class="car" id=${json.carsData[i].id} >
            <img class="car-photo" src="${json.carsData[i].image[0]}">
            <h2 class="car-name">${json.carsData[i].name}</h2>
            <p class="car-year">${json.carsData[i].year}</p>
            <p class="car-km">${json.carsData[i].km}</p>
            <hr/>
            <button class="car-price">${json.carsData[i].price}</button>

            </div> `;
            // for (let x = 0; x < carName.length; x++) {
            //     //console.log(carName[x].id)
            //          let id= carName[x].id;
            //          carName[x].addEventListener("click", (e) => nextPage(e,id));
            //      }
        }
       // brandList[i].addEventListener("click", (e) => nextPage(e,id));
    }


      document.getElementById("carsList").innerHTML = car;

      for (let i = 0; i < carName.length; i++) {
        //  console.log(carName[i].id)
          let id= carName[i].id;
          carName[i].addEventListener("click", (e) => nextPage(e,id));
      }
}

search.addEventListener("change", filtr);

function nextPage(e,x ) {
    console.log(e);
    console.log(x);
      location.replace(nextURL);
}

