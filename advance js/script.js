// HOFs

function greet(name) {
  return function (message) {
    console.log(`${message}, ${name} `);
  };
}

const hiMsg = greet("Smash");
hiMsg("Hello");

// Call Method
const person = {
  name: "Ismail",
  greet: function (age) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
  },
};

const person2 = { name: "Smash" };
const person3 = { name: "Ali" };
person.greet.call(person3, 30);

//Apply

const numbers = [40, 50, 60];
function sum(a, b, c) {
  return a + b + c;
}

const total = sum.apply(null, numbers);
console.log(total);

// Bind

const car = {
  brand: "Toyota",
  getBrand: function () {
    console.log(this.brand);
  },
};

const getCarBrand = car.getBrand.bind(car);

setTimeout(getCarBrand, 1000);

//closures

function counter() {
  let count = 0; //3
  return function () {
    count++;
    console.log(count);
  };
}
const increment = counter();
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3

// currying

function one(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(one(5)(10)(20));

// debounce and throttle

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

function searchHandler(event) {
  console.log("Search for:", event.target.value);
}

document
  .getElementById("search")
  .addEventListener("input", debounce(searchHandler, 300));

// Generator functions

function* Generator() {
  yield 2 + 3;
  yield 5 * 3;
  yield 10 + 4;
}
const number1 = Generator();
console.log(number1.next().value);
console.log(number1.next().value);
console.log(number1.next().value);

// array methods

// 1.map method

const numbers1 = [65, 44, 12, 5];

const newArray = numbers1.map(myFunction);
function myFunction(num) {
  return num * 10;
}
console.log(numbers1);
console.log(newArray);

// 2. Filter method

const ages = [32, 33, 15, 50];
const result = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}

console.log(ages);
console.log(result);

// 3. Reduce

const numbers3 = [10, 20, 30, 40];
const total1 = numbers3.reduce(function (GrandTotal, CurrentItemPrice) {
  return GrandTotal + CurrentItemPrice;
}, 0);

console.log(numbers3);
console.log(total1);
