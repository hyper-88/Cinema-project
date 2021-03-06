/**
 * Это заглушки данных, которые мы как будто получили со стороннего сервиса
 * В списке фильмов есть новинки (3 фильма с полем filmNew:true)
 * а так же фильмы в прокате (все фильмы с полем filmHire:true)
 * их нужно будет рассортировать для таблицы и мозайки внизу
 *
 * Жанры заданы отдельным справочником. Здесь представлен несколько
 * отличающийся от лекции способ, но суть остается той же. Когда с
 * сервера приходят данные, по некоторым полям (например, как у нас genre)
 * приходят просто идентификаторы (числа). С помощью этих идентификаторов
 * можно получить текстовые представления, сделав другой запрос на сервер
 * к справочнику ( у нас это пока заглушка const genres );
 */

const mock = [
    {
        name: "Человек-паук",
        start: "10:00",
        genre: [0, 1, 2],
        filmHire: true,
        filmNew: true,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov1.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net"
    },
    {
        name: "Собачья жизнь 2",
        start: "12:00",
        genre: [3, 4, 5],
        filmHire: true,
        filmNew: true,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov2.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net"
    },
    {
        name: "История игрушек 4",
        start: "14:00",
        genre: [6, 3, 5],
        filmHire: true,
        filmNew: false,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net"
    },
    {
        name: "Люди в чёрном: Интернэшнл",
        start: "16:00",
        genre: [0, 1, 5],
        filmHire: true,
        filmNew: true,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov3.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net"
    }
];

//справочник жанров (шаг5) - так часто работают сервисы
const genres = [
    {
        id: 0,
        name: "фантастика"
    },
    {
        id: 1,
        name: "боевик"
    },
    {
        id: 2,
        name: "приключения"
    },
    {
        id: 3,
        name: "фэнтези"
    },
    {
        id: 4,
        name: "драма"
    },
    {
        id: 5,
        name: "комедия"
    },
    {
        id: 6,
        name: "мультфильм"
    }
];

//так делали на лекции. Более простой вариант
/*
const ganars = [
    'Фантастика', // 0
    'Боевик',     // 1
    'Фэнтези',    // 2
    'Драма',      // 3
    'Комедия',    // 4
    'Мультфильм'  // 5
  ]
*/

//массивы для хранения отсортированных данных
let filmsNew = [],
    filmsHire = [];

for (let i = 0; i < mock.length; i++) {
    let currentFilm = mock[i];

    if (currentFilm.filmHire) {
        filmsHire.push(currentFilm);
    }

    if (currentFilm.filmNew) {
        filmsNew.push(currentFilm);
    }
}

//объект-обертка для универсализации работы с данными
const film = {
    getName: function() {
        return this.name;
    },

    getStart: function() {
        return this.start;
    },

    // метод получения жанра шаг 6
    getGanre: function() {
        //хранит текущие идентификаторы жанров. Здесь тоже используется this!
        const ganarsIds = this.genre;

        //вспомогательный массив, который будет хранить текстовые описания жанров
        let arrGanars = [];

        //проходим по id шникам жанров
        for (let i = 0; i < ganarsIds.length; i++) {
            let currentId = ganarsIds[i];

            //так делали на лекции
            //arrGanars.push( genres[currentId] );

            //@see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
            let genreText = genres.find(
                //el содержит текущий элемент перебираемого массива genres
                function(el) {
                    //если условие выполняется, то возвращается проверяемый элемент
                    return el.id == currentId;
                }
            ).name; //элементом genres является объект справочника { id:..., name... }, на этом объекте
            // берем поле name и сохраняем как genreText;

            arrGanars.push(genreText); //добаляем полученный genreText во вспомогательный массив
        }

        //текстовое представление жанров
        //@see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        let strGanars = arrGanars.join(", ");
        return strGanars;
    },

    //шаг 7. Метод рендеринга одной строки таблицы
    renderFilmRow() {
        //console.warn(this); //this содержит проброшенный объект
        let filmName = this.name,
            filmStart = this.start,
            filmGanars = film.getGanre.apply(this),
            filmHTML = `
            <td>
                <input type="checkbox" class="block03__checkbox" id="block03__checkbox1">
                <label for="block03__checkbox1">
                  <i class="icon icon-check" title="check"></i>
                </label>
            </td>
            <td id="start_film_${1}">${filmStart}</td>
            <td id="name_film_${1}">${filmName}</td>
            <td id="ganar_film_${1}">${filmGanars}</td>
          `;
        return filmHTML;
    },

    //CA - вывод фильмов в мозайку
    renderFilmBlock() {
        let filmName = this.name,
            filmImage = this.image,
            filmDescription = this.description,
            filmFb = this.fb,
            filmTw = this.twitter,
            filmBh = this.behance,
            filmHTML = `
            <div class="block05__movie1">
                    <div class="block05__bg">
                        <img src="${filmImage}" alt="">
                    </div>
                    <div class="block05__descr">
                        <div class="block05__text2">${filmName}</div>
                        <div class="block05__sep"></div>
                        <div class="block05__text3">${filmDescription}</div>
                        <div class="block05__linls">
                            <a href="${filmTw}" target="_blank"><i class="icon icon-twitter" title="twitter"></i></a>
                            <a href="${filmFb}" target="_blank"><i class="icon icon-facebook" title="facebook"></i></a>
                            <a href="${filmBh}"><i class="icon icon-camera" title="camera"></i></a>
                        </div>
                    </div>
                </div>
          `;
        return filmHTML;
    }
};

