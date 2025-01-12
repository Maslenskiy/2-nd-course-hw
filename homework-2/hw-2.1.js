"use strict"

// Задание 1

const password = '2025';
const getUserPassword = prompt('Введите пароль');

if(getUserPassword === password){
    alert('Пароль введен верно');
}else{
    alert('Пароль введен неверно');
}