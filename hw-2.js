// Задание 1 
// Создайте переменную a. Запишите в нее значение 10,
// выведите его на экран с помощью метода alert(). 
// Затем запишите в нее же значение 20, выведите его на экран.

let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
// Создайте переменную и присвойте ей значение года выпуска первого iPhone. Выведите значение переменной на экран.

const yearIPhone = 2007;
alert(yearIPhone);

// Задание 3
// Создайте переменную и присвойте ей значение имени создателя языка JavaScript. Выведите значение переменной на экран.

const nameAuthorJs = 'Брендан Эйх';
alert(nameAuthorJs);


// Задание 4
// Создайте две переменные: 10 и 2. С помощью метода alert()
// выведите на экран их сумму, разность, произведение и частное (результат деления)

const num1 = 10;
const num2 = 2;

alert(num1 + num2);
alert(num1 - num2);
alert(num1 * num2);
alert(num1 / num2);

// Задание 5
// Возведите 2 в 5-ю степень. Результат запишите в переменную result и выведите на экран с помощью метода alert().

const num = 2;
const result = num ** 5;
alert(result);

// Задание 6
// Даны переменные: d = 9 и b = 2.Найдите остаток от деления a на b
// и выведите результат на экран с помощью метода alert().

const d = 9;
const b = 2;
const result2 = d % b;
alert(result2);

// Задание 7
// Перепишите код с использованием операторов присваивания и инкремента/декремента (количество строк должно остаться прежним):

let num3 = 1;
num3 += 5;
num3 -= 3;
num3 *= 7;
num3 /= 3;
num3++;
num3--;
alert(num);

// Задание 8 
// Создайте переменную age, присвойте ей значение с помощью метода prompt()
//  «Сколько вам лет?». Результат выведите с помощью alert()

let age = Number(prompt('Сколько вам лет?'));
alert(age)

// Задание 9.0

const user = {
    name: 'Петр',
    age:35,
    isAdmin:false
}

// Задание 9.1
user['city of residence'] = 'Rostov-Na-Dony';

// Задание 9.2
user.age = 55;
