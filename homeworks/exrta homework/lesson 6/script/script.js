// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('',3)) // [нас,лаж,ден,ие]
/*
let x = 'potato crisps made from potatoes'
let cutString = (str, n) => {
    let res = [];
    for (let i = 0; i < str.length; i += n) {
        res.push(str.slice(i, i + n));
    }
    return res;
}
console.log(cutString(x, 4));
*/


//-----------------------------------------------------------------------------------------------------------------


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
/*
let delete_characters = (str, length) => str.substring(0, length);
console.log(delete_characters('let it snow', 5));
*/


//-----------------------------------------------------------------------------------------------------------------


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//   При цьому всі символи рядка необхідно перевести у верхній регістр.
//   let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
/*
let insert_dash = (str) => {
    let arr = str.split(' ');
    let res = arr.join('-').toUpperCase();
    return res;
}
console.log(insert_dash('i believe i can fly'))
*/


//-----------------------------------------------------------------------------------------------------------------


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
// з нижнього регістру у верхній.

// я думаю, є адекватніший спосіб, але я не догадався

/*
let goUp = (str) => {
    let newStr = str[0].toUpperCase() + str.substring(1, str.length);
    return newStr
}
console.log(goUp('it is working'));
*/


//-----------------------------------------------------------------------------------------------------------------


// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// Не догадався як можна по-іншому це зробити(

/*
let clearStr = (str, x) => str.replace(x, ' ');
console.log(clearStr(n1, '..'));
console.log(clearStr(n2, '---'));
console.log(clearStr(n3, '__'));
*/


//-----------------------------------------------------------------------------------------------------------------


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
/*
let getRandom = (n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(Math.round(Math.random() * 100));
    }
    return res
}
console.log(getRandom(20));
*/


//-----------------------------------------------------------------------------------------------------------------


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//   Відсортувати його за допомоги sort
/*
let getRandom = (n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(Math.round(Math.random() * 100));
    }
    return res
}
console.log(getRandom(10).sort((a, b) => a - b));
*/


//-----------------------------------------------------------------------------------------------------------------


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//   відфільтрувати його за допомоги filter, залишивши тільки парні числа (без 0!)
/*
let getRandom = (n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(Math.round(Math.random() * 100));
    }
    return res
}
console.log(getRandom(10).filter((item) => item % 2 === 0 && item !== 0));
*/


//-----------------------------------------------------------------------------------------------------------------


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
/*
let str = 'somebody once told me';
let capitalize = (str) => {
    let arr = str.split(' ');
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length));
    }
    return res.join(' ');
}
console.log(capitalize(str));
*/


//-----------------------------------------------------------------------------------------------------------------


// не зрозумів завдання

// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com


//-----------------------------------------------------------------------------------------------------------------


// - є масив
/*
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));
*/


//-----------------------------------------------------------------------------------------------------------------


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//   let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
/*
let count = (str, stringSearch) => {
    let res = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringSearch) {
            res.push(str[i]);
        }
    }
    return res.length;
}
console.log(count('hello world', 'l'));
*/


//-----------------------------------------------------------------------------------------------------------------


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
/*
let cutString = (str, n) => {
    let arr = str.split(' ').splice(0, n);
    let res = arr.join(' ');
    return res;
}
console.log(cutString('London is the capital of Great Britain', 3));
*/


//-----------------------------------------------------------------------------------------------------------------


// -створити масив книжок (назва, кількість сторінок, автори , жанри).


/*
let books = [
    {
        name: 'Murder on the Orient Express',
        pages: 256,
        authors: ['Agatha Christie'],
        genres: ['Crime novel']
    },
    {
        name: 'Just random book',
        pages: 123,
        authors: ['Jack Sparrow', 'Henry Morgan'],
        genres: ['fantasy', 'comedy', 'something else']
    },
    {
        name: 'Another random book',
        pages: 321,
        authors: ['Harry Potter', 'Tom Riddle'],
        genres: ['random genre']
    },
    {
        name: 'The Adventures of Tom Sawyer',
        pages: 216,
        authors: ['Mark Twain'],
        genres: ['Bildungsroman', 'picaresque novel', 'satire', 'folk', 'children\'s literature']
    },
    {
        name: 'Adventures of Huckleberry Finn',
        pages: 366,
        authors: ['Mark Twain'],
        genres: ['Picaresque novel']
    }
];
*/

// -знайти найбільшу книжку.
/*
let x = books.sort((a, b) => a.pages - b.pages);
let biggestBook = x[x.length - 1];
console.log(biggestBook);
*/

//-----------------------------------------------------------------------------------------------------------------

// - знайти книжку/ки з найбільшою кількістю жанрів
/*
let fn = books.sort((a, b) => a.genres.length - b.genres.length);
let largestListOfGenres =  fn[fn.length - 1];
console.log(largestListOfGenres);
*/

//-----------------------------------------------------------------------------------------------------------------

// - знайти книжку/ки з найдовшою назвою
/*
let fn = books.sort((a, b) => a.name.length - b.name.length);
let largestName = fn[fn.length - 1];
console.log(largestName);
*/

//-----------------------------------------------------------------------------------------------------------------

// - знайти книжку/ки які писали 2 автори
/*
let find2Authors = books.filter((item) => item.authors.length === 2)
console.log(find2Authors);
*/

//-----------------------------------------------------------------------------------------------------------------

// - знайти книжку/ки які писав 1 автор
/*
let only1Author = books.filter((item) => item.authors.length === 1);
console.log(only1Author);
*/

//-----------------------------------------------------------------------------------------------------------------

// - вісортувати книжки по кількості сторінок по зростанню
/*
let sort = books.sort((a, b) => a.pages - b.pages);
console.log(sort)
*/





