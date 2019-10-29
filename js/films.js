const genres = [
    'фантастика',
    'боевик',       //1
    'приключения',
    'фэнтези',      //3
    'драмма',
    'комедия',      //5
    'мультфильм']

films = [
    film1 = {
        name: 'Человек-паук',
        start: '10:00',
        genre: [0, 1, 2],
        hire: true,
        new: false,
        price: 250,
        description: 'More about selling in the Envato Marketplaces'
    },
    film2 = {
        name: 'Собачья жизнь 2',
        start: '12:00',
        genre: [2, 4, 5],
        hire: true,
        new: false,
        price: 250,
        description: 'More about selling in the Envato Marketplaces'
    },
    film3 = {
        name: 'История игрушек 4',
        start: '14:00',
        genre: [2, 5, 6],
        hire: true,
        new: false,
        price: 200,
        description: 'More about selling in the Envato Marketplaces'
    },
    film4 = {
        name: 'Люди в черном: Интернэшнл',
        start: '16:00',
        genre: [0, 1, 2],
        hire: true,
        new: false,
        price: 350,
        description: 'More about selling in the Envato Marketplaces'
    },
    film5 = {
        name: 'Люди в черном 3',
        start: '',
        genre: [0, 1, 2],
        hire: false,
        new: true,
        price: 350,
        description: 'More about selling in the Envato Marketplaces'
    },
    film6 = {
        name: 'Человек-паук 3',
        start: '10:00',
        genre: [0, 1, 2],
        hire: false,
        new: false,
        price: 450,
        description: 'More about selling in the Envato Marketplaces'
    },
    film7 = {
        name: 'Собачья жизнь 3',
        start: '12:00',
        genre: [2, 4, 5],
        hire: false,
        new: false,
        price: 250,
        description: 'More about selling in the Envato Marketplaces'
    },
]

let films_hire = [];
let films_new = [];

for (let i = 0; i < films.length; i++) {
    if (films[i].hire === true) {
        films_hire.push(films[i])
    }
    if (films[i].hire === false && films[i].new === true) {
        films_new.push(films[i])
    }
}

const film = {
    getName: function () {
        return this.name
    },
    getStart: function () {
        return this.start
    },
    getGenre: function () {
        const genres_films = this.genre
        let arr_genres = []
        for (let i = 0; i < genres_films.length; i++) {
            arr_genres.push(genres[genres_films[i]])
        }
        let str_genres = arr_genres.join(', ')
        return str_genres
    },
    getPrice: function () {
        return this.price
    }
}

let booking_window = document.getElementById('block-08');
let close_booking_window = document.getElementById('block-08__close-booking-window');


close_booking_window.onclick = function () {
    booking_window.style.display = 'none'
}

for (let i = 0; i < films_hire.length; i++) {
    const film_name = film.getName.bind(films_hire[i])()
    const film_start = film.getStart.bind(films_hire[i])()
    const film_genre = film.getGenre.bind(films_hire[i])()
    const film_price = film.getPrice.bind(films_hire[i])()
    let films_hireHTML = document.getElementById('films_hire')

    let film_HTML = `
        <td id="start_film_${1}" class="block-03__table_centr">${film_start}</td>
        <td id="name_film_${1}">${film_name}</td>
        <td id="genre_film_${1}">${film_genre}</td>
        <td id="price_film_${1}" title="рублей" class="block-03__table_centr">${film_price}</td>
        <td><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 34 34">
            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                d="M16.505,32.994 C7.393,32.994 0.005,25.606 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.606 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.778 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z" />
        </svg>
        </td>
        `

    let tr = document.createElement("tr")
    tr.innerHTML = film_HTML

    tr.onclick = function () {
        booking_window.style.display = 'block'

        let booking_film_name = document.getElementById('block-08__film-name');
        let booking_film_start = document.getElementById('block-08__film-start');
        let booking_film_genre = document.getElementById('block-08__film-genre');
        let booking_film_price = document.getElementById('block-08__film-price');

        booking_film_name.innerHTML = film_name
        booking_film_start.innerHTML = film_start
        booking_film_genre.innerHTML = film_genre
        booking_film_price.innerHTML = film_price

        let booking_film_value = document.getElementById('block-08__film-value');
        let booking_total_price = document.getElementById('block-08__total-price');

        booking_total_price.innerHTML = film_price * booking_film_value.value;

        booking_film_value.onchange = function () {
            booking_total_price.innerHTML = film_price * booking_film_value.value
        }
    }

    films_hireHTML.appendChild(tr)

    //Вывод заказа (запуск ниже)
    function cons() {
        console.group('Ваш заказ:')
        console.log(film_name)
        console.log(film_start)
        console.groupEnd
    }
}

let inp = document.querySelector('#block-08__client-phone');

let button_book = document.getElementById('block-08__book');
button_book.onclick = function () {
    let booking_client_name = document.getElementById('block-08__client-name');
    let booking_client_phone = document.getElementById('block-08__client-phone');

    // Плагин для проверки номера телефона
    inp.addEventListener('focus', _ => {
        // Если там ничего нет или есть, но левое
        if (!/^\+\d*$/.test(inp.value))
            // То вставляем знак плюса как значение
            inp.value = '+';
    });

    inp.addEventListener('keypress', e => {
        // Отменяем ввод не цифр
        if (!/\d/.test(e.key))
            e.preventDefault();
    });

    if (booking_client_name.value) {
        booking_client_name.style.border = '0.1rem solid #bebebe'
    } else {
        booking_client_name.style.border = '0.1rem solid red'
    }

    if (booking_client_phone.value.length == 13) {
        booking_client_phone.style.border = '0.1rem solid #bebebe'
    } else {
        booking_client_phone.style.border = '0.1rem solid red'
    }
    //console.log(booking_client_phone.value.length)
    if (booking_client_phone.value.length == 13 && booking_client_name.value) {
        booking_window.style.display = 'none'
        cons()
    }


}


// Код ниже писали на занятии, не уверен, что он нужен

// let booking_film_price = document.getElementById('block-08__film-price');
// let booking_film_value = document.getElementById('block-08__film-value');
// let booking_total_price = document.getElementById('block-08__total-price');

// if (booking_film_price.value > 0) {
//     let total_price = booking_film_price.value * booking_film_value.value;
//     booking_total_price.innerHTML = total_price;
// }
