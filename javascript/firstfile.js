// alert("Hello World!")

let x;
x = 3; // number
let y = "Ismail"; // string, text string

x = 33
// let y = "JOHN" // can't redeclare a let variable.

var xy = 3;
var xy = 45;

let sum;

const I = 3;


let constSum;
{
    constSum = I + 4;
    const value1 = 45;
    console.log(value1);
    sum = 56 + 67; //123
    let subtract = 30;
    // console.log(subtract)
    // console.log(sum)
}
const value1 = 66;

sum = sum + 3;
// console.log(sum);


let subtract = 3;

// console.log(ismail);
// var ismail = 3;

var ismail = 3;
console.log(ismail);


let ismail1 = 4;
console.log(ismail1);


// const smash1;
//  smash1 = 2

const first = [" ismail", " Smash", "Code "]
let second = { firstname: "ismail", age: 23 };


// objects 
const person = {
    firstname: "Muhammad",
    lastname: "Ismail",
    age: 23,
    student: true,
    fullname: function () {
        alert(this.firstname + " " + this.lastname)
    },
    'Full Adress': " Faislabad Pakitan",
    cars: {
        car1: "BMW",
        car2: "AQUA",
        CAR3: "Sonata"
    },
    Meal: "Rice",
    Phone: 123456,
    'Mobile Phone': {
        'Mobile first': "Qmobile",
        'Mobile second': "Iphone",

    },
};
// acess with dot notation
console.log("Person object age " + person.age);
// acess with array lke method
console.log("Person object firstname is " + person["firstname"]);
console.log("Person object Adress is " + person["Full Adress"]);
//change obj values
person.age = 24;
console.log("changed Person object age is " + person["age"]);
// new value add
person.Favcol = "Black";
console.log("Person object Favourite color is " + person.Favcol);
// method acess
// person.fullname();
// delete value;
console.log("Person object Lastname is " + person.lastname);
delete person.lastname;
console.log("Person object Lastname is " + person.lastname);
// nested obj acess with dot notation
console.log("nested Person object car1 name is " + person.cars.car1);
// nested obj acess with array like method
console.log("nested Person object Mobile second name is " + person["Mobile Phone"]["Mobile second"]);

// array
const persons = ["Asad", "Ismail", "Ali"];
const students = [];
students[0] = "Umar";
// acess with index
let name1 = persons[1];
console.log("array namme is " + name1)
// change value with index
console.log("array namme is " + persons[2])
persons[2] = "Mnaan"
// let name2 = persons[2]
console.log("array namme is " + persons[2])
const different = [
    "Ali", // string
    23, // number
    false, // boolean
    persons1 = { car1: "BMW", car2: "bugati" }, // object
    Names = ["ismail", "smash", "bakkar"] // nested array
]