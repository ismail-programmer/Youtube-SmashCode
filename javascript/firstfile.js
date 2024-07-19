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




// for of loop
let names2 = ["Asad", "Ismail", "Ali"];

for (let count of names2) {
    console.log(count);
}

// for in loop

let names3 = {
    a: "Ismail",
    b: "Ali",
    c: "Asad"
}

for (let red in names3) {
    console.log(red + " : " + names3[red])
}


// while loop

let i = 1;
while (i < 10) {
    console.log("while loop " + i)
    i++;
}


// do while loop
let j = 1
do {
    console.log("do while loop " + j);
    j++;
} while (j < 10)


// Function defined without defalt values

function subtract1(a1, a2, a3) {

    let result = a1 - a2 - a3;
    console.log("Your subtract result is " + result);
}

// Function defined with defalt values
function add1(a1 = 10, a2 = 20, a3 = 30) {

    let result = a1 + a2 + a3;
    console.log("Your add result is " + result);
}


//calling function without default values
subtract1(40, 20, 10);
//calling function with default values
add1(30,);

// Function defined without return

function add2(a1, a2) {

    let result = a1 + a2;

}

console.log(add2(2, 4));

// Function defined with return

function add3(a1, a2) {

    let result = a1 * a2;
    return result
}

console.log(add3(2, 4));

// function expression

let addition = function (x, y, z) {
    let sum = x + y + z;
    return sum;
}

console.log(addition(4, 5, 6));

// arrow function with one line
let subtract3 = (input1, input2) => input1 - input2;
console.log(subtract3(50, 30));

let result332 = 39;
// arrow function with more than one line
let subtract4 = (input1, input2) => {
    let result456 = input1 - input2;
    console.log("this is local function variable witin the function " + result456)
    console.log("this is global  variable witin the function " + result332)

    return result456
}

// console.log(subtract4(40, 30));
subtract4(40, 30) // function call 
// console.log("Local varibale outside of function" + result456);
console.log("this is global  variable outside of the function " + result332)


// function example 1
// function to calculate the sum of numbers from 1 to n

let calculateSum = (n) => {
    let sum = 0;

    // loop from 1 to n and add each number to sum
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;
}

const result123 = calculateSum(10);
console.log("Sum of numbers from 1 to 10 is " + result123);
console.log("Sum of numbers from 1 to 100 is " + calculateSum(100));
console.log("Sum of numbers from 1 to 1000 is " + calculateSum(1000));


//function example 2
// function to count the number of even  number in an array.

let countEvenNumber = (arr) => {
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) count++;
    }
    return count;
}

const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
console.log("Number of even numbers in the array are ", countEvenNumber(numbers3));

const todayDate = new Date();

const birthdatDate = new Date("28 june 2000 23:55:00");
const birthdatDate1 = new Date(2005, 5, 28, 23, 55, 0, 0);
const birthdatDate2 = new Date(2007, 5, 28);

// Get methods

const d1 = new Date()
d1.getFullYear()
let currentMonth = d1.getMonth() + 1
let currentDay = d1.getDay()
let currentHour = d1.getHours()
let currentMinutes = d1.getMinutes()
let currentSeconds = d1.getSeconds()
console.log(currentHour)

// UTC
const currentUTCHour = d1.getUTCHours();
console.log(currentUTCHour)

//set time

const pastDate = d1.setFullYear(1988, 3, 12);
const pastHour = d1.setHours(13);
const pastMinute = d1.setMinutes(57);
console.log(pastHour)

// string methods
// 1. length method of string

let name3 = "Ismailksmalkdmakdmaslkdmlskadmaklslreme"
let totalCount = name3.length;
console.log(totalCount);

//2. extraction methods
// a. charAt

let extractedChar = name3.charAt(5);
console.log(extractedChar);

// 2.charCodeAt

let extractedCharCode = name3.charCodeAt(0);
console.log(extractedCharCode);

// c. at

let negChar = name3.at(-3)
console.log(negChar);

// d propertyacess
let value = name3[4]
console.log(value);

// extracting string parts
// slice, substring , substr

//slice
let names4 = "Ismail, Haroon, Sharoon";
let part1 = names4.slice(8, 13);
let part2 = names4.slice(8);
let part3 = names4.slice(-7);
console.log(part1);
console.log(part2);
console.log(part3);

//substring
let part4 = names4.substring(-3)
console.log(part4);

//substr
let part5 = names4.substr(8, 5)
console.log(part5);

//upper and lower case

let capital = names4.toUpperCase()
console.log(capital);

let small = names4.toLocaleLowerCase()
console.log(small);


// concat 

let text1 = "Smash"
let text2 = "Code"
let fullName = text1.concat(" ", text2);
console.log(fullName)


// trim
let untrimmedData = "       I Love Pakistan         ";
console.log(untrimmedData);
let trimmedData = untrimmedData.trim();
// let trimmedData = untrimmedData.trimStart();
// let trimmedData = untrimmedData.trimEnd();
console.log(trimmedData);


//PadStart
let name4 = "Raza"
let PadNameStart = name4.padStart(8, "Ali ");
console.log(PadNameStart);

//PadEnd
let name5 = "Farooq"
let PadNameEnd = name5.padEnd(10, " Ali");
console.log(PadNameEnd);


// repeat method
let name6 = "Smash Code ";
let repeatName = name6.repeat(20);
console.log(repeatName);
console.log(name6);

//replace method
let text3 = "This is a youtube vdeo of Smash Code, vdeo and its a javascript vdeo."
// with case senstive
let replacedText = text3.replace("vdeo", "video");

// with case insenstive
// let replacedText = text.replace(/vdeo/i, "video");

// for all words in one string
let replacedTextAll = text3.replace(/vdeo/g, "video");
console.log(replacedText)
console.log(replacedTextAll)


// indeOf
let text4 = "My name is Muhammad Ismail, I am Ismail."
let indexIsmail = text4.indexOf("Ismail", 21);
console.log(indexIsmail);


// LastIndeOf
let text5 = "My name is Muhammad Ismail, I am Ismail."
let lastIndexIsmail = text5.lastIndexOf("Ismail");
console.log(lastIndexIsmail);

//match
let text6 = "My name is Muhammad Ismail, I am Ismail."
let matchResults = text6.match("Ismail");
console.log(matchResults)

// includes
let includesVar = "My name is Ismail";
let check1 = includesVar.includes("Ali");
let check2 = includesVar.includes("Ismail");
let check3 = includesVar.includes("ismail");
console.log(check1);
console.log(check2);
console.log(check3);


// startsWith
let startVar = "This is a house";
let check4 = startVar.startsWith("Th");
let check5 = startVar.startsWith("is", 5);
console.log(check4);
console.log(check5);



// endWith
let endVar = "This is a house";
let check6 = endVar.endsWith("se");
let check7 = endVar.endsWith("is", 7);
console.log(check6);
console.log(check7);


