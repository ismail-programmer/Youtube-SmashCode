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


const fruits = ["Apple", "Orange", 321, "Mango"];
let count = fruits.length;
//  firstElementArray  camel casing
// firstelementarray small letters
//  FIRSTELEMENTARRAY captial letters

let firstFruit = fruits[0];
let lastFruit = fruits[3];
let lastFruitComplex = fruits[fruits.length - 1]
let lastFruitComplex1 = fruits[count - 1];
console.log(lastFruitComplex);
console.log(lastFruitComplex1);
let stringArray = fruits.toString();
console.log("THe stringed Array is this: " + stringArray);
let joinArray = fruits.join(" separate ");
console.log(joinArray)
// to delete last index element use pop
fruits.pop();

// to add last index element use push
fruits.push("Ismail");
// fruits.push("Smash");
// fruits.pop();


// to delete first index element use shift
console.log("default array before shift " + fruits)
console.log("on first index we have " + fruits[0])
fruits.shift();
console.log("changed array after shift " + fruits)
console.log("on first index we have " + fruits[0])


// to addd at first index element use unshift
console.log("normal array before unshift " + fruits + " and our first fruit is " + fruits[0]);
fruits.unshift("Water Melon")
console.log("modify array after unshift " + fruits + " and our first fruit is " + fruits[0]);


// to delete a specifc index element we use delete
console.log("we have at 2 index " + fruits[2])
console.log(fruits)
delete fruits[2];
console.log("array after delet index 2 " + fruits)


let newarr1 = [1, 2, 3, 4, 5]
let newarr2 = [6, 7, 8, 9, 10]
let merger = newarr1.concat(newarr2);
console.log(merger);


let flat1 = [1, 2, 3, [4, 5], 6, 7, 8, 9, 10]
let complexFlat = [1, 2, [3, 4, [5, 6, [7, 8], 9, 10], 11, 12], 13, 14]
let flatedArray = flat1.flat()
let complexFlatedArray1 = complexFlat.flat()
let complexFlatedArray2 = complexFlat.flat(2)
let complexFlatedArray3 = complexFlat.flat(3)
console.log(complexFlatedArray1)
console.log(complexFlatedArray2)
console.log(complexFlatedArray3)

// splice method
let fruits1 = ["Apple", "mango", "Banana", "Stawberry"]
console.log("before splice " + fruits1)
fruits1.splice(1, 2, "kiwi", 45, "water melon");
// fruits1.splice(1, 2);
console.log("after splice " + fruits1);


// slice method
let sliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let slicedArray = sliceArray.slice(3, 6);
console.log(sliceArray)
console.log(slicedArray)

// indexOf
let indexmethod = [1, 2, 3, 4, 5, 5, 1, 2, 3, 4]
console.log(indexmethod.indexOf(4, 2))


//lastindex
let lastindexmethod = [1, 2, 3, 4, 5, 5, 1, 2, 3, 4]
console.log(indexmethod.lastIndexOf(4))


// sort
const names = ["Ismail", "Smash", "Code"]
console.log("before sort method " + names)
names.sort()
console.log("after sort method " + names)

// tosorted 2023

const names1 = ["Ali", "dansh", "Smash", "Shahroz", "Code"]
console.log("before tosorted " + names1)
const sortedArray = names1.toSorted();
console.log("after tosorted " + names1)
console.log("sorted array " + sortedArray)

//reverse
console.log("before reverse " + names1)
names1.reverse()
console.log("after reverse " + names1)

// numeric sort with compare function

const points = [45, 23, 12, 4, 1, 56, 100]
console.log("before sorted compare function " + points)
points.sort(
    function (a, b) {
        return a - b;
    }
)
//  for decending order
// points.sort(
//     function (a, b) {
//         return b - a;
//     }
// )

console.log("after sorted compare function " + points)
console.log("min num " + points[0] + " and max number " + points[points.length - 1])

// arithmetic operators
let add = 16 + 5; // sum
let minus = 16 - 5; // subtract
let multiply = 4 * 4; // multiply
let division = 25 / 5; //divison

let modulus = 26 % 5 // moduls
let exponent = 2 ** 5 // exponent

console.log("Add answer is " + add + "subtract answer is: " + minus)


let age = 20;
console.log("before increment " + age)
age++;
console.log("after increment " + age)
age--;
console.log("after decrement " + age)

// prefix
let ages = 16;
console.log("ages before prefix increment " + ages)
let newAge = ++ages;  // 1 + ages(16)
console.log("ages after prefix increment " + ages)
console.log("newAge after prefix increment " + newAge)


//postfix
let age1 = 42;
console.log("age1 before postfix increment " + age1);
let newAge1 = age1++; //age1(16) + 1
console.log("age1 after postfix increment " + age1);
console.log("newAge after postfix increment " + newAge1);

//BODMAS
//  5 + 2 * 3 / 3
let state = 5 + 2 * 3 / 3;
console.log(" 5 + 2 * 3 / 3 ans is: " + state)










// asigment operator

let one = 10
let two = 10

let three = one + two;
console.log(one)
one += two  // one = one + two
console.log(one)
one -= two
one *= two
one /= two
one %= two

// cmparison operator

let sum1 = 5;
let sum2 = 6;
console.log("Equal value " + (sum1 == 5));
console.log("Equal value " + (sum1 == "5"));
console.log("Equal value and equal type " + (sum1 === 5));
console.log("Equal value and equal type " + (sum1 === "5"));
console.log("not equal to value " + (sum1 != "6"));
console.log("not equal to value and type " + (sum1 !== "5"));
console.log("greater than " + (sum1 > 4));
console.log("greater than and equal yo " + (sum1 >= 5));
console.log("less than " + (sum1 < 8));
console.log("less than and equal to " + (sum1 <= 8));

// logical operator
console.log("AND operator is " + (sum1 == 5 && sum2 == 6));
console.log("OR operator is " + (sum1 == 5 || sum2 == 2));
console.log("NOT operator is " + (sum1 != sum2));

// Ternary operator

let years = 19;
let message = (years < 18) ? " You win" : "You lose"
console.log(message)


// conditional statments
condition = 30
if (condition < 30) {
    alert("Case 1")
}
else if (condition > 30) {
    alert("case 2")
}
else {
    // alert("case 3")
    console.log("HI")
}





// switch case
let grade = "0"
switch (grade) {
    case 0:
        console.log("Your grade is " + grade);
        break;
    case "B":
        console.log("Your grade is " + grade);
        break;
    default:
        console.log("You have input a wrong grade");
        break;
    case "C":
        console.log("Your grade is " + grade);
        break;
    case "D":
        console.log("Your grade is " + grade);
        break;
    case "F":
        console.log("Your grade is " + grade);
        break;
}

// switch statement common cases
let x1 = 4;
let y1 = 1;


switch (x1 + y1) {

    case 0:
    case 2:
    case 6:
        console.log("Your number is even");
        break;
    case 1:
    case 3:
    case 5:
        console.log("Your number is odd");
        break;
    default:
        console.log("Not a number");
}


// for loop  with increment

let loopx;
for (loopx = 20; loopx <= 25; loopx++) {
    console.log("iteration done and value of loopx is now " + loopx)
}
// for loop  with decrement


let loopy;
for (loopy = 20; loopy >= 15; loopy--) {
    console.log("iteration done and value of loopy is now " + loopy)
}













