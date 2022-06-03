
const postDiv = document.getElementById('post');
const comments = document.getElementById('comments')
const post = JSON.parse(localStorage.getItem('post'));

const userId = document.createElement('div');
userId.innerHTML = `<h2>UserID</h2> <h3>${post.userId}</h3>`;

const id = document.createElement('div');
id.innerHTML = `<h2>ID</h2> <h3>${post.id}</h3>`;

const title = document.createElement('div');
title.innerHTML = `<h2>title</h2> <h3>${post.title}</h3>`;

const body = document.createElement('div');
body.innerHTML = `<h2>body</h2> <h3>${post.body}</h3>`;

postDiv.append(userId, id, title, body);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comment => {
        for (const item of comment) {
            const comm = document.createElement('div');
            comm.classList.add('comment');
            const postId = document.createElement('div');
            postId.innerHTML = `<h3>postID</h3> <h4>${item.postId}</h4>`;
            const commentId= document.createElement('div');
            commentId.innerHTML = `<h3>ID</h3> <h4>${item.id}</h4>`;
            const commentName = document.createElement('div');
            commentName.innerHTML = `<h3>name</h3> <h4>${item.name}</h4>`;
            const commentEmail = document.createElement('div');
            commentEmail.innerHTML = `<h3>email</h3> <h4>${item.email}</h4>`;
            const commentBody = document.createElement('div');
            commentBody.innerHTML = `<h3>body</h3> <h4>${item.body}</h4>`;

            comm.append(postId, commentId, commentName, commentEmail, commentBody);
            comments.append(comm);

        }
    });