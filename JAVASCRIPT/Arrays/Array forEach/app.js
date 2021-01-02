function logCars(car) {
  console.log(car);
}


const autoPark = [
  {
    model: 'Honda Civic',
    price: 27000
  },
  {
    model: 'Toyota Camry',
    price: 27000
  },
  {
    model: 'VW Polo',
    price: 56000
  }
];

let totalParkValue = 0;

autoPark.forEach(logCars);

