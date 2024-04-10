import React, { Component } from 'react';
import $ from 'jquery';

function handleClick () {
    var title = $('#title').val();
    var author = $('#author').val();
    var genre = $('#genre').val();
    var pageCount = $('#pageCount').val();
    var reviews = $('#reviews').val();

   
    var savedInfoHTML = `
        <p><strong>Название книги:</strong> ${title}</p>
        <p><strong>Автор:</strong> ${author}</p>
        <p><strong>Жанр:</strong> ${genre}</p>
        <p><strong>Количество страниц:</strong> ${pageCount}</p>
        <p><strong>Рецензии:</strong> ${reviews}</p>
    `;
    $('#savedInfo').html(savedInfoHTML);
}
class FavBookComp extends Component {
   
    render() {
        return (
            <div>
        <h1>Информация о книге Component</h1>
        <label>
            Название книги:
            <input type="text" id="title" />
        </label>
        <br></br>
        <label>
            Автор:
            <input type="text" id="author" />
        </label>
        <br></br>
        <label>
            Жанр:
            <input type="text" id="genre" />
        </label>
        <br></br>
        <label>
            Количество страниц:
            <input type="number" id="pageCount" />
        </label>
        <br></br>
        <h2>Рецензии:</h2>
        <textarea id="reviews"></textarea>
        <button id="saveButton" onClick={handleClick}>Сохранить</button>
        <div id="savedInfo">
            <h2>Информация о сохраненной книге:</h2>
        </div>
    </div>
        );
    }
}

export default FavBookComp;
