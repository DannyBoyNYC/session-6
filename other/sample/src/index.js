// //1: DATA SERVICE CLASS

import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);


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

    