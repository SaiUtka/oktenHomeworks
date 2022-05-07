// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
/*
let x = 'hello world'
console.log(x.length)
console.log('lorem ipsum'.length)
console.log('javascript is cool'.length)
*/


//--------------------------------------------------------------------------------------------------------


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
/*
let up = (str) => str.toUpperCase();
console.log(up('hello world'));
console.log(up('lorem ipsum'));
console.log('javascript is cool'.toUpperCase());
*/


//--------------------------------------------------------------------------------------------------------


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
/*
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
*/


//--------------------------------------------------------------------------------------------------------


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*
let str = ' dirty string   ';
console.log(str.trim());
*/


//--------------------------------------------------------------------------------------------------------


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
/*
let stringToArray = (str) => str.split(' ');
console.log(stringToArray('Ревуть воли як ясла повні'));
*/


//--------------------------------------------------------------------------------------------------------


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0].
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
/*
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let res = [];
arr.map((item) => {
    res.push(String(item));
});
console.log(res)
*/


//--------------------------------------------------------------------------------------------------------


// - є масив
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/
// -- відсортувати його за спаданням за monthDuration
/*
let res = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(res)
*/

//--------------------------------------------------------------------------------------------------------

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
/*
let res = coursesAndDurationArray.filter((item) => {
    if (item.monthDuration > 5) {
        return true;
    }
    return false;
});
console.log(res)
*/


//--------------------------------------------------------------------------------------------------------


// описати колоду карт

// let deckOfCards = [
//     {
//         cardSuit: null,
//         value: 'Joker',
//         color: 'black'
//     },
//     {
//         cardSuit: null,
//         value: 'Joker',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '6',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '6',
//         color: 'red'
//     }
// ]
// - знайти піковий туз

// - знайти піковий туз
/*
let findAceOfSpade = deckOfCards.find(item => item.value === 'ace' && item.cardSuit === 'spade');
console.log(findAceOfSpade)
*/

//--------------------------------------------------------------------------------------------------------

// - всі шістки
/*
let find6 = deckOfCards.filter((item) => {
    if (item.value === '6') {
        return true;
    }
});
console.log(find6);
*/

//--------------------------------------------------------------------------------------------------------

// - всі червоні карти
/*
let findRedCards = deckOfCards.filter((item) => {
    if (item.color === 'red') {
        return true;
    }
    return false;
});
console.log(findRedCards);
*/

//--------------------------------------------------------------------------------------------------------

// - всі буби
/*
let findDiamonds = deckOfCards.filter((item) => {
   if (item.cardSuit === 'diamond') {
       return true;
   }
    return false;
});
console.log(findDiamonds);
*/

//--------------------------------------------------------------------------------------------------------

// - всі трефи від 9 та більше
/*
let findSpadeAfter8 = deckOfCards.filter((item) => {
    if (item.cardSuit === 'spade' && item.value >= 9 || item.cardSuit === 'spade' && item.value.length > 2) {
        return true;
    }
    return false;
});
console.log(findSpadeAfter8);
*/
