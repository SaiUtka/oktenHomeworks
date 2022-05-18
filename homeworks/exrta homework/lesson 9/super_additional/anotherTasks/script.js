
/*
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Wolshtyn', country: 'Poland', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
*/


//=================================================== TASK 1 =====================================================


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
/*
let res = [];
for (const user of users) {
    res.push(user.address);
}
console.log(res);
*/


//=================================================== TASK 2 =====================================================


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
/*
for (const user of users) {
    const div = document.createElement('div');
    const name = document.createElement('h2');
    name.innerText = user.name;
    const age = document.createElement('h2');
    age.innerText = user.age;
    const status = document.createElement('h2');
    status.innerText = user.status;
    const city = document.createElement('p');
    city.innerText = user.address.city;
    const country = document.createElement('p');
    country.innerText = user.address.country;
    const street = document.createElement('p');
    street.innerText = user.address.street;
    const number = document.createElement('p');
    number.innerText = user.address.houseNumber;

    div.append(name, age, status, city, country, street, number);
    document.body.appendChild(div);

    //styles
    div.style.width = '300px'
    div.style.border = '2px solid darkblue';
    div.style.textAlign = 'center';
    div.style.marginBottom = '20px';

}
*/


//=================================================== TASK 3 =====================================================


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам, блок з адресою зробити окремим блоком, з блоками для кожної властивості

//Обʼєднав 2 завдання, бо вони подібні

/*
for (const user of users) {
    const userDiv = document.createElement('div');
    const name = document.createElement('div');
    name.innerText = user.name;
    const age = document.createElement('div');
    age.innerText = user.age;
    const status = document.createElement('div');
    status.innerText = user.status;
    const address = document.createElement('div');
    const city = document.createElement('div');
    city.innerText = user.address.city;
    const country = document.createElement('div');
    country.innerText = user.address.country;
    const street = document.createElement('div');
    street.innerText = user.address.street;
    const number = document.createElement('div');
    number.innerText = user.address.houseNumber;

    document.body.appendChild(userDiv);
    userDiv.append(name, age, status, address);
    address.append(city, country, street, number);

    //styles
    document.body.style.display = 'flex';
    document.body.style.flexWrap = 'wrap';

    userDiv.style.display = 'flex';
    userDiv.style.flexDirection = 'column';
    userDiv.style.rowGap = '10px';
    userDiv.style.margin = '20px';
    userDiv.style.width = '300px';
    userDiv.style.border = '2px solid darkblue';
    userDiv.style.alignItems = 'center';
    userDiv.style.padding = '20px';

    name.style.border = '1px solid darkblue';
    name.style.padding = '5px';
    name.style.width = '100%'
    name.style.textAlign = 'center'

    age.style.border = '1px solid darkblue';
    age.style.padding = '5px';
    age.style.width = '100%'
    age.style.textAlign = 'center'

    status.style.border = '1px solid darkblue';
    status.style.padding = '5px';
    status.style.width = '100%'
    status.style.textAlign = 'center'


    address.style.display = 'flex';
    address.style.columnGap = '10px';
    address.style.border = '1px solid darkblue';
    address.style.padding = '5px';
    address.style.width = '100%'
    address.style.justifyContent = 'center'

    city.style.border = '1px solid darkblue';
    city.style.padding = '5px';

    country.style.border = '1px solid darkblue';
    country.style.padding = '5px';

    street.style.border = '1px solid darkblue';
    street.style.padding = '5px';

    number.style.border = '1px solid darkblue';
    number.style.padding = '5px';


}
*/


//=================================================== TASK 4 =====================================================


// -Є масив котрий характеризує правила.
/*
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
*/

// Створити скрипт який ітерує цей масив,
// та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
/*
for (const rule of rules) {
    const ruleDiv = document.createElement('div');
    const tittle = document.createElement('h2');
    tittle.innerText = rule.title;
    const body = document.createElement('p');
    body.innerText = rule.body;

    document.body.appendChild(ruleDiv);
    ruleDiv.append(tittle, body);
}
*/



