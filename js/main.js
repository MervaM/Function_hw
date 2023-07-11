'use strict';

// 1.Напиши всі можливі варіанти створення функцій.
function functionExample() {
    alert('My first function declaration=)');
}
functionExample();

let functionExample_2 = function() {
    alert('My first function expression=)');
}
functionExample_2();

let functionExample_3 = () => alert('My first array function=)');
functionExample_3();

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
function functionArgs() {
    console.log("Lenght is: " + arguments.length);
}
    
functionArgs(2, 4, 6, 8, 10);

// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.
let firstNumb = +prompt("Enter your first number");
let secondNumb = +prompt("Enter your second number");

function userNumbers() {
    if(firstNumb < secondNumb) {
        console.log(alert("-1 - your first number less than second"));
    } else if(firstNumb > secondNumb) {
        console.log(alert("1 - your first number bigger than second"));
    } else {
        console.log(alert("0 - your numbers are equal"));
    }
}
userNumbers();


// 4.Напиши функцію, яка обчислює факторіал переданого їй числа.
let userNumb = prompt("If you want to know factorial, enter your number");
let factorialNumb = userNumb => {
    if(userNumb === 0) return 1;
    return userNumb * factorialNumb(userNumb - 1);

}

console.log(alert(factorialNumb(userNumb)));

// 5.Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
function userNumbersToString() {
    let numb_1 = prompt("Enter your first number");
    let numb_2 = prompt("Enter your second number");
    let numb_3 = prompt("Enter your third number");

    let userString = numb_1 + numb_2 + numb_3;

    console.log(alert(`Your numbers in string is ${userString}`));
}
userNumbersToString();

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
let firstParameter = +prompt("Enter your first number (or no =)")
let secondParameter = +prompt("Enter your second number (or no =)");

let userAria = sum => {
    if(firstParameter && secondParameter) {
        sum = firstParameter * secondParameter;
        console.log(alert(`The sum of rectangle - ${sum}`));
    } else if(firstParameter) {
        sum = firstParameter ** 2;
        console.log(alert(`The sum square of the first number - ${sum}`));
    } else {
        sum = secondParameter ** 2;
        console.log(alert(`The sum square of the second number - ${sum}`));
    }
    console.log(sum);
}
userAria(); 

