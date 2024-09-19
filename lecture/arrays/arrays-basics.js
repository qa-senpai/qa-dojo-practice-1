//#region Як створити Array
[];
new Array(10, 12, "saf", 251);
//#endregion

//#region Як звертатиьсь до елементів в масиві
const myDates = [17, 5, 1990];

console.log(myDates[0]);
console.log(myDates[1]);
console.log(myDates[2]);
//#endregion

//#region як обʼєднувати масиви
const coffees = [
  "Espresso",
  "Espresso_Macchiato",
  "Cappuccino",
  "Flat_White",
  "Mocha",
  "Espresso_Con Panna",
  "Cafe_Breve",
];
const clients = ["Dima", "Pasha", "Tanya"];
const drinks = ["Lemonade", "Mochito"];
const coffeeShop = [coffees, clients, drinks];

console.log(coffeeShop);

// concat
const stringArray = ["as", "safas", "123"];
const newArray3 = arr2.concat(newArr2, stringArray);
console.log(newArray3);

console.log(arr2);
console.log(newArr2);
console.log(stringArray);
//#endregion

//#region for of
// Цикл `for...of` в JavaScript використовується для ітерації (перебору) ітерабельних об'єктів,
// таких як масиви, рядки, мапи, множини (Set), тощо.
// Він дозволяє проходити по елементах масиву або інших колекцій,
// повертаючи безпосередньо значення елементів, а не їх індекси (як це робить цикл `for...in`).

// Приклад з масивом

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
// Виведе:
// 'apple'
// 'banana'
// 'orange'

// Пояснення: Цикл `for...of` проходить по кожному елементу масиву `fruits` і присвоює його змінній `fruit`.
// Потім ми виводимо кожен елемент у консоль.

// Приклад з рядком (теж ітерабельний об'єкт)

const sentence = "Hello";

for (const letter of sentence) {
  console.log(letter);
}
// Виведе:
// 'H'
// 'e'
// 'l'
// 'l'
// 'o'

// Пояснення: Цикл `for...of` перебирає кожен символ рядка, присвоюючи його змінній `letter`.

// Приклад з множиною (Set)

const uniqueNumbers = new Set([1, 2, 3, 4, 4, 5]);

for (const number of uniqueNumbers) {
  console.log(number);
}
// Виведе:
// 1
// 2
// 3
// 4
// 5

// Пояснення: Цикл `for...of` ітерує по кожній парі ключ-значення в мапі `userMap`,
// дозволяючи легко отримати доступ до кожної пари ключ-значення.

// Висновок:
// Цикл `for...of` є потужним інструментом для роботи з ітерабельними об'єктами,
// оскільки він дозволяє отримувати безпосередньо значення елементів,
// спрощуючи код і підвищуючи його читабельність у випадках, коли індекси не потрібні.

for (let [index, value] of arr2.entries()) {
  console.log(index);
  arr2[index] = value + 1;
  // console.log(newValue);
}
//#endregion

// Щоб рухатись далі нам треба зрозуміти поняття callback функції

//#region forEach
// Метод `forEach()` в JavaScript дозволяє виконувати задану функцію один раз для кожного елемента масиву.
// Це зручний спосіб перебору елементів масиву, де вам не потрібен результат,
// а лише потрібно виконати дію для кожного елемента.

// Приклад з масивом чисел

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});
// Виведе:
// 1
// 2
// 3
// 4
// 5

// Пояснення: Метод `forEach()` викликає передану функцію для кожного елемента масиву.
// В цьому прикладі кожен елемент масиву `numbers` передається як аргумент до функції,
// яка просто виводить його у консоль.

// Метод `forEach()` також приймає три аргументи:
// 1. Значення поточного елемента (обов'язковий аргумент).
// 2. Індекс поточного елемента (необов'язковий аргумент).
// 3. Масив, по якому ітерація відбувається (необов'язковий аргумент).

// Приклад з індексами

numbers.forEach(function (number, index) {
  console.log(`Індекс: ${index}, Значення: ${number}`);
});
// Виведе:
// Індекс: 0, Значення: 1
// Індекс: 1, Значення: 2
// Індекс: 2, Значення: 3
// Індекс: 3, Значення: 4
// Індекс: 4, Значення: 5

// Пояснення: Ми передали другий аргумент `index`, щоб також отримати індекси елементів під час перебору.
// Таким чином, ми можемо отримати як значення елемента, так і його індекс.

// Використання з масивом об'єктів

