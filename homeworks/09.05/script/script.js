// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
/*
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arrOfUsers = []
let user1 = new User(1, 'Volodymyr', 'Zelenskyy', 'vovaze@gmail.com', '0984736436');
let user2 = new User(4, 'Joe', 'Biden', 'job@gmail.com', '0687216498');
let user3 = new User(5, 'Boris', 'Johnson', 'johnsonuk@gmail.com', '0986736476');
let user4 = new User(2, 'Sherlock', 'Holmes', 'bakers221@gmail.com', '0984736463');
let user5 = new User(3, 'Harry', 'Potter', 'lumusmaxima@gmail.com', '0984736465');
let user6 = new User(7, 'Taras', 'Shevchenko', 'notmoskal@gmail.com', '0984736424');
let user7 = new User(6, 'Ludvig', 'van Beethoven', 'tadadadam@gmail.com', '0984736475');
let user8 = new User(10, 'Hercule', 'Poirot', 'mustache@gmail.com', '0984736487');
let user9 = new User(8, 'Lionel', 'Messi', 'leftfoot@gmail.com', '0984736495');
let user10 = new User(9, 'Anonim', 'Anonimus', 'anon@gmail.com', '0984736462');
arrOfUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(arrOfUsers);
*/


//--------------------------------------------------------------------------------------------------------------------------

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати,
// залишивши тільки об'єкти з парними id (filter)
/*
console.log(arrOfUsers.filter((item) => item.id % 2 === 0));
*/

//--------------------------------------------------------------------------------------------------------------------------

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
/*
console.log(arrOfUsers.sort((a, b) => a.id - b.id));
*/


//--------------------------------------------------------------------------------------------------------------------------


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
/*
class Client  {
    constructor(id, userName, surname, email, phone, order) {
        this.id = id;
        this.userName = userName;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let client1 = new Client(1, 'Volodymyr', 'Zelenskyy', 'vovaze@gmail.com', '0984736436', ['milk']);
let client2 = new Client(4, 'Joe', 'Biden', 'job@gmail.com', '0687216498',['milk, bread, bagels, butter']);
let client3 = new Client(5, 'Boris', 'Johnson', 'johnsonuk@gmail.com', '0986736476',['milk, bread, bagels']);
let client4 = new Client(2, 'Sherlock', 'Holmes', 'bakers221@gmail.com', '0984736463',['milk, bread, butter, bagels, apples']);
let client5 = new Client(3, 'Harry', 'Potter', 'lumusmaxima@gmail.com', '0984736465',['milk, bread']);
let client6 = new Client(7, 'Taras', 'Shevchenko', 'notmoskal@gmail.com', '0984736424',['milk, bread, bagels']);
let client7 = new Client(6, 'Ludvig', 'van Beethoven', 'tadadadam@gmail.com', '0984736475',[]);
let client8 = new Client(10, 'Hercule', 'Poirot', 'mustache@gmail.com', '0984736487',['bread']);
let client9 = new Client(8, 'Lionel', 'Messi', 'leftfoot@gmail.com', '0984736495',['milk, bread, butter']);
let client10 = new Client(9, 'Anonim', 'Anonimus', 'anon@gmail.com', '0984736462',['milk, bread']);
let arrOfClients = [];
arrOfClients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(arrOfClients)
*/

//--------------------------------------------------------------------------------------------------------------------------

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його
// по кількості товарів в полі order по зростанню. (sort)
/*
console.log(arrOfClients.sort((a, b) => a.order.length - b.order.length));
*/


//--------------------------------------------------------------------------------------------------------------------------


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
/*
function Car (model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function (maxSpeed)  {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }
}
let car1 = new Car('rs6', 'Audi', 2022, 305, '4.0');
console.log(car1.drive());
*/

//--------------------------------------------------------------------------------------------------------------------------

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
/*
function Car (model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.info = function () {
        for (let key in this) {
            console.log(`${key} - ${this[key]}`);
        }
    }
}
let car1 = new Car('rs6', 'Audi', 2022, 305, '4.0');
car1.info();
*/

//--------------------------------------------------------------------------------------------------------------------------

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
/*
function Car (model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed + newSpeed;
    }
}
let car1 = new Car('rs6', 'Audi', 2022, 305, '4.0');
car1.increaseMaxSpeed(50);
console.log(car1);
*/

//--------------------------------------------------------------------------------------------------------------------------

// -- changeYear (newValue) - змінює рік випуску на значення newValue
/*
function Car (model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.changeYear = function (newValue) {
        return this.year = newValue;
    };
}
let car1 = new Car('rs6', 'Audi', 2022, 305, '4.0');
car1.changeYear(2020);
console.log(car1);
*/

//--------------------------------------------------------------------------------------------------------------------------

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car (model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
// }
// let car1 = new Car('rs6', 'Audi', 2022, 305, '4.0');
// let theDriver = {name: 'Jack', age: 33}
//


//--------------------------------------------------------------------------------------------------------------------------


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
/*
class Car  {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    }
}
let car1 = new Car('rs6', 'Audi', 2022, 305, '4.0');
console.log(car1.drive());
*/

//--------------------------------------------------------------------------------------------------------------------------

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
/*
class Car  {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    }
}
let car1 = new Car('rs6', 'Audi', 2022, 305, '4.0');
car1.info();
*/

//--------------------------------------------------------------------------------------------------------------------------

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
/*
class Car  {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed += newSpeed;
    }
}
let car1 = new Car('rs6', 'Audi', 2022, 305, '4.0');
car1.increaseMaxSpeed(20);
console.log(car1);
*/

//--------------------------------------------------------------------------------------------------------------------------

// -- changeYear (newValue) - змінює рік випуску на значення newValue
/*
class Car  {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    changeYear(newValue) {
        return this.year = newValue;
    }
}
let car1 = new Car('rs6', 'Audi', 2022, 305, '4.0');
car1.changeYear(2019);
console.log(car1);
*/

//--------------------------------------------------------------------------------------------------------------------------

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
/*
class Car  {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    addDriver (driver) {
        return this.driver = driver;
    }
}
let car1 = new Car('rs6', 'Audi', 2022, 305, '4.0');
let theDriver = {name: 'Jack', age: 33}
car1.addDriver(theDriver);
console.log(car1.driver);
*/


//--------------------------------------------------------------------------------------------------------------------------


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//  За допомоги циклу знайти яка попелюшка повинна бути з принцом.
/*
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let arrayOfCinderellas = [];
let cinderella1 = new Cinderella('Monica', 20, 36);
let cinderella2 = new Cinderella('Alice', 21, 35);
let cinderella3 = new Cinderella('Veronika', 24, 38);
let cinderella4 = new Cinderella('Alina', 27, 36);
let cinderella5 = new Cinderella('Marta', 23, 37);
let cinderella6 = new Cinderella('Tamara', 29, 39);
let cinderella7 = new Cinderella('Svitlana', 24, 35);
let cinderella8 = new Cinderella('Margaret', 22, 39);
let cinderella9 = new Cinderella('Marry', 19, 38);
let cinderella10 = new Cinderella('Bella', 26, 36);
arrayOfCinderellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);
class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
let prince = new Prince ('Ben', 30, 37)

let findCinderella = (cinderellas, prince) => {
    for (const cinderella of cinderellas) {
        if (cinderella.footSize === prince.shoeSize) {
            return cinderella;
        }
    }
}
console.log(findCinderella(arrayOfCinderellas, prince));
*/

//  Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

/*
let findCinderella = arrayOfCinderellas.find((item => item.footSize === prince.shoeSize));
console.log(findCinderella)
*/
