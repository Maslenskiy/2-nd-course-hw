function getSeason(month) {
  if (isNaN(month) || month < 1 || month > 12) {
      return 'Неправильный номер месяца';
  }

  switch (true) {
      case month >= 3 && month <= 5:
          return 'Весна';
      case month >= 6 && month <= 8:
          return 'Лето';
      case month >= 9 && month <= 11:
          return 'Осень';
      default:
          return 'Зима';
  }
}

function play() {
  let month = parseInt(prompt('Введите номер месяца (от 1 до 12):'));
  let season = getSeason(month);
  console.log(season);
}

