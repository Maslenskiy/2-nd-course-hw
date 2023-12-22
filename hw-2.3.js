// Запрашиваем у пользователя номер месяца
let monthNumber = prompt("Введите номер месяца (от 1 до 12):");

// Преобразуем введенное значение в число
monthNumber = parseInt(monthNumber);

// Проверка, что введенный номер месяца находится в допустимом диапазоне
if (monthNumber < 1 || monthNumber > 12 || isNaN(monthNumber)) {
    alert("Неверный ввод. Введите число от 1 до 12.");
} else {
    // Определение сезона с использованием оператора switch
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            alert("Зима");
            break;
        case 3:
        case 4:
        case 5:
            alert("Весна");
            break;
        case 6:
        case 7:
        case 8:
            alert("Лето");
            break;
        case 9:
        case 10:
        case 11:
            alert("Осень");
            break;
        default:
            alert("Что-то пошло не так. Попробуйте ещё раз.");
            break;
    }
}