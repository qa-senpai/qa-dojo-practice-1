/**
 * Callback функція — це функція, яка передається як аргумент до іншої функції і викликається після того, як інша функція завершить свою роботу.
 * У JavaScript callback’и часто використовуються для асинхронних операцій, таких як запити до серверу або таймери.
 */

// Example #1
function greeting(name) {
  console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}
processUserInput(greeting);

/**
 * Тут функція greeting передається як callback до функції processUserInput,
 *  яка викликає callback(name) після отримання імені.
 */

// Example #2
function sayHello() {
  console.log("Hello, world!");
}

function callFunction(callback) {
  callback(); // Виклик функції без аргументів
}
callFunction(sayHello); // Передаємо функцію без дужок
