<img src="https://user-images.githubusercontent.com/61308457/169059681-00f31290-6cc8-4bb9-b372-cc24d096643b.svg" />

<div align="center">
  <img src="https://img.shields.io/badge/-React-202124?logo=react&logoColor=61DAFB&style=flat-square" />
  <img src="https://img.shields.io/badge/JavaScript-202124?style=flat-square&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.JS-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-464646?style=flat-square&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=nginx&logoColor=white" />
</div>

<h3 align="center">
  <a href="#about">О проекте</a>
  •
  <a href="#techs">Технологии</a>
  •
  <a href="#functionality">Функциональность</a>
  •
  <a href="#install">Установка</a>
</h3>

<h4 align=center>Сервис по поиску фильмов с возможностью сохранять понравившиеся в личном кабинете.
</h4>

<h3 align="center">
  <a href="#" title="Link">Demo<ruby>&nbsp;<rt>Скоро</rt></ruby></a> 
  •
  <a href="#">GitHubPages<ruby>&nbsp;<rt>Скоро</rt></ruby></a>
  •
  <a href="https://github.com/deniloss/movies-explorer-api">Backend</a>
</h3>

<h1 id="about">О проекте</h1>
<table>
  <tbody>
    <tr>
      <td>
        <p align="center"><b>Выполнен в качестве дипломной работы в рамках курса Веб-разработки от Яндекс.Практикум. </b><p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Проект представляет собой сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;Работа над проектом включала 5 этапов: составление плана, работу над <a href="https://github.com/deniloss/movies-explorer-api">бэкендом</a>, вёрстку, добавление функциональности и финальные доработки.</p>
        &nbsp;&nbsp;&nbsp;&nbsp;У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
      </td>
      <td width="60%"><img src="https://user-images.githubusercontent.com/61308457/168448245-8d99008c-1cc2-4ad5-b1a7-a336c71f8c26.gif"/></td>
    </tr>
  </tbody>
</table>

<h1 id="techs">Технологии</h1>
<ul>
  <li>React</li>
  <li>JavaScript</li>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>React Router</li>
  <li>React Context</li>
  <li>LocalStorage</li>
  <li>Cookie</li>
</ul>
<h1 id="functionality">Функциональность</h1>
<ul>
  <li>Поиск фильмов по названию с фильтрацией по длительности;</li>
  <li>Сохранение/удаление понравившихся фильмов;</li>
  <li>Регистрация/авторизация пользователей;</li>
  <li>Редактирование профиля;</li>
  <li>Валидация форм, как на стороне клиента, так и сервера;</li>
  <li>Отзывчивая верстка, адаптированная под различные разрешения экрана;</li>
  <li>Защита роутов авторизацией;</li>
  <li>Ограничение числа запросов  с одного IP в единицу времени;</li>
  <li>Бережное хранение паролей в виде хэша;</li>
  <li>Идетентификация по JWT через httpOnly Cookie;</li>
  <li>Централизованная обработка ошибок.</li>
</ul>
<h1 id="install">Установка</h1>
<ol>
<li>
  <p>Создаем рабочую директорию с произвольным именем (например dev):</p>
<pre>
mkdir <имя рабочей директории>
</pre>
</li>
<li>
  <p>Клонируем репозиторий в рабочую директорию:</p>
  <ul>
  <li>
    <p>Переходим в рабочую директорию:</p>
<pre>
cd <имя рабочей директории>
</pre>
  </li>
  <li>
    <p>Клонируем репо:</p>
<pre>
git clone https://github.com/deniloss/movies-explorer-frontend.git
</pre>
  </li>
    <li>
      В рабочей директории должна появиться папка проекта <code>movies-explorer-frontend</code>
    </li>
  </ul>
</li>
<li>
  <p>Переходим в папку с проектом:</p>
<pre>
cd movies-explorer-frontend
</pre>
</li>
<li>
  <p>Устанавливаем зависимости:</p>
<pre>
npm install
</pre>
</li>
<li>
  <p>Запускаем проект:</p>
<pre>
npm start
</pre>
</li>
</ol>
