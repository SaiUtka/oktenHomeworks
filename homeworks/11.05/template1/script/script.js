// - Напишіть код,  котрий :

// ======================================================== TASK 1 ========================================================

// -- отримує текст з параграфа з id "content"
/*
const text = document.getElementById('content').textContent
console.log(text);
*/


// ======================================================== TASK 2 ========================================================

// -- отримує текст з блоку з id "rules"
/*
const text = document.getElementById('rules').textContent;
console.log(text);
*/


// ======================================================== TASK 3 ========================================================

// -- замініть текст параграфа з id 'content' на будь-який інший
/*
let text = document.getElementById('content');
text.innerText = 'It is my own text';
*/


// ======================================================== TASK 4 ========================================================

// -- замініть текст параграфа з id 'rules' на будь-який інший
/*
let rules = document.getElementById('rules');
rules.innerText = 'The coconut nut is not a nut';
*/


// ======================================================== TASK 5 ========================================================

// -- змініть кожному елементу колір фону на червоний
/*
let par = document.getElementById('content');
let rules = document.getElementById('rules');
let fcRules = document.getElementsByClassName('fc_rules');
par.style.backgroundColor = '#ff0000';
rules.style.backgroundColor = '#ff0000';
for (const fcRule of fcRules) {
    fcRule.style.backgroundColor = '#ff0000';
}
*/


// ======================================================== TASK 6 ========================================================

// -- змініть кожному елементу колір тексту на синій
/*
let par = document.getElementById('content');
let rules = document.getElementById('rules');
let fcRules = document.getElementsByClassName('fc_rules');
par.style.color = '#0033ff';
rules.style.color = '#0033ff';
for (const fcRule of fcRules) {
    fcRule.style.color = '#0033ff';
}
*/


// ======================================================== TASK 7 ========================================================

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
/*
let rulesList = document.getElementById('rules');
console.log(rulesList.classList);
*/


// ======================================================== TASK 8 ========================================================

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
/*
let fcRules = document.getElementsByClassName('fc_rules');
for (const fcRule of fcRules) {
    fcRule.style.color = 'red';
}
*/
