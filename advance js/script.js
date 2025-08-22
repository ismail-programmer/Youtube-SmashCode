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

// Set & Map
// with obj(key value)
const database = new Map();

//  add data
// database.set("name", "ismail");
// database.set("role", "CEO");
database.set("name", "ismail").set("role", "CEO");
database.set("age", "24");

// get data
console.log(database.get("role"));
console.log(database.get("age"));

// has true/false

console.log(database.has("name"));

//  size of map
console.log(database.size);

//delete

console.log(database.delete("age"));
console.log(database.has("age"));

// clear
// database.clear();

console.log(database);

// with array

// creating a new database with array
const arrayDatabase = new Set(["apple", "banana", "mango"]);

// adding new value

console.log(arrayDatabase);
arrayDatabase.add("cherry");
console.log(arrayDatabase);

// Has true/false

console.log("Does it have banana? ", arrayDatabase.has("banana"));
console.log("Does it have Orange? ", arrayDatabase.has("Orange"));

// size
console.log("quantity of fruits: ", arrayDatabase.size);

arrayDatabase.delete("cherry");
console.log(arrayDatabase);

arrayDatabase.clear();
console.log(arrayDatabase);

// Promise

function display(info) {
  console.log("INfo recived");
}

let check = new Promise(function (ok, fail) {
  let value = 5;
  if (value > 0) {
    ok("Possitive");
  } else {
    fail("Negative Value");
  }
});

check.then(display);

// Symbols
// Symbol iterator

const arr = [5, 2, 3];
const test2 = arr[Symbol.iterator]();
console.log(test2.next());
console.log(test2.next());
console.log(test2.next());

// To String Tag
const obj = {
  [Symbol.toStringTag]: "Custom Data",
};

console.log(Object.prototype.toString.call(obj));

// WeakMap

const secret = new WeakMap();
function User(name) {
  secret.set(this, { name });
}

const user1 = new User("Ismail");
const user2 = new User("Smash");
console.log(secret.get(user1));
console.log(secret.get(user2));

// Weak Set

const visitedSet = new WeakSet();
let place = { name: "Park" };
visitedSet.add(place);
console.log(visitedSet.has(place));

const privateData = new WeakMap();
class Person {
  constructor(name) {
    privateData.set(this, { name });
  }
  getName() {
    return privateData.get(this).name;
  }
}

const person1 = new Person("Ismail");
console.log(person1.getName());

// BigInt

const big = 1342141241241212412432n;
const reguler = 108;

console.log(big + 5n);
// console.log(big + reguler);

// Intl APi

const number4 = 1241231.78;

const usFormatter = new Intl.NumberFormat("en-US");
console.log(number4);
console.log(usFormatter.format(number4));

// Composed Function
const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;

const composedFunction = (x) => add2(multiply3(x));
console.log(composedFunction(4));

// ad2((12) + 2) => 14

function Car(make, model) {
  return {
    make,
    model,
    drive() {
      console.log("Car is driving");
    },
  };
}
const car1 = Car("Toyota", "Aqua");
car1.drive();

// Functional Composition with Factory Functions

const multiply2 = (x) => x * 2;
const subtract5 = (x) => x - 5;
function createCalculator() {
  return {
    calculate: (x) => subtract5(multiply2(x)),
  };
}
const calculator = createCalculator();
console.log(calculator.calculate(10));
// sub(20 - 5 ) => 15

// api integeration

// get request
const fetchData = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

// post request
const postData = () => {
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 0,
      title: "string",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Product added sucessefully"))
    .catch((error) => console.error("Error:", error));
};

// update request
const changeproduct = { title: "Updated Product", price: 39.99 };

const updateData = () => {
  fetch("https://fakestoreapi.com/products/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changeproduct),
  })
    .then((response) => response.json())
    .then((data) => console.log("Product sucessfuly updated"))
    .catch((error) => console.error("Error:", error));
};

// delete request

const deleteData = () => {
  fetch("https://fakestoreapi.com/products/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log("Product deeleted sucessfully"))
    .catch((error) => console.error("Error:", error));
};
