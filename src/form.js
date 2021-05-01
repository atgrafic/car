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
     // console.log(id); //
      //console.log('carName:', id  ); //
     // console.log(carID);
    //  console.log('jsonList', jsonList[i].id)
        if (id === jsonList[i].id) {
            //    console.log(carName[i].id)
            carID += `<h2 class="car-name">${jsonList[i].name}</h2>`;

            //console.log(e);
            // (B) SAVE TO LOCAL STORAGE
            // localStorage.setItem("KEY", "VALUE");

            //localStorage.setItem("carID", carID);
            // local storage cannot store array and objects
            // JSON encode before storing, convert to string
            //localStorage.setItem("id", JSON.stringify(carID));
        }
    }
    location.href = nextURL;
    console.log(id);
    console.log(carID);
}

carNameClick();

function get() {
    // (A) GET FROM SESSION
    //let first = localStorage.getItem("first");
    // JSON parse to turn stored sting back into array
    let first = JSON.parse(localStorage.getItem("id"));

    // (B) IT WORKS!
    // NOTE: Local storage is persistent
    // Will not be deleted unless user clears browser data or manually cleared
    console.log(first); // Foo Bar

    document.getElementById("carSelected").innerHTML = localStorage.getItem("first");
    // (EXTRA) TO CLEAR
    // localStorage.removeItem("KEY");
    // localStorage.clear();
}
get();
