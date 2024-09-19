const arr = [1, 2, 3, "test", true, {}, undefined, null];
console.log(arr);

//index
console.log(arr.indexOf("test"));

//довжина
console.log(arr.length);

console.log(new Array(10));
[];
console.log(new Array(1, 2, "test", true, false));
console.log(new Array());

const birthDate = [1990, 17, 5];
const fruits = ["apple", "pomegranate", "citrus"];

// concat - обʼєднує масив
const birthFruits = birthDate.concat(fruits, arr);
console.log(birthFruits);

// for( of )
const numbers = [1, 23, 5135, 2, 153, 12415, 236526];

for (const [index, fruit] of numbers.entries()) {
  if (index % 2 === 0) {
    console.log(index);
    console.log(fruit);
  }
}

for (const i of new Array(10)) {
  console.log(i);
}

console.log(fruits.length);
console.log(numbers[numbers.length - 1]);
console.log(fruits);
