// // Задание 1 Дан массив: 

// const numbers = [1, 5, 4, 10, 0, 3];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] === 10){
//         console.log(numbers[i]);
//         break;
//     };
//     console.log(numbers[i])
// }


// //Задание 2
// const numbers2 = [1, 5, 4, 10, 0, 3];
// const indexEl = numbers2.indexOf(4);
// console.log(`Индекс значения 4 в этом массиве равен: ${indexEl}`);

// //Задание 3

// const numbers3 = [1, 3, 5, 10, 20];

// const joinNum = numbers3.join(' ');
// console.log(joinNum);


// // Задание 4

// let arr = [];

// for(let i = 0; i < 3; i++){
//     const row = [];
//     for(let j = 0; j < 3; j++){
//         row.push(1);
//     }
//     arr.push(row)
// }
// console.log(arr)


// // Задание 5

// const arrNumber = [1, 1, 1];
// arrNumber.push(2,2,2);
// console.log(arrNumber)


// // Задание 6

// const arrNumbers = [9, 8, 7, 'a', 6, 5];
// arrNumbers.sort().pop()
// console.log(arrNumbers)

// Задание 7

const numbers4 = [9, 8, 7, 6, 5];

const userPrompt = +prompt('Угадай число');
if(numbers4.includes(userPrompt)){
   alert('Угадал');
}else{
    alert(' не угадал')
}


//Задание 8

let str = 'abcdef';
str = str.split('').sort().reverse().join('');
console.log(str)