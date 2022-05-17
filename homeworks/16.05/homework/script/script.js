// Все робити за допомоги js.
//=================================================== TASK 1 =====================================================
/*
// - створити блок,
const box = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta
box.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
box.style.backgroundColor = '#bebebe';
box.style.height = '200px';
box.style.width = '200px';
box.style.margin = '10px'

// - додати цей блок в body.
document.body.appendChild(box);

// - клонувати його повністю, та додати клон в body.
const boxClone = box.cloneNode(true);
document.body.appendChild(boxClone);
*/


//=================================================== TASK 2 =====================================================


// - Є масив: ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву
// створює li та додає його до блоку .menu
// Завдання робити через цикли.
/*
const menu = document.getElementsByClassName('menu')[0];
const arr = ['Main', 'Products', 'About us', 'Contacts'];
for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}
*/


//=================================================== TASK 3 =====================================================


// - Є масив
/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
*/

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

/*
for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    document.body.appendChild(div);
    div.appendChild(ul);
    for (const key in item) {
        const li = document.createElement('li')
        li.innerText = `${key} - ${item[key]}`;
        ul.appendChild(li);
    }
    div.style.border = '1px solid #000';
    div.style.margin = '10px';
    div.style.width = '300px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
    div.style.fontSize = '20px';
    ul.style.listStyle = 'none';
    ul.style.padding = '0px';
}
*/


//=================================================== TASK 4 =====================================================


// - Є масив
/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
*/

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

/*
for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item');
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    const p = document.createElement('p');
    p.classList.add('description');

    document.body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);

    h1.innerText = item.title;
    p.innerText = item.monthDuration;

    div.style.display = 'flex';
    div.style.width = '200px'
    div.style.alignItems = 'center';
    div.style.justifyContent = 'space-between'
}
*/
