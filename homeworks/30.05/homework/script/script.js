
//=================================================== TASK 1 =====================================================

// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередині div.post
// https://jsonplaceholder.typicode.com/posts

/*
let posts = document.getElementById('posts');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(postList => {
        for (const post of postList) {
            let postDiv = document.createElement('div');
            posts.appendChild(postDiv);
            postDiv.classList.add('post');

            let postUserId = document.createElement('div');
            postUserId.innerText = `userId : ${post.userId}`;
            postUserId.classList.add('post_user-id');

            let id = document.createElement('div');
            id.innerText = `id : ${post.id}`
            id.classList.add('post_id');

            let title = document.createElement('div');
            title.innerText = post.title;
            title.classList.add('post_title');

            let postBody = document.createElement('div');
            postBody.innerText = post.body;
            postDiv.classList.add('post_body');

            postDiv.append(postUserId, id, title, postBody);
        }
    })
*/


//=================================================== TASK 2 =====================================================

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередині div.comment
// https://jsonplaceholder.typicode.com/comments

/*
let commentsDiv = document.getElementById('comments');
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentsDiv.appendChild(commentDiv);

            let commentPostId = document.createElement('div');
            commentPostId.innerText = comment.postId;
            commentPostId.classList.add('comment_post-id');

            let commentId = document.createElement('div');
            commentId.innerText = comment.id;
            commentId.classList.add('comment_id');

            let commentName = document.createElement('div');
            commentName.innerText = comment.name;
            commentName.classList.add('comment_name');

            let commentEmail = document.createElement('div');
            commentEmail.innerText = comment.email;
            commentEmail.classList.add('comment_email');

            let commentBody = document.createElement('div');
            commentBody.innerText = comment.body;
            commentBody.classList.add('comment_body');

            commentDiv.append(commentPostId, commentId, commentName, commentEmail, commentBody)
        }

        console.log(comments[0]);
    });
*/

