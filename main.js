
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

        const usersList = document.getElementById('users-list');

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