import style from "./css/index.scss";
//alert("Hello! I am an alert box!!");

//powrot
function goBack() {
    window.history.go(-1);
}

document.getElementById("back").addEventListener("click", goBack);

