function double(num) {
  console.log(num * 2);
}

function triple(num) {
  console.log(num * 3);
}

function square(num) {
  console.log(num * num);
}


function processNumberInput(callback) {
  let number = prompt('Introdu un numar');
  callback(number);
}

processNumberInput(double);
processNumberInput(triple);
processNumberInput(square);

let arr = [1, 2, 3];
let arrChanged = arr.map(triple);
console.log(arr);

// function processNumberInput(double) {
//   let number = prompt('Introdu un numar');
//   double(number);
// }
