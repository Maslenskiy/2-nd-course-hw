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
