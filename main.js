
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
    .then(response => {

        if (response.ok) {

            return response.json();
        } else {

            throw new Error('Ошибка при получении данных');
        }
    })
    .then(users => {

        console.log(users);

        const usersList = document.getElementById('users');

        const fragment = document.createDocumentFragment();

        for (let user of users) {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.username}) - ${user.email} - ${user.phone} `;
            fragment.appendChild(li);
        }

        usersList.appendChild(fragment);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });


// Указываем URL API для получения случайной картинки собаки
const apiUrl2 = 'https://dog.ceo/api/breeds/image/random';

const imageContainer = document.getElementById('images');

let count = 0;

function drawDogImage() {
    fetch(apiUrl2)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Ошибка при получении данных');
            }
        })
        .then(data => {
            const imageUrl = data.message;
            const image = document.createElement('img');
            image.src = imageUrl;
            imageContainer.appendChild(image);
            count++;
            if (count < 10) {
                setTimeout(drawDogImage, 3000);
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}

// Вызываем функцию для начала отрисовки
drawDogImage();