const students = [
  { name: "John", age: 20 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

students.forEach(function (student) {
  console.log(`${student.name} is ${student.age} years old`);
});
// Виведе:
// John is 20 years old
// Alice is 25 years old
// Bob is 30 years old

// Пояснення: У цьому прикладі `forEach()` проходить по кожному об'єкту в масиві `students`
// і виводить інформацію про кожного студента.

// Особливості методу `forEach()`:
// 1. Метод `forEach()` не повертає новий масив (на відміну від методу `map()`),
// а просто виконує функцію для кожного елемента.
// 2. Неможливо вийти з циклу `forEach()` до того, як він завершить перебір всіх елементів масиву.
// Якщо потрібно передчасно припинити ітерацію, краще використовувати цикл `for...of` або `for`.
// 3. Метод не змінює сам масив, хоча можна змінювати його елементи, якщо масив містить об'єкти.

// Приклад зміни об'єктів у масиві

students.forEach(function (student) {
  student.age += 1; // Додаємо 1 до віку кожного студента
});

console.log(students);
// Виведе оновлений масив:
// [{ name: 'John', age: 21 }, { name: 'Alice', age: 26 }, { name: 'Bob', age: 31 }]
//#endregion
//#region find()
/**
 * Метод find() в JavaScript повертає перший елемент масиву, який задовольняє передану функцію перевірки.
 * Якщо жоден елемент не відповідає умовам, метод повертає undefined.
 */

// Example #1
//Маємо масив чисел і хочемо знайти перше число, яке є парним.

/*
Маємо масив чисел і хочемо знайти перше число, яке є парним.
*/
const numbers = [3, 5, 7, 8, 11, 14];
const firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber);
// Виведе: 8

/*
Функція перевірки, яку ви передаєте в метод find(), повинна повернути або true, або false для кожного елемента масиву. Це значення використовується для визначення, чи відповідає елемент критеріям пошуку.
	•Якщо функція повертає true для певного елемента, то find() припиняє роботу і повертає цей елемент.
	•Якщо функція повертає false, пошук триває далі з наступним елементом.
*/

const students = [
  { name: "John", age: 20 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const findStudent = students.find((student) => student.age > 22);

console.log(findStudent);
// Виведе: { name: 'Alice', age: 25 }
//#endregion

//#region  pop push
// Методи pop() і push() в JavaScript використовуються для роботи з масивами,
// дозволяючи додавати та видаляти елементи з кінця масиву.
// Це дуже прості та поширені операції при роботі з масивами.

// 1. Метод push()

// Метод push() додає один або більше елементів у кінець масиву та повертає нову довжину масиву.

let fruits = ["apple", "banana"];

fruits.push("orange");
console.log(fruits);
// Виведе: ['apple', 'banana', 'orange']

const newLength = fruits.push("pear", "grape");
console.log(fruits);
// Виведе: ['apple', 'banana', 'orange', 'pear', 'grape']
console.log(newLength);
// Виведе: 5 (нову довжину масиву)

// Пояснення: У першому виклику push('orange') ми додаємо один елемент ('orange') в кінець масиву.
// У другому виклику додаємо одразу два елементи ('pear', 'grape'), і метод повертає нову довжину масиву.

// 2. Метод pop()

// Метод pop() видаляє останній елемент з масиву та повертає цей елемент.
// Якщо масив порожній, він повертає undefined.

let numbers1 = [1, 2, 3, 4];

const lastElement = numbers1.pop();
console.log(numbers1);
// Виведе: [1, 2, 3]
console.log(lastElement);
// Виведе: 4 (останній елемент, який було видалено)

// Пояснення: Метод pop() видаляє останній елемент масиву (у цьому випадку це 4) і повертає його.
// Після цього масив залишається без останнього елемента.

// Спільне використання push() і pop()

// Ви можете використовувати ці методи разом для створення структури даних типу "стек",
// де елементи додаються і видаляються з кінця масиву.

//#endregion

//#region includes()
// Метод includes() в JavaScript використовується для перевірки,
// чи містить масив (або рядок) певне значення.
// Він повертає булеве значення: true, якщо елемент знайдено, і false, якщо ні.

// Простий приклад з масивом

let fruits = ["apple", "banana", "orange"];

let hasBanana = fruits.includes("banana");
console.log(hasBanana);
// Виведе: true (оскільки 'banana' є в масиві)

let hasGrape = fruits.includes("grape");
console.log(hasGrape);
// Виведе: false (оскільки 'grape' немає в масиві)

// Приклад з масивом чисел

let numbers = [1, 2, 3, 4, 5];

let hasThree = numbers.includes(3);
console.log(hasThree);
// Виведе: true (оскільки число 3 є в масиві)

let hasTen = numbers.includes(10);
console.log(hasTen);
// Виведе: false (оскільки числа 10 немає в масиві)

// Використання з рядком

let sentence = "JavaScript is awesome";

let includesWord = sentence.includes("awesome");
console.log(includesWord);
// Виведе: true (оскільки слово "awesome" є в рядку)

let includesJava = sentence.includes("Java");
console.log(includesJava);
// Виведе: true (оскільки слово "Java" є частиною рядка "JavaScript")

// Метод includes() також приймає другий необов'язковий параметр — індекс, з якого починати пошук

let hasOrangeAfterIndex1 = fruits.includes("orange", 1);
console.log(hasOrangeAfterIndex1);
// Виведе: true (оскільки 'orange' є після індексу 1)

let hasAppleAfterIndex1 = fruits.includes("apple", 1);
console.log(hasAppleAfterIndex1);
// Виведе: false (оскільки 'apple' знаходиться на індексі 0, а пошук починається з індексу 1)

// Висновок:
// Метод includes() допомагає швидко перевірити наявність певного елемента в масиві або підрядка в рядку.
// Він повертає true, якщо значення знайдено, і false, якщо його немає.
//#endregion
