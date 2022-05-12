//Напишіть код, який :
// ======================================================== TASK 1 ========================================================

// a) додає клас з назвою групи, елементу з ід main_header
/*
let mainHeader = document.getElementById('main_header');
mainHeader.classList.add('march-2022');
*/


// ======================================================== TASK 2 ========================================================

// b) робить шириниу елементу ul 400px
/*
let list = document.getElementsByTagName('ul');
for (let item of list) {
    item.style.width = '400px';
}
*/


// ======================================================== TASK 3 ========================================================

// c) робить шириниу всіх елементів з класом linkList шириною 50%
/*
let linkList = document.getElementsByClassName('linkList');
for (const item of linkList) {
    item.style.width = '50%';
}
*/


// ======================================================== TASK 4 ========================================================

// d) отримує текст який зберігається в елементі з класом listElement2
/*
const text = document.querySelector('.listElement2').textContent;
console.log(text);
*/


// ======================================================== TASK 5 ========================================================

// e) отримує всі елементи li та змінює ім колір фону на сірий
/*
let li = document.getElementsByTagName('li');
for (const item of li) {
    item.style.backgroundColor = 'grey';
}
*/


// ======================================================== TASK 6 ========================================================

// f) отримує всі елементи 'a' та додає їм клас anchor
/*
let links = document.getElementsByTagName('a');
for (const link of links) {
    link.classList.add('anchor');
}
*/


// ======================================================== TASK 7 ========================================================

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//     змінює йому розмір тексту на 40 пікселів
/*
let links = document.getElementsByTagName('a');
for (const link of links) {
    if (link.textContent === 'link3'){
        link.style.fontSize = '40px';
    }
}
*/


// ======================================================== TASK 8 ========================================================

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
/*
let links = document.getElementsByTagName('a');
for (const link of links) {
    let content = link.textContent;
    link.classList.add(`element_${content}`);
}
*/


// ======================================================== TASK 9 ========================================================

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/*
let subHeader = document.getElementsByClassName('sub-header');
let color = prompt('color?');
for (const item of subHeader) {
    item.style.backgroundColor = color;
}
*/


// ======================================================== TASK 10 ========================================================

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.
//     Колір отримати з prompt()
/*
let subHeader = document.getElementsByClassName('sub-header');
for (const item of subHeader) {
    if (item.textContent === 'content 2 segment'){
        item.style.color = prompt('text color?');
    }
}
*/


// ======================================================== TASK 11 ========================================================

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
/*
let content1 = document.getElementsByClassName('content_1');
let text = prompt('write something');
for (let item of content1) {
    item.innerText = text;
}
*/


// ======================================================== TASK 12 ========================================================

// l) отримати елементи p та змінити їм padding на 20px
/*
let pars = document.getElementsByTagName('p');
for (let par of pars) {
    par.style.padding = '20px';
}
*/


// ======================================================== TASK 13 ========================================================

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
/*
let text2 = document.getElementsByClassName('text2');
for (const item of text2) {
    item.innerText = 'march-2022';
}
*/
