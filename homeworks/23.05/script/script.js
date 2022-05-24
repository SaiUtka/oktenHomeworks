
//=================================================== TASK 1 =====================================================

// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
/*
const div = document.getElementById('text');
const btn = document.getElementsByClassName('btn')[0];
btn.addEventListener('click', function () {
    div.style.visibility = 'hidden';
});
*/


//=================================================== TASK 2 =====================================================

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити
// вік чи менше він ніж 18, та повідомити про це користувача
/*
const btn = document.getElementsByClassName('confirm')[0];
document.forms.form.onsubmit = function (e) {
    e.preventDefault();
};
btn.addEventListener('click', function () {
    let val = document.getElementsByTagName('input')[0].value;
    if (val >= 18) {
        alert('u r 18+')
    } else if (val < 18 && val > 0) {
        alert('u r not 18+');
    } else {
        alert('it is not age');
    }
});
*/


//=================================================== TASK 3 =====================================================

// - створити 2 форми по 2 інпути в кожній.
// створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже, дайте формі та інпутам всі необхідні атрибути.
/*
const btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function () {
    console.log(document.form1.input1.value);
    console.log(document.form1.input2.value);
    console.log(document.form2.input3.value);
    console.log(document.form2.input4.value);
});
*/


//=================================================== TASK 4 =====================================================

// - Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
/*
const btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function () {
    let quantityOfStrings = document.getElementsByClassName('strings')[0].value;
    let quantityOfBoxes = document.getElementsByClassName('boxes')[0].value;
    let info = document.getElementsByClassName('info')[0].value;
    for (let i = 0; i < quantityOfStrings; i++) {
        let row = document.createElement('div');
        document.body.append(row);
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.border = '1px solid darkblue';
        row.style.width = '100%'
        row.style.height = '70px'
        row.style.marginTop = '10px';
        row.style.alignItems = 'center';

        for (let j = 0; j < quantityOfBoxes; j++) {
            let box = document.createElement('div');
            box.innerText = info;
            row.append(box);
            box.style.borderRight = '1px solid darkblue';
            box.style.borderLeft = '1px solid darkblue';
            box.style.padding = '10px';
            box.style.height = '100%';
            box.style.boxSizing = 'border-box';
            box.style.display = 'flex';
            box.style.alignItems = 'center';
            box.style.justifyContent = 'center';
            box.style.width = `calc(100% / ${quantityOfBoxes})`;
        }
    }
});
*/
