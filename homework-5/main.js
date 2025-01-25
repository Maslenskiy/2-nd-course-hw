// Задание 1 Дан массив: 

const numbers = [1, 5, 4, 10, 0, 3];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 10){
        console.log(numbers[i]);
        break;
    };
    console.log(numbers[i])
}


//Задание 2
const numbers2 = [1, 5, 4, 10, 0, 3];
const indexEl = numbers2.indexOf(4);
console.log(`Индекс значения 4 в этом массиве равен: ${indexEl}`);

//Задание 3

const numbers3 = [1, 3, 5, 10, 20];

const joinNum = numbers3.join(' ');
console.log(joinNum)