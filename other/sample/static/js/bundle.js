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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fleet-data.js":
/*!***************************!*\
  !*** ./src/fleet-data.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var fleet = exports.fleet = [{
    license: 'ABC123',
    type: 'drone',
    model: 'Amazon 1250',
    airTimeHours: '6050',
    base: 'New York',
    latLong: '40.775596 -73.974615'
}, {
    license: 'XYZ456',
    type: 'drone',
    model: 'Amazon 1550',
    airTimeHours: '2100',
    base: 'New York',
    latLong: '40.771956 -73.978531'
}, {
    license: 'QRS678',
    type: 'drone',
    model: 'Google 3800',
    airTimeHours: '300',
    base: 'New York',
    latLong: '40.779423 -73.969411'
}, {
    license: 'AT9900',
    type: 'car',
    make: 'Tesla',
    model: 'Quick Transport',
    miles: '15600',
    latLong: '40.773272 -73.968875'
}, {
    license: 'AT2000',
    type: 'car',
    make: 'Uber',
    model: 'Auto Taxi Plus',
    miles: '400',
    latLong: '40.778878 -73.968435'
}, {
    license: 'AT2020',
    type: 'car',
    make: 'Uber',
    model: 'Zip Trip',
    miles: '12200',
    latLong: '40.778984 -73.962266'
}, {
    license: 'AT4000',
    type: 'car',
    make: 'Lyft',
    model: 'Pick U Up',
    miles: '400',
    latLong: '40.774036 -73.967319'
}];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fleetData = __webpack_require__(/*! ./fleet-data.js */ "./src/fleet-data.js");

var _fleetDataService = __webpack_require__(/*! ./services/fleet-data-service.js */ "./src/services/fleet-data-service.js");

// //1: DATA SERVICE CLASS

var dataService = new _fleetDataService.FleetDataService();
dataService.loadData(_fleetData.fleet);

// console.log(dataService.cars);
// console.log(dataService.drones);

// for (let car of dataService.cars) {
//   console.log(car.license);
// }

// console.log(dataService.cars.length)
// console.log(`${dataService.cars[0].model}`)

// document.querySelector('.main').innerHTML = `${dataService.cars[0].model}`


// getCarByLicense(license) {
//   return this.cars.find(function (car) {
//     return car.license === license
//   })
// }

// let car = dataService.getCarByLicense('AT9900')
//   console.log(car)


// getCarsSortedByLicense() {
//   return this.cars.sort(function (car1, car2) {
//     if (car1.license < car2.license)
//       return -1
//     if (car1.license > car2.license)
//       return 1
//     return 0
//   })
// }

// let cars = dataService.getCarsSortedByLicense();
// for (let car of cars)
// console.log(car.license)

/***/ }),

/***/ "./src/services/fleet-data-service.js":
/*!********************************************!*\
  !*** ./src/services/fleet-data-service.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// //1: CREATING CORE CLASSES

var FleetDataService = exports.FleetDataService = function () {
    function FleetDataService() {
        _classCallCheck(this, FleetDataService);

        this.cars = [];
        this.drones = [];
    }

    _createClass(FleetDataService, [{
        key: 'loadData',
        value: function loadData(fleet) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = fleet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var data = _step.value;

                    switch (data.type) {
                        case 'car':
                            this.cars.push(data);
                            break;
                        case 'drone':
                            this.drones.push(data);
                            break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return FleetDataService;
}();

// 2: POPULATING CLASSES
// import {Car} from '../classes/car.js';
// import {Drone} from '../classes/drone.js';

// export class FleetDataService {

//   constructor() {
//     this.cars = [];
//     this.drones = [];        
//   }    

//   loadData(fleet) {
//     for (let data of fleet) {
//       switch(data.type) {
//         case 'car':
//           let car = this.loadCar(data);
//           this.cars.push(car);
//           break;
//         case 'drone':
//           this.drones.push(data);
//           break;
//       }
//     }
//   }

//   loadCar(car) {
//     let c = new Car(car.license, car.model, car.latLong);
//     c.miles = car.miles;
//     c.make = car.make;
//     return c;
//   }
// }

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map