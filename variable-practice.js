console.log(thisIsVar);

// створіть змінну з вашим ім'ям і прізвищем
// створіть змінну з вашою адесою
// створіть змінну з вашим доходом за рік

// змінні
let thisIsLet = "my first variable",
  second_Let = "my second variable",
  let_3$ = "this is my third let",
  $ = "$$$";

console.log(let_3$);

let randomText = "I wake up at 7 oclock";
let morningRoutineText = "I wake up at 7 oclock";

let i = 0;
let o = 1;
let foo = 23151;

// регістр
let APPLe;
let APPLE;

// UPPER CASE

let BASE_URL = "https";

// заборонені слова

// let let = 5;
// let return = 1;

let emptyVar;

// константи
const emptyConst = 1231;
//emptyConst = 124511; - не можна

// коли можна змінювати константу?
const myFirstArray = [1];
console.log(myFirstArray);

myFirstArray.push(2);
myFirstArray.push(3);
console.log(myFirstArray);

const myFirstObject = { test: "x" };
console.log(myFirstObject);

myFirstObject["test1"] = "this is test";
console.log(myFirstObject);

// завжди використовуйте константу, окрім випадків коли вам потрібен let

// область видимості
if (true) {
  var test1 = "this is var!!";
}

let test;

if (true) {
  test = "this is let!!";
}
console.log(test);

// підняття/hoisting
console.log(thisIsVar);

var thisIsVar = true; // outcast
let hoistingTesting = true;
