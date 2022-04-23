// 1. Створити пустий масив та :  (Все перше завдання я закладав в один масив)
//     a. заповнити його 50 парними числами за допомоги циклу.
/*
let arr = []
for (let i = 0, y = 2; i < 50; i++, y += 2) {
    arr[i] = y
}
*/


//     b. заповнити його 50 непарними числами за допомоги циклу.
/*
for (let i = 50, x = 1; i < 100; i++, x += 2) {
    arr[i] = x
}
*/


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
/*
for (let i = 100; i < 120; i++) {
    let a = Math.round(Math.random() * 100)
    arr[i] = a
}
*/


// d. Заповнити масив 20ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
/*
for (let i = 120; i < 140; i++) {
    let p = Math.round(Math.random() * (732 - 8)) + 8;
    arr[i] = p
}
*/


// 2. Вивести за допомогою console.log кожен третій елемен
/*
for (let i = 0; i < arr.length; i += 3) {
    console.log(arr[i])
}
*/


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
/*
for (let i = 0; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }

}
*/


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i + 1])
    }
}
*/


// 6. Є масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки. Обрахувати середній чек.
/*
let arr = [100, 250, 50, 168, 120, 345, 188]
let res = 0
for (const number of arr) {
    res = res + number
}
console.log(res / arr.length)
*/

