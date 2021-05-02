import style from "./css/index.scss";


//powrot
function goBack() {
    window.history.go(-1);
}

document.getElementById("back").addEventListener("click", goBack);

//przejście do formularza
function getForm() {
    let carForm = localStorage.getItem("carForm");

    console.log("localstorge:", carForm);
    document.getElementById("carForm").innerHTML = carForm;

}
getForm();



//walidacja formularza
// const info1 = document.getElementById("info1");
// const nameForm = document.getElementById("nameForm");
// const city = document.getElementById("city");

// document.getElementById("car-buy-final").addEventListener("click",  formValidation);

// function formValidation(e) {
//     e.preventDefault();

//     if (nameForm==="") {

//         info1.innerText = "Prosze wpisać imię i nazwisko";
//         info1.classList.add("non-active");
//         // info2.innerText = "Wpisz miasto";
//         // info2.classList.add("non-active");

//     }else{
//         info1.classList.remove("non-active");
//     }
// }
