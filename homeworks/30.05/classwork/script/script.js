

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let postsDiv = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        for (let i = 0, k = 1; i < posts.length, k <= 10; i += 10, k++) {
            let btn = document.createElement('button');
            postsDiv.appendChild(btn);
            btn.classList.add('btn')
            btn.innerText = `id : ${k}`

            let postDiv = document.createElement('div');
            postsDiv.appendChild(postDiv);
            postDiv.classList.add('post_body', 'none')
            btn.addEventListener('click', function () {
                postDiv.classList.toggle('none')
            })

            function x(item) {
                for (let j = item; j < item + 10; j++) {
                    let post = document.createElement('div');
                    postDiv.appendChild(post);
                    post.classList.add('post')
                    post.innerText = `${j + 1} - ${posts[j].body}`;
                }
            }

            x(i);
        }
    });
