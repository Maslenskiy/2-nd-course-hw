'use strict';

// Задание 1

// let i = 1;

// while(i <= 2){
//     console.log('Привет');
//     i++;
// }

// Задание 2

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// // Задание 3

// for(let i = 7; i <= 22; i++){
// console.log(i)
// }

// Задание 4

// const obj = {
//     "Коля" : '200',
//     "Вася" : '300',
//     "Петя" : '400',
// }

// for(let user in obj){
//     console.log(`${user} — зарплата ${obj[user]} долларов`)
// }

// Задание 5

let n = 1000;
let num = 0;

while(n > 50){
    n = n /2;
    num++;
}
console.log(`Получилось число ${n}. Число итераций равно ${num}`)