// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
/*
let a = 2
let b = 1
let result = (a + b < 4) ? 'мало' : 'багато'
console.log(result)
*/


//-----------------------------------------------------------------------------------------------------------------------


// - Маємо будь-яке число від -100 , 0, +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
/*
let a = 20
let res = a !== 0 ? a < 0 ? 'negative' : 'positive' : 'zero'

console.log(res)
*/


//-----------------------------------------------------------------------------------------------------------------------


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
/*
if (prompt('What is official name of JS?') === 'ECMAScript') {
    console.log('True')
} else {
    console.log('Dont know? ECMAScript!')
}
*/


//-----------------------------------------------------------------------------------------------------------------------


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
/*
let num = 26;
if (num > 0 && num <= 20) {
    console.log('in first');
} else if (num > 20 && num <= 48 ) {
    console.log('in second');
} else if (num > 48 && num < 90) {
    console.log('in third');
} else {
    console.log('error');
}
*/


//-----------------------------------------------------------------------------------------------------------------------


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить
// тоді  вивести Повідомлення - що число не вірне ... .
/*
let num = Math.round(Math.random() * (5 - 1) + 1);
switch (num) {
    case 1:
        console.log('ви виграли автомобіль!');
        break;
    case 2:
        console.log('ви виграли байк!');
        break;
    case 3:
        console.log('ви виграли новий смартфон!');
        break;
    case 4:
        console.log('ви виграли квартиру!');
        break;
    case 5:
        console.log('ви виграли набір для риболовлі!');
        break;
    default:
        console.log('невірне число');
}*/
