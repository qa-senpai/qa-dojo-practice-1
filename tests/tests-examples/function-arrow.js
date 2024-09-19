function someFunc(param1, param2) {
  let someVariable = "Hello";
  return "" + someVariable;
}

function someFunc2(param1, param2 = "this is default value") {
  console.log(param2);
  return "" + someVariable;
}

let someVariable = "Hello to all"; // глобальна змінна

console.log(someFunc2());
console.log(someFunc());

someFunc2();

/*
clickOn{element}
check
typeIn...
set{form_name}
getCoffeeLabel
*/

let sum = (param, param2) => param + param2;

console.log(sum(1, 2));

console.log(bannerSelector(1234));

function bannerSelector(id) {
  return `a[class*= 'active']:not(.swiper-slide-duplicate)[data-banner-id = '${id}']`;
}

// тернарний оператор
// expression ? if true : else false

if (10 > 5) {
  console.log("10 більше 5");
} else {
  console.log("10 менше 5");
}

10 < 5 ? console.log("10 більше 5") : console.log("10 менше 5");

const bannerSelector2 = (id) =>
  `a[class*= 'active']:not(.swiper-slide-duplicate)[data-banner-id = '${id}']`;

const bannerSelector3 = (id) => {
  return `a[class*= 'active']:not(.swiper-slide-duplicate)[data-banner-id = '${id}']`;
};

console.log(bannerSelector3(1234));
console.log(bannerSelector(1234));
console.log(bannerSelector2(1234));
console.log(bannerSelector3(1234));

/* три типи функцій 
 function declaration   function name(param){ return ''}
 arrow function  () => {}   ()=> ...   
 function expression   const someExpression = function(){}
 */
