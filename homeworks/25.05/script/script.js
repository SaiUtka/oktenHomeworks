
//=================================================== TASK 1 =====================================================

// -створити форму з інпутами для name та age.
//  При відправці форми записати об'єкт в localstorage
/*
const form = document.task1;
const btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(`${form.name.value}, ${form.age.value}`);
    localStorage.setItem('user', `${form.name.value}, ${form.age.value}`);
});
*/


//=================================================== TASK 2 =====================================================

// -створити форму з інпутами для model,type та volume автівки.
//  при відправці форми об'єкти зберігаються в масиві в локальному сховищі.
/*
const form = document.task2;
const btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function (e) {
    e.preventDefault();
    let arr = [];
    arr.push(form.model.value, form.type.value, form.volume.value);
    localStorage.setItem('auto', JSON.stringify(arr));
});
*/
