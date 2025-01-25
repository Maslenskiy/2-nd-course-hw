// Задание 1 Дан массив: 

const numbers = [1, 5, 4, 10, 0, 3];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 10){
        console.log(numbers[i]);
        break;
    };
    console.log(numbers[i])
}