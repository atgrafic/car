/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/form.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//moj pierwszy kod\n// const json = require(\"./json/list.json\");\n// const car = json.carsData;\n// const searchCar = document.getElementById(\"carsList\");\n//const nextURL = \"form.html\";\n// const carName = document.getElementsByClassName(\"car\");\n// function carNameClick() {\n// let carId =\"\";\n//     for (let i = 0; i < carName.length; i++) {\n//         //console.log(carName[i].id)\n//         let id = carName[i].id;\n//         carName[i].addEventListener(\"click\", (e) => nextPage(e, id));\n//         localStorage.setItem(\"first\", \"dupa\");\n//     }\n// }\n// function nextPage(e, i) {\n//     console.log(e);\n//     console.log(i);\n//     location.replace(nextURL);\n//     console.log(\"first\");\n//      document.getElementById(\"carSelected\").innerHTML = localStorage.getItem(\"first\");\n// }\n// carNameClick();\n//proba 2\nvar json = __webpack_require__(/*! ./json/list.json */ \"./src/json/list.json\");\n\nvar jsonList = json.carsData;\nvar carName = document.getElementsByClassName(\"car\");\nvar nextURL = \"form.html\";\n\nfunction carNameClick() {\n  var _loop = function _loop(i) {\n    //    console.log(carName[i].id)\n    var id = carName[i].id;\n    carName[i].addEventListener(\"click\", function (e) {\n      return nextPage(e, id);\n    });\n  };\n\n  for (var i = 0; i < carName.length; i++) {\n    _loop(i);\n  }\n}\n\nfunction nextPage(e, id) {\n  for (var i = 0; i < carName.length; i++) {\n    //    console.log(carName[i].id)\n    var first = carName[i].id; //console.log(id);\n    //console.log(e);\n    // (B) SAVE TO LOCAL STORAGE\n    // localStorage.setItem(\"KEY\", \"VALUE\");\n\n    localStorage.setItem(\"first\", first); // local storage cannot store array and objects\n    // JSON encode before storing, convert to string\n\n    localStorage.setItem(\"id\", JSON.stringify(jsonList));\n  }\n\n  location.href = nextURL;\n}\n\ncarNameClick();\n\nfunction get() {\n  // (A) GET FROM SESSION\n  var first = localStorage.getItem(\"first\"); // JSON parse to turn stored sting back into array\n\n  var second = JSON.parse(localStorage.getItem(\"id\")); // (B) IT WORKS!\n  // NOTE: Local storage is persistent\n  // Will not be deleted unless user clears browser data or manually cleared\n\n  console.log(first); // Foo Bar\n\n  console.log(second); // [\"Hello\", \"World\"]\n\n  document.getElementById(\"carSelected\").innerHTML = localStorage.getItem(\"name\"); // (EXTRA) TO CLEAR\n  // localStorage.removeItem(\"KEY\");\n  // localStorage.clear();\n}\n\nget();\n\n//# sourceURL=webpack:///./src/form.js?");

/***/ }),

/***/ "./src/json/list.json":
/*!****************************!*\
  !*** ./src/json/list.json ***!
  \****************************/
