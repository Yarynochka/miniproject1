// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули


const arr=[];
const wrap = document.getElementById('wrap');
fetch (`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            const usersDiv = document.createElement('div');
            usersDiv.classList.add('users');
            usersDiv.innerHTML =` <h2> User id:${user.id}</h2> </br> <p> <b>Name:</b>${user.name}</p>`;
            wrap.append(usersDiv);

            const discoverKey='discover';
            localStorage.setItem(discoverKey,JSON.stringify([]));

            const btn = document.createElement('button');
            btn.setAttribute('class','btn');
            btn.innerHTML=`<a href="./userDetails.html" target="_blank">Discover more</a>`;
            usersDiv.append(btn);

            btn.onclick=()=>{
               const discMore= JSON.parse(localStorage.getItem(discoverKey)) || [];
               discMore.push(user);
               localStorage.setItem(discoverKey,JSON.stringify(discMore));


            }
        }

    })

















// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

