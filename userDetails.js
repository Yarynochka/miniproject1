// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

const discoverKey='discover';
const users= JSON.parse(localStorage.getItem(discoverKey)) || [];
const container = document.getElementById('container');
container.setAttribute('class', 'container');

users.forEach(user=> {

    const userDiv = document.createElement('div');
    userDiv.setAttribute('class', 'user');
    userDiv.innerHTML = ` <p> <b>ID:</b> ${user.id} <br> 
    Street: ${user.name} <br> 
    Username: ${user.username} <br> 
    email: ${user.email} <br> 
    Street: ${user.address.street} <br> 
    Suit: ${user.address.suit} <br> 
    City: ${user.address.city} <br> 
    Zipcode: ${user.address.zipcode} <br> 
    Geo Lat: ${user.address.geo.lat}  <br> 
    Geo Lng: ${user.address.geo.lng} <br> 
    Phone: ${user.phone} <br> 
    Website: ${user.website} <br> 
    Company: ${user.company.name} <br> 
    CatchPhrase: ${user.company.catchPhare} <br> 
    BS: ${user.company.bs} <br>  <\p>`;
    container.append(userDiv);


    const button = document.createElement('button');
    button.setAttribute('class','btn')
    button.innerText='Posts of current user';
    container.append(button);




    button.onclick=()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(value=>value.json())
            .then(posts => {

                const tittleContainer = document.createElement('div');
                tittleContainer.setAttribute('class','tittleContainer');
                container.append(tittleContainer);
             for (const post of posts){
                const postdiv = document.createElement('div');
                postdiv.setAttribute('class', 'postdiv');

                tittleContainer.append(postdiv);
                postdiv.innerHTML=`<b>Title: </b> ${post.title} \n`


                 const postDetailKey='details';
                 localStorage.setItem(postDetailKey,JSON.stringify([]));

                const detbtn = document.createElement('button');
                detbtn.setAttribute('class','detbtn');
                detbtn.innerHTML=`<a href="./postDetails.html" style="text-decoration:none"  target="_blank">More</a>`
                postdiv.append(detbtn);
                button.disabled = true;



                detbtn.onclick=()=>{
                    const postMore=JSON.parse(localStorage.getItem(postDetailKey)) || [];
                    postMore.push(post);
                    localStorage.setItem(postDetailKey,JSON.stringify(postMore));
                    console.log(postMore);
                }
                        }

            })
    }

})


