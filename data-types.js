/*
number
bigInt
string
boolean
symbol

-- спеціальні типи даних -- 
 undefined 
 null 
 NaN

-- структури даних ---
масиви
об'єкти
*/

const itsNumber = 1231451; // number
console.log(itsNumber + (10101010101 / 2) * 1214);

// NaN - Not a number
console.log("tests" / 2);

// BigInt
let biggestNumber = 9007199254740991; // 2 53 -1
let lowestNumber = -9007199254740991;

let bigIntExample = 900719925474099112451255n;

// string (рядок)

const someText = "rasdfnafs afskafmks rafas";
("");
``;

("this is string'");

const thisIsDemo = `${someText} sfasfa ${someText}

test
3tasfa
asfa
asfa
`;

const sasfasf = "tests";
const someTipicalString = "testas";
const concat = sasfasf + someTipicalString + " " + "test" + " " + `tsafasfa`;

console.log(concat);

// boolean / логічний

true;
false;

const isActive = true;
const isDisabled = false;

const isGreater = 9 >= 5;
console.log(isGreater);

if ("") {
  console.log("this is true");
}

// false = 0, "", null, undefined, NaN
// true =  >0, "safa", true

// 1, 0
// 0 = false
// 1 = true

// null
let thisIsNull = null; // null

// void

//undefine
let safas;

console.log(safas);

// Symbol
const symbol = Symbol("this is symbol");

console.log(typeof symbol);
console.log(symbol.description);
console.log(symbol.valueOf());
console.log(symbol.toString());

const someObject = {
  symbol: "tests",
};

someObject.symbol;

//typeof
console.log(typeof undefined);
console.log(typeof "asfasfa");
console.log(typeof 12414);
console.log(typeof 12414n);
console.log(typeof thisIsNull);
console.log(typeof isGreater);

// object
const myObject = {
  test: 1241,
};

console.log(myObject.test);
