/*
Вправа №1 — Перевірте парні чи непарні
Сценарій: Напишіть програму, яка перевіряє, парне чи непарне число.
*/


function isPair(number){
    if(number % 2 === 0){
        return true
    } else return false;
}

console.log(isPair(10))


function isEven(x){
if (Number.isInteger(x / 2) ) {
    console.log("x is an Even");
 
    return true;
  } else {
    console.log("x is an odd");
 
    return false;
  }
}

isEven(8)


/*
1. Сценарій: Напишіть програму для визначення більшого з двох чисел.
2. Напишіть програму  яка відображає найбільше ціле число з двох цілих чисел. (if.. + покрийте тестами)
*/

const someNum = 1
const someNumFloat = 1.9


function isPrime(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){

    num1 = Math.round(num1);
    num2 = Math.round(num2);

    if(num1 > num2) 
    {
        return num1
    }
    else if(num1 === num2){
        throw Error(`${num1} and ${num2} are even`)
    }
    else {
        return num2 
    }
    }
    else throw Error(`please use numbers for both ${num1} and ${num2}`) 
}

function isPrimWrapper(num1, num2){
    const result = isPrime(num1, num2)

    if(result === num1){
        ''
    }else{
        ''
    }
}

isPrime(13.1425, 14.1456)

