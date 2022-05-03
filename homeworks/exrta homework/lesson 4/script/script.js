// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.
/*
let fn = (...item) => {
    if (item.length === 1) {
        console.log(item[0])
    } else if (item.length === 2) {
        console.log(item[0] + item[1]);
    }

}
fn(4, 6)
*/


//--------------------------------------------------------------------------------------------------------


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//EXAMPLE: [1,2,3,4] [2,3,4,5] результат [3,5,7,9]
/*
let fn = (arr1, arr2) => {
    let res = []
    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i] + arr2[i])
    }
    return res
}
let x = [1, 2, 3, 4]
let y = [2, 3, 4, 5]
console.log(fn(x, y));
*/


//--------------------------------------------------------------------------------------------------------


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
/*
let fn = (arr) => {
    let res = []
    for (const item of arr) {
        for (const key in item) {
            res.push(key)
        }
    }
    return res
}
let x = [{name: 'Dima', age: 13}, {model: 'Camry'}]
console.log(fn(x));
*/


//--------------------------------------------------------------------------------------------------------


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
/*
let fn = (arr) => {
    let res = []
    for (const item of arr) {
        for (const key in item) {
            res.push(item[key])
        }
    }
    return res
}
let x = [{name: 'Dima', age: 13}, {model: 'Camry'}]
console.log(fn(x));
*/

