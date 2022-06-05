// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации
//https://jsonplaceholder.typicode.com/posts/POST_ID/comments

const postDetailKey='details';
const posts = JSON.parse(localStorage.getItem(postDetailKey)) || [];
console.log(posts);

const wrap=document.getElementById('wrap');

posts.forEach(post =>{
    const container = document.createElement('div');
    container.setAttribute('class','container');
    container.innerHTML=`<p> <b>Comments to post</b> <br>
<b>UserId:</b> ${post.userId} <br>
    <b>id:</b> ${post.id} <br>
    <b>Title</b> ${post.title} <br>
    <b>Body:</b> ${post.body} <br> </p>`;
    wrap.append(container);

    fetch(`https:jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then( value => value.json())
    .then(comments => {
        const commentsDiv = document.createElement('div');
        commentsDiv.setAttribute('class','commentsDiv');
        wrap.append(commentsDiv);
        for (const comment of comments) {
            const commentDiv = document.createElement('div');
            commentDiv.setAttribute('class','commentDiv');

            commentDiv.innerHTML=`<p> 
            <b>Comment post Id:</b> ${comment.postId}<br>
            <b>Comment id:</b> ${comment.id}<br>
            <b>Comment name:</b> ${comment.name}<br>
            <b>Comment email:</b> ${comment.email}<br>
            <b>Comments body:</b> ${comment.body}<br> </p>`
            commentsDiv.append(commentDiv);
        }

    } )

    }
)

// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки