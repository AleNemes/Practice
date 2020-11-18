let array = [5, 155, 656, 44, 154];

let found = array.find(element => element > 100);
console.log(found);

function priceGreater6000(car) {
  return car.price > 6000;
}

let carArray = [
  {name: 'VW Polo', price: 5000},
  {name: 'Toyota', price: 7700},
  {name: 'Audi', price: 4500}
]

const foundCar = carArray.find(priceGreater6000)
// const foundCar = carArray.find(element => element.price < 6000);
console.log(foundCar);
