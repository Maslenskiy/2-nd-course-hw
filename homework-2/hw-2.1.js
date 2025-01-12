"use strict"

Задание 1

const password = '2025';
const getUserPassword = prompt('Введите пароль');

if(getUserPassword === password){
    alert('Пароль введен верно');
}else{
    alert('Пароль введен неверно');
}

// Задание 2
const c = 2;
if(c > 0 && c < 10){
    console.log('верно');
}else{
    console.log('неверно')
}

// Задание 3

const d = 5;
const e = 105;

if(d > 100 || e > 100){
console.log('Верно')
}else{
    console.log('Неверно')
}

// Задание 4
// Исправьте код с помощью преобразования типов, чтобы на экран выводилось число 5, а не строка '23'.
let a = '2';
let b = '3';
// // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));