//тестирование объекта-обертки (шаг 4), расомментируйте для проверки
//для проброса контекста используем apply
/**
console.log('В прокате:');
for( let i=0; i<filmsHire.length; i++ ) {
    let currentFilm = filmsHire[i];

    console.log( film.getName.apply(currentFilm) );
    console.log( film.getGanre.apply(currentFilm) );
}

console.log('Новинки:');
for( let i=0; i<filmsNew.length; i++ ) {
    let currentFilm = filmsNew[i];

    console.log( film.getName.apply(currentFilm) );
    console.log( film.getGanre.apply(currentFilm) );
}
**/

//протестируем метод рендеринга одной строки (шаг 7), раскомментируйте для проверки
//для проброса контекста используем bind, в отличие от apply метод не выполняется сразу
//требуется добавить скобки вызова функции на конце

/**
console.log("Отрендеренные строки с фильмом:");
for (let i = 0; i < filmsHire.length; i++) {
    let currentFilm = filmsHire[i];
    console.log( film.renderFilmRow.bind(currentFilm)() );
}
*/

//добавить фильмы в таблицу (шаг 9)
//в теге table таблицы с фильмами не забудьте прописать id="filmsHire" и удалить все строки, кроме заголовка

//получаем DOM элемент с таблицей
let tableDOM = document.getElementById("filmsHire");
for (let i = 0; i < filmsHire.length; i++) {
    let currentFilm = filmsHire[i],
        filmRowHTML = film.renderFilmRow.bind(currentFilm)(),
        tr = document.createElement("tr"); //содаем DOM элемент TR;
    tr.innerHTML = filmRowHTML; //записываем в DOM элемент HTML разметку
    tableDOM.appendChild(tr); //добавляем в DOM элемент таблицы DOM элемент строки с фильмом
}

//добавить фильмы в мозайку (CA)
//не забудьте подготовить разметку по аналогии
let mosaicDOM = document.getElementById("filmsNew"); // это flex контейнер, куда добавляются блоки
for (let i = 0; i < filmsNew.length; i++) {
    let currentFilm = filmsNew[i],
        filmBlockHTML = film.renderFilmBlock.bind(currentFilm)(),
        div = document.createElement("div"); //содаем DOM элемент DIV - контейнер одного фильма в мозайке

    // у вашего контейнера DIV, который держит один блок с фильмом есть какой то свой класс
    // поскольку этот контейнер мы создаем программно. То этот класс нужно будет так же
    //добавить программно
    div.classList.add("block05__movie1");
    div.innerHTML = filmBlockHTML; //записываем в DOM элемент HTML разметку
    mosaicDOM.appendChild(div); //добавляем в DOM элемент таблицы DOM элемент строки с фильмом
}

//то же, но с использованием только innerHTML
//в этом случае мы не создаем контейнеры программно. А просто записываем HTML разметку
//в свойство flex контейнера. Предварительно собирая ее в цикле

/**
let mosaicDOM = document.getElementById("filmsNew"), // это flex контейнер, куда добавляются блоки
    fullHTML = ''; //это полная строка HTML разметки со всеми фильмами, формируем в цикле
for (let i = 0; i < filmsNew.length; i++) {
    let currentFilm = filmsNew[i],
        filmBlockHTML = film.renderFilmBlock.bind(currentFilm)();
    fullHTML += '<div class="">'+filmBlockHTML+'</div>';
}
mosaicDOM.innerHTML = fullHTML;
*/