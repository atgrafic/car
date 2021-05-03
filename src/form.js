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
