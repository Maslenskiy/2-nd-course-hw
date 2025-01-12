"use strict"

// Задание 1

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

// Задание 5
// Напишите программу, которая определяет по номеру месяца в году, к какому сезону этот месяц принадлежит. 
// Например, 1-й месяц (он же январь) принадлежит к сезону «зима».
// Для написания программы используйте оператор switch. Для обозначения номера месяца используйте переменную monthNumber, 
// которая равна 12. Пропишите условие, при котором программа не будет выполняться (номер месяца больше 13).

let monthNumber = 13 ;

switch(monthNumber){
    case 12:
        console.log(`${monthNumber} - месяц принадлежит к сезону Зима`);
    break;
    case 1:
        console.log(`${monthNumber} - месяц принадлежит к сезону Зима`);
    break;
    case 2 :
        console.log(`${monthNumber} - месяц принадлежит к сезону Зима`);
    break;

    case 3:
        console.log(`${monthNumber} - месяц принадлежит к сезону Весна`);
    break;
    case 4:
        console.log(`${monthNumber} - месяц принадлежит к сезону Весна`);
    break;
    case 5 :
        console.log(`${monthNumber} - месяц принадлежит к сезону Весна`);
    break;

    case 6:
        console.log(`${monthNumber} - месяц принадлежит к сезону Лето`);
    break;
    case 7:
        console.log(`${monthNumber} - месяц принадлежит к сезону Лето`);
    break;
    case 8 :
        console.log(`${monthNumber} - месяц принадлежит к сезону Лето`);
    break;
    
    case 9:
        console.log(`${monthNumber} - месяц принадлежит к сезону Осень`);
    break;
    case 10:
        console.log(`${monthNumber} - месяц принадлежит к сезону Осень`);
    break;
    case 11 :
        console.log(`${monthNumber} - месяц принадлежит к сезону Осень`);
    break;

    default:
        console.log('Такого номера месяца не существует');
}