// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*
let getMin = (num1, num2, num3) => {
    let min = 0
    if (num1 < num2 && num1 < num3) {
        min = num1
    } else if (num2 < num1 && num2 < num3) {
        min = num2
    } else if (num3 < num1 && num3 < num2) {
        min = num3
    } else {
        min = 'it is equal numbers'
    }
    return min
}
console.log(getMin(100, 100, 100));
*/


//--------------------------------------------------------------------------------------------------


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*
let getMax = (num1, num2, num3) => {
    let min = 0
    if (num1 > num2 && num1 > num3) {
        max = num1
    } else if (num2 > num1 && num2 > num3) {
        max = num2
    } else if (num3 > num1 && num3 > num2) {
        max = num3
    } else {
        max = 'it is equal numbers'
    }
    return max
}
console.log(getMax(1011, 100, 100));
*/


//--------------------------------------------------------------------------------------------------


// - створити функцію яка повертає найбільше число з масиву
/*
let getMax = (arr) => {
    let max = 0
    for (const item of arr) {
        if (item > max) {
            max = item
        }
    }
    return max
}
let array = [1, 4, 6, 2, -10, 4, -100, 2, 34, 100]
console.log(getMax(array));
*/


//--------------------------------------------------------------------------------------------------


// - створити функцію яка повертає найменьше число з масиву
/*
let getMin = (arr) => {
    let min = 0
    for (const item of arr) {
        if (min > item) {
            min = item
        }
    }
    return min
}
let array = [1, 4, 6, 2, -10, 4, -100, 2, 34, 5]
console.log(getMin(array));
*/


//--------------------------------------------------------------------------------------------------


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*
let sum = (arr) => {
    let res = 0
    for (const item of arr) {
        res += item
    }
    return res
}
let array = [1, 2, 10]
console.log(sum(array));
*/


//--------------------------------------------------------------------------------------------------


// - Дано натуральное число n. Выведите все числа от 1 до n.
/*
let fn = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}
fn(25)
*/


//--------------------------------------------------------------------------------------------------


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.
/*
let fn = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i)
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i)
        }
    } else {
        console.log('qwerty')
    }
}
fn(10, 20)
*/


//--------------------------------------------------------------------------------------------------


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
/*
let fn = (arr, i) => {
    for (let j = 0; j < arr.length; j++) {
        let x = 0
        if (j === i) {
            x = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = x
        }
    }
    return arr
}
let array = [1, 53, 3, 1456, 4, 6, 123, 612, 52]
console.log(fn(array, 3));
*/


//--------------------------------------------------------------------------------------------------


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
//  Зберігаючи при цьому порядок не нульових значень.
//  Двожина масиву від 2 до 100
// EXAMPLE:
//  [1,0,6,0,3] => [1,6,3,0,0]
//  [0,1,2,3,4] => [1,2,3,4,0]
//  [0,0,1,0]   => [1,0,0,0]
/*
let fn = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.push(arr[i])
            arr.splice(i, 1)
        }

    }
    return array
}

let array = [3, 1, 3, 4, 0, 3, 0, 7, 0, 3, 4, 5, 0, 345, 2, 0, 123, 4, 5, 3, 0, 6345, 0, 3456, 3, 5, 32]
console.log(fn(array));
*/

// v2

/*
let fn = (arr) => {
    let notZero = []
    let zero = []
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            notZero.push(arr[i])
        } else {
            zero.push(arr[i])
        }
    }
    for (const item of notZero) {
        result.push(item)
    }
    for (const item of zero) {
        result.push(item)
    }
    return result
}

let array = [1, 3, 6, 0, 12, 54, 7, 0, 23, 5, 33, 543, 60, 0, 53, 0, 5, 2, 5, 0, 34]
console.log(fn(array));
*/


