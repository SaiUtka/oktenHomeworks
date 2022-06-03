
let info = document.getElementById('info');
let user = JSON.parse(localStorage.getItem('user'));

const userDiv = document.createElement('div');
userDiv.classList.add('user');
info.append(userDiv);

const btn = document.createElement('button');
btn.innerText = `post of current user`
btn.classList.add('btn');

const content = document.createElement('div');
content.classList.add('content');
const userItems = document.createElement('div');
userItems.classList.add('user_items');
content.append(userItems)
userDiv.append(content, btn);

const id = document.createElement('div');
id.innerText = `id - ${user.id}`;
const name = document.createElement('div');
name.innerText = `name - ${user.name}`;
const username = document.createElement('div');
username.innerText = `username - ${user.username}`;
const email = document.createElement('div');
email.innerText = `email - ${user.email}`;
const address = document.createElement('div');
address.classList.add('user_address')
address.innerText = `address:`;
const street = document.createElement('div');
street.innerText = `street - ${user.address.street}`;
const suite = document.createElement('div');
suite.innerText = `suite - ${user.address.suite}`;
const city = document.createElement('div');
city.innerText = `city - ${user.address.city}`;
const zipCode = document.createElement('div');
zipCode.innerText = `zipcode - ${user.address.zipcode}`;
const geo = document.createElement('div');
geo.classList.add('address_geo');
geo.innerText = 'geo:';
const lat = document.createElement('div');
lat.innerText = `lat:  ${user.address.geo.lat}`;
const lng = document.createElement('div');
lng.innerText = `lng:  ${user.address.geo.lng}`;
geo.append(lat, lng);
address.append(street, suite, city, zipCode, geo);
const phone = document.createElement('div');
phone.innerText = `phone - ${user.phone}`;
const website = document.createElement('div');
website.innerText = `website - ${user.website}`;
const company = document.createElement('div');
company.classList.add('user_company');
company.innerText = `company:`;
const companyName = document.createElement('div');
companyName.innerText = `name - ${user.company.name}`;
const catchPhrase = document.createElement('div');
catchPhrase.innerText = `catchphrase - ${user.company.catchPhrase}`;
const bs = document.createElement('div');
bs.innerText = `bs - ${user.company.bs}`;
company.append(companyName, catchPhrase, bs);
userItems.append(id, name, username, email, address, phone, website, company)

btn.addEventListener('click', function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('user_posts');

            for (const post of posts) {
                const userPost = document.createElement('div');
                userPost.innerText = post.title;
                const postBtn = document.createElement('a');
                postBtn.innerText = 'details of post';
                postBtn.href = 'post-details.html';
                userPost.append(postBtn);
                postDiv.append(userPost);
                postBtn.addEventListener('click', function () {
                    localStorage.setItem('post', JSON.stringify(post));
                });
            }
            btn.disabled = true
            content.append(postDiv);
        })

});

