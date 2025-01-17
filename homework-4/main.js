// Задание 1

// function smallerOfTwoNumbers (a, b){
//     if(a < b || a === b){
//         return a
//     }else{
//         return b
//     }

// }
// console.log(smallerOfTwoNumbers(8,8))

//  Задание 2

// function evenOrOdd(num){
//     if( num % 2 === 0 ) {
//         console.log('Число четное')
//     }else{
//         console.log('Число нечетное')
//     }
// }

// evenOrOdd(9)


// Задание 3

// function squareOfNumber(num){
//     return num ** 2;
// }

// const res1 = squareOfNumber(5);

// console.log(`Квадрат равен ${res1}`)

// const res2 = squareOfNumber(3);

// console.log(`Квадрат равен ${res2}`)


// Задание 4
const userAgePrompt = () => {
const userAge = +prompt( 'Сколько вам лет' );

if(userAge < 0){
    alert( "Вы ввели неправильное значение" );
}else if( userAge >= 0 && userAge <= 12 ) {
    alert( "Привет Друг!" )
}else if( userAge >= 13 ){
    alert( "Добро пожаловать" )
}
}

userAgePrompt()