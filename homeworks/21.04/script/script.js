// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


/*for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello</div>`)
}*/

//------------------------------------------------------------------------------------------------------------------

/*for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello ${i}</div>`)
}*/

//------------------------------------------------------------------------------------------------------------------

/*let i = 0
while (i < 10) {
    document.write(`<h1>Hello</h1>`)
    i++
}*/

//------------------------------------------------------------------------------------------------------------------

/*let i = 0
while (i < 10) {
    document.write(`<h1>Hello ${i}</h1>`)
    i++
}*/


//------------------------------------------------------------------------------------------------------------------


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:


/*let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)

for (let i = 0; i < listOfItems.length; i++) {
    let item = listOfItems[i]
    document.write(`<li>${item}</li>`)
}

document.write(`</ul>`)*/


//------------------------------------------------------------------------------------------------------------------


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон


/*let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


document.write(`<ul>`)

for (const product of products) {
    document.write(` <div class="product-card">
        <h3 class="product-title">${product.title}. ${product.price}</h3>
        <img src="${product.image}" alt="image" class="product-image">
</div>`)
}

document.write(`<ul/>`)*/