/*! exports provided: carsData, default */
/***/ (function(module) {

eval("module.exports = {\"carsData\":[{\"id\":\"1\",\"name\":\"BMW X5 D\",\"brand\":\"BMW\",\"year\":2012,\"km\":\"286 000 km\",\"price\":\"84 999 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/BMW_X5_D_1.jpg\",\"image/BMW_X5_D_2.jpg\",\"image/BMW_X5_D_3.jpg\",\"image/BMW_X5_D_4.jpg\"]},{\"id\":\"2\",\"name\":\"Ford Edge 3.5\",\"brand\":\"Ford\",\"year\":2016,\"km\":\"49 000 km\",\"price\":\"84 999 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Ford_ Edge_1.jpg\",\"image/Ford_ Edge_2.jpg\",\"image/Ford_ Edge_3.jpg\",\"image/Ford_ Edge_4.jpg\"]},{\"id\":\"3\",\"name\":\"BMW X1\",\"brand\":\"BMW\",\"year\":2016,\"km\":\"30 050 km\",\"price\":\"102 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/BMW X1_1.jpg\",\"image/BMW X1_2.jpg\",\"image/BMW X1_3.jpg\",\"image/BMW X1_4.jpg\"]},{\"id\":\"4\",\"name\":\"Kia Sportage\",\"brand\":\"Kia\",\"year\":2020,\"km\":\"8 km\",\"price\":\"125 352 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Kia Sportage_1.jpg\",\"image/Kia Sportage_2.jpg\",\"image/Kia Sportage_3.jpg\",\"image/Kia Sportage_4.jpg\"]},{\"id\":\"5\",\"name\":\"Mazda CX 5\",\"brand\":\"Mazda\",\"year\":2016,\"km\":\"73 801 km\",\"price\":\"85 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Mazda_CX_5_1.jpg\",\"image/Mazda_CX_5_2.jpg\",\"image/Mazda_CX_5_3.jpg\",\"image/Mazda_CX_5_4.jpg\"]},{\"id\":\"6\",\"name\":\"BMW 5\",\"brand\":\"BMW\",\"year\":2016,\"km\":\"115 301 km\",\"price\":\"96 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/BMW_5_1.jpg\",\"image/BMW_5_2.jpg\",\"image/BMW_5_3.jpg\",\"image/BMW_5_4.jpg\"]},{\"id\":\"7\",\"name\":\"Mazda 6\",\"brand\":\"Mazda\",\"year\":2015,\"km\":\"81 529 km\",\"price\":\"70 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Mazda_6_1.jpg\",\"image/Mazda_6_2.jpg\",\"image/Mazda_6_3.jpg\",\"image/Mazda_6_4.jpg\"]},{\"id\":\"8\",\"name\":\"Audi A4\",\"brand\":\"Audi\",\"year\":2015,\"km\":\"81 830 km\",\"price\":\"66 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Audi_A4_1.jpg\",\"image/Audi_A4_2.jpg\",\"image/Audi_A4_3.jpg\",\"image/Audi_A4_4.jpg\"]},{\"id\":\"9\",\"name\":\"Ford Mondeo\",\"brand\":\"Ford\",\"year\":2016,\"km\":\"55 970 km\",\"price\":\"63 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Ford_Mondeo_1.jpg\",\"image/Ford_Mondeo_2.jpg\",\"image/Ford_Mondeo_3.jpg\",\"image/Ford_Mondeo_4.jpg\"]},{\"id\":\"10\",\"name\":\"Toyota RAV 4\",\"brand\":\"Toyota\",\"year\":2013,\"km\":\"146 839 km\",\"price\":\"63 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/RAV_1.jpg\",\"image/RAV_2.jpg\",\"image/RAV_3.jpg\",\"image/RAV_4.jpg\"]},{\"id\":\"11\",\"name\":\"Toyota Corolla\",\"brand\":\"Toyota\",\"year\":2016,\"km\":\"125 295 km\",\"price\":\"47 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Corolla_1.jpg\",\"image/Corolla_2.jpg\",\"image/Corolla_3.jpg\",\"image/Corolla_4.jpg\"]},{\"id\":\"12\",\"name\":\"Toyota Auris\",\"brand\":\"Toyota\",\"year\":2015,\"km\":\"99 295 km\",\"price\":\"39 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Auris_1.jpg\",\"image/Auris_2.jpg\",\"image/Auris_3.jpg\",\"image/Auris_4.jpg\"]},{\"id\":\"13\",\"name\":\"Kia Sportage\",\"brand\":\"Kia\",\"year\":2012,\"km\":\"148 711 km\",\"price\":\"47 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Kia_1.jpg\",\"image/Kia_2.jpg\",\"image/Kia_3.jpg\",\"image/Kia_4.jpg\"]},{\"id\":\"14\",\"name\":\"Kia Sportage\",\"brand\":\"Kia\",\"year\":2014,\"km\":\"100 711 km\",\"price\":\"51 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/KiaS_1.jpg\",\"image/KiaS_2.jpg\",\"image/KiaS_3.jpg\",\"image/KiaS_4.jpg\"]},{\"id\":\"15\",\"name\":\"Audi A4\",\"brand\":\"Audi\",\"year\":2012,\"km\":\"159 830 km\",\"price\":\"66 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Audi_4_1.jpg\",\"image/Audi_4_2.jpg\",\"image/Audi_4_3.jpg\",\"image/Audi_4_4.jpg\"]},{\"id\":\"16\",\"name\":\"Ford Mondeo\",\"brand\":\"Ford\",\"year\":2018,\"km\":\"47 970 km\",\"price\":\"68 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Mondeo_1.jpg\",\"image/Mondeo_2.jpg\",\"image/Mondeo_3.jpg\",\"image/Mondeo4_4.jpg\"]},{\"id\":\"17\",\"name\":\"Mazda 6\",\"brand\":\"Mazda\",\"year\":2014,\"km\":\"105 529 km\",\"price\":\"54 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Mazda_6a_1.jpg\",\"image/Mazda_6a_2.jpg\",\"image/Mazda_6a_3.jpg\",\"image/Mazda_6a_4.jpg\"]},{\"id\":\"18\",\"name\":\"Mazda 3\",\"brand\":\"Mazda\",\"year\":2013,\"km\":\"47 529 km\",\"price\":\"30 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Mazda_3_1.jpg\",\"image/Mazda_3_2.jpg\",\"image/Mazda_3_3.jpg\",\"image/Mazda_3_4.jpg\"]},{\"id\":\"19\",\"name\":\"Audi Q5\",\"brand\":\"Audi\",\"year\":2012,\"km\":\"267 043 km\",\"price\":\"51 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Q5_1.jpg\",\"image/Q5_2.jpg\",\"image/Q5_3.jpg\",\"image/Q5_4.jpg\"]},{\"id\":\"20\",\"name\":\"Audi Q5\",\"brand\":\"Audi\",\"year\":2011,\"km\":\"130 555 km\",\"price\":\"62 000 PLN\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales diam magna, in elementum sem tristique nec. Nulla blandit eleifend laoreet. Donec a pulvinar metus. Vivamus placerat scelerisque quam, in condimentum ligula bibendum et. Nulla volutpat risus in ex finibus consequat. Morbi condimentum blandit hendrerit. Etiam et viverra lorem. Aenean posuere arcu quis erat placerat placerat eu id augue.\",\"image\":[\"image/Q5a_1.jpg\",\"image/Q5a_2.jpg\",\"image/Q5a_3.jpg\",\"image/Q5a_4.jpg\"]}]};\n\n//# sourceURL=webpack:///./src/json/list.json?");

/***/ })

/******/ });