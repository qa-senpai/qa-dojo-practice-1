// if else
if (2 > 1) {
  // 1
} else {
  // 2
}

/*
    > - більше 
    < - менше
    == - порівняння
    === - порівнює з урахуванням типу даних
    != - не дорівнює 
    !== - не дорівнює з урахуванням типу данних
    >= - більше або дорівнює 
    <= - менше або дорівнює
*/

const someNumber = Number("121455");
const someString = String(121455);

console.log(someNumber);
console.log(someString);

let someVariable1 = 1;
const someVariable2 = true;

console.log(someVariable1 === someVariable2);

console.log(10 > 1);
console.log(1 > 10);
console.log(10 > 11);
console.log(11 >= 11);
console.log(11 <= 11);

const firstNumber = 1;
const secondNumber = true;
let result = firstNumber !== secondNumber;

console.log("02" === 2);
console.log("1" === true);

// порівнювати різні типи даних це BAD PRACTICE
// '02' -> 2  > 1 = true
// null і undefined

console.log(null >= 0);
console.log(false == 0);

/*
false 
0
null - не працює
undefined - не працює
NaN - не працює
''
*/

// true, false
// nasting, вкладення
if (true) {
  if (true) {
    console.log("this is true result");
    if (true) {
      console.log("this is true result");
      if (true) {
        console.log("this is true result");
        if (true) {
          console.log("this is true result");
          if (true) {
            console.log("this is true result");
          }
        }
      }
    }
  }
}
