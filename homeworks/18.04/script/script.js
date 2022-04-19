// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = 40
let a = -3
if (a !== 0) {
    console.log('correct')
} else {
    console.log('wrong')
}


// -----------------------------------------------------------------------------------------------


// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time =  29
if (time < 15 && time >= 0) {
    console.log('its first')
} else if (time >=15 &&time < 30) {
    console.log('its second')
} else if (time >= 30 && time < 45) {
    console.log('its third')
} else if (time >= 45 &&time < 60) {
    console.log('its fourth')
} else {
    console.log('it have to be 1-59')
}


// -----------------------------------------------------------------------------------------------


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = 11
if (day < 11) {
    console.log('its first decade')
} else if (day < 21) {
    console.log('its second decade')
} else if (day <= 31) {
    console.log('its third decade')
}


// -----------------------------------------------------------------------------------------------


// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається
//     інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


//let dayOfWeek = prompt('what number of a day?') /* закоментував, шоб не вискакувала модалка*/
let sunday = 'go to shop, to feed a cat, make homework, sport'
let monday = 'make a cake, water the pot, to feed a cat, homework'
let tuesday = 'go for a walk, to feed a cat, make homework, sport'
let wednesday = 'go to shop, watter the pot, make homework, to feed a cat'
let thursday = 'go to shop, to feed a cat, make homework, sport'
let friday = 'make a cake, to feed a cat, make homework, sport'
let saturday = 'sleep, sleep, sleep, sleep'

switch (dayOfWeek) {
    case '1':
        document.write(sunday);
        break
    case '2':
        document.write(monday);
        break
    case '3':
        document.write(tuesday);
        break
    case '4':
        document.write(wednesday);
        break
    case '5':
        document.write(thursday);
        break
    case '6':
        document.write(friday);
        break
    case '7':
        document.write(saturday);
        break
    default:
        document.write('its not a number of a day')
}


// -----------------------------------------------------------------------------------------------


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.


//let s = +prompt('what is the first number?')
//let d = +prompt('what is the second number?')   /*закоментував, шоб не вискакували модалки*/
if (s > d) {
    document.write(s)
} else if (s < d) {
    document.write(d)
} else if (s === d) {
    document.write(s + " = " + d)
} else {
    document.write('try again')
}

