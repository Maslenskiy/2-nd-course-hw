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
console.log(str);


//Задание 9

const arrNum = [
    [1, 2, 3],
    [4, 5, 6]
]

const newS = [];

for(let item of arrNum){
    for(let j of item){
        newS.push(j)
    }
}
console.log(newS)


//Задание 10

const numbersSum = [2,4,6,7,8,];
for(let i = 0; i < numbersSum.length-1; i++){
    const sum = numbersSum[i] + numbersSum[i + 1];
    console.log(sum)
}

//Задание 11

function returnsAnArrayOfSquares(arr){
 const arrResult = arr.map(el => el ** 2);
    return arrResult
}
const result1 = returnsAnArrayOfSquares([2,3,4,5])
console.log(result1)

// Задание 12

function arrayOfWordLengths(arrStr){
    const newArrLenghtWord = arrStr.map(el => el.length)
    return newArrLenghtWord
}

const res = arrayOfWordLengths(['Привет', 'Это'])
console.log(res)

// Задание 13

function returnArrayNegativeValues(arrNumber){
    const negativeValues = arrNumber.filter(num => num < 0);
    return negativeValues;
}

const resalt = returnArrayNegativeValues([5,6,7,-10,-4,-16]);
console.log(resalt)

// Задание 14

const mathRandomArr =  Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
const evenArray = mathRandomArr.filter(num => num % 2 === 0);

console.log("Исходный массив:", mathRandomArr);
console.log("Массив с четными значениями:", evenArray)

// Задание 15

const mathRandomArr2 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

const newArrReduce = mathRandomArr2.reduce((accumulator, num) => (accumulator + num), 0) / mathRandomArr2.length;

console.log("Исходный массив:", mathRandomArr2);
console.log("Среднее значение:", newArrReduce);