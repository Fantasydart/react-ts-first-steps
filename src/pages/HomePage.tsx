import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h1>Это мой первый тестовый проект на React+TypeScript</h1>
            <p>Данный проект очень прост, вы можете пройти в два раздела, там реализованы списки с данными,<br/>
            которые мы стягиваем с <a href="jsonplaceholder.typicode.com">jsonplaceholder.typicode.com</a>.<br/><br/></p>
            Проект выполнен в классическом для SPA стиле, разве что я не делал layout и сильно не декомпозировал проект.
        </div>
    );
};

export default HomePage;