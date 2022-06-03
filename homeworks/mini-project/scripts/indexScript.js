// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход
// на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

let usersDiv = document.getElementById('users');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            usersDiv.appendChild(userDiv);

            let id = document.createElement('h2');
            id.classList.add('user_id');
            id.innerText = `id : ${user.id}`;

            let name = document.createElement('h2');
            name.classList.add('user_name');
            name.innerText = `name : ${user.name}`;

            let userItemDiv = document.createElement('div');
            userItemDiv.classList.add('user_items');
            userItemDiv.append(id, name);


            let btn = document.createElement('a');
            btn.innerText = 'info'
            btn.classList.add('user_btn');
            btn.href = 'user-details.html';

            userDiv.append(userItemDiv, btn);

            btn.addEventListener('click', function () {
                localStorage.setItem('user', JSON.stringify(user))
            });
        }
    })


