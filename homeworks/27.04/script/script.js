// Все стірлочними!!!!!!!!!
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*
let fn = (array) => {
    let res = 0
    for (const item of array) {
        res += item
    }
    return res / array.length
}
let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(fn(arr));
*/


//---------------------------------------------------------------------------------------------------------


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
/*
let fn = (... nums) => {
    let min = nums[0]
    let max = nums[0]
    for (const num of nums) {
        if (min > num) {
            min = num
        }
        if (max < num) {
            max = num
        }
    }
    document.write(`${max}`)
    return min
}
console.log(fn(5, 1, 2, 3, 4, 5, 6, 7));
*/


//---------------------------------------------------------------------------------------------------------


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
/*
let fn = (arr) => {
    for (let i = 0; i < 100; i++) {
        arr[i] = Math.round(Math.random() * 100)
    }
    return arr
}
let array = []
console.log(fn(array));
*/


//---------------------------------------------------------------------------------------------------------


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
/*
let fn = (arr, limit) => {
    for (let i = 0; i < limit; i++) {
        arr[i] = Math.round(Math.random() * limit)
    }
    return arr
}
let array = []
console.log(fn(array, 50));
*/


//---------------------------------------------------------------------------------------------------------


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let fn = (array) => {
    let res = []
    for (let i = array.length - 1; i >= 0; i--) {
        res.push(array[i])
    }
    return res
}
console.log(fn(arr));
*/


//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------


// Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*
let fn = (a, b) => a * b
console.log(fn(10, 4));
*/


//---------------------------------------------------------------------------------------------------------


// - створити функцію яка обчислює та повертає площу кола з радіусом r
/*
let fn = (r) => r ** 2 * 3.14
console.log(fn(10));
*/


//---------------------------------------------------------------------------------------------------------


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*
let fn = (h, r) => 2 * 3.14 * r * h
console.log(fn(10, 5));
*/


//---------------------------------------------------------------------------------------------------------


// - створити функцію яка приймає масив та виводить кожен його елемент
/*
function array(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
array(x)
*/


//--------------------------------------------------------------------------------------------------------------


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*
let text = (p) => {
    document.write(`<p>${p}</p>`)
}
text ('Hello World')
*/


//--------------------------------------------------------------------------------------------------------------


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*
let list = (x) => {
    document.write(`<ul>
                        <li>${x}</li>
                        <li>${x}</li>
                        <li>${x}</li>
                    </ul>`)
}
list('list item')
*/


//--------------------------------------------------------------------------------------------------------------


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*
let list =  (item, x) => {
    document.write(`<ul>`)
    for (let i = 0; i < x; i++) {
       document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
list ('hello', 10)
*/


//--------------------------------------------------------------------------------------------------------------


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*
let x = [3, true, 'hello', 11, false, 'bye']
let list = (arr) => {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}
list (x)
*/


//--------------------------------------------------------------------------------------------------------------


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
/*
let persons = [
    {id: 1, name: 'Ivan', age: 25},
    {id: 2, name: 'Maria', age: 24},
    {id:3, name:'Valeriy', age: 30},
    {id:4, name:'Viktoriya', age: 29}
]
let fn =  (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>`)
        for (const arrElementKey in arrElement) {
            document.write(`${arrElementKey}: ${arrElement[arrElementKey]} `)
        }
        document.write(`</div>`)
    }
}
fn(persons)
*/


//--------------------------------------------------------------------------------------------------------------


// - створити функцію яка повертає найменьше число з масиву
/*
let x = [1, 4, -1, 0, -4, 3, 5, 7, 2, -100, 8,]
let getMinNum = (arr) => {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}
console.log(getMinNum(x));
*/


//--------------------------------------------------------------------------------------------------------------


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*
let fn = (arr) => {
    let res = 0
    for (const arrElement of arr) {
        res = res + arrElement
    }
    return res
}
let a = [10, 20, 30, -10, -20, 20]
console.log(fn(a));
*/


//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------


// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
/*
 let fn = (arr) => {
     let res = []
     for (let i = arr.length - 1; i >= 0; i--) {
          res.push(arr[i])
     }
     return res
 }
 let array = [{id: 1, name: 'Alice', age: 25}, {id: 2, name: 'Andrii', age: 27}]
console.log(fn(array));
*/
