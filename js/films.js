window.onload = function () {    //Скорее всего, это не очень корректно
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
            new: true,
            price: 200,
            description: 'More about selling in the Envato Marketplaces',
            image: "img/mov1.jpg",
            fb: "https://fb.com",
            twitter: "https://twitter.com",
            behance: "https://www.behance.net",
            dribble: "http://dribble.com",
            link: "https://www.kinopoisk.ru/film/chelovek-pauk-2002-838/"
        },
        film2 = {
            name: 'Собачья жизнь 2',
            start: '12:00',
            genre: [2, 4, 5],
            hire: true,
            new: true,
            price: 200,
            description: 'More about selling in the Envato Marketplaces',
            image: "img/mov2.jpg",
            fb: "https://fb.com",
            twitter: "https://twitter.com",
            behance: "https://www.behance.net",
            dribble: "http://dribble.com",
            link: "https://www.kinopoisk.ru/film/1122114/"
        },
        film3 = {
            name: 'История игрушек 4',
            start: '14:00',
            genre: [2, 5, 6],
            hire: true,
            new: false,
            price: 200,
            description: 'More about selling in the Envato Marketplaces',
            image: "",
            fb: "https://fb.com",
            twitter: "https://twitter.com",
            behance: "https://www.behance.net",
            dribble: "http://dribble.com",
            link: "https://www.kinopoisk.ru/film/istoriya-igrushek-4-2019-846824/"
        },
        film4 = {
            name: 'Люди в черном: Интернэшнл',
            start: '16:00',
            genre: [0, 1, 2],
            hire: true,
            new: true,
            price: 200,
            description: 'More about selling in the Envato Marketplaces',
            image: "img/mov3.jpg",
            fb: "https://fb.com",
            twitter: "https://twitter.com",
            behance: "https://www.behance.net",
            dribble: "http://dribble.com",
            link: "https://www.kinopoisk.ru/film/693730/"
        },

    ]

    //Определение города
    /*
        const SYPEX_URL = 'https://api.sypexgeo.net/json/';
            //CITIES_URL = 'http://glavpunkt.ru/api/get_rf_cities';
    
        //let cities;
    
        //@param {*} api_url - адрес запроса
         
        function getRequest(api_url, callback) {
            let xhr = new XMLHttpRequest(),
                async = true;
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback.call(xhr.responseText)
                }
            }
            xhr.open('GET', api_url, async);
            xhr.send();
            if (xhr.status != 200) {
                return (xhr.status + ': ' + xhr.statusText)
            }
        }
        $(document).ready(($) => {
            getRequest(SYPEX_URL, function(){
                let answer = $.parseJSON(this);
                let city = answer['city']['name_ru'];
                //console.log(city);
                $('#block-01__city').html(city);
            });        
        });
    */

    $.ajax({
        url: 'https://api.sypexgeo.net/json/',        // указываем URL и
        dataType: "json",                             // тип загружаемых данных
        success: function (data) {        // вешаем свой обработчик на функцию success
            //console.log(data['city']['name_ru'])
            $('#block-01__city').html(data['city']['name_ru']);
        }
    });


    //Создание массива с местами
    let places = [];
    const get_place = function ([number, price, booking]) {
        return {
            number,
            price,
            booking
        }
    }
    for (let i = 0; i < 10; i++) {
        let n = i + 1;
        let p;
        let b = Math.random() >= 0.6; //0.6 - что бы было больше свободных мест
        if (n > 3 && n < 8) {
            p = 200;
        }
        else {
            p = 100;
        }
        places[i] = get_place([n, p, b])
    }
    //console.log(places);


    let films_hire = [];
    let films_new = [];

    let p = new Promise((resolve, reject) => {
        //api изменил что бы было побольше свежих фильмов
        var url = 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-11-15&api_key=e2c01b015b375681951ef2536440f652';
        var request = new XMLHttpRequest(); //XHR
        request.open('GET', url, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var data = JSON.parse(this.response);
                resolve(data)
            } else {
                // We reached our target server, but it returned an error
                reject()
            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
        };
        request.send();
    })

    p.then((data) => {
        const films_API = data.results
        //console.log('films_API', films_API)
        const urlServerApiImages = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
        const filmsForSlider = films_API.map(film_API => {
            return ({
                name_film: film_API.title,
                // genre_ids: film_API.genre_ids,
                poster_path: urlServerApiImages + film_API.poster_path,
                release_date: film_API.release_date,
                overview: film_API.overview,
                fb: "https://fb.com",
                twitter: "https://twitter.com",
                behance: "https://www.behance.net",
                dribble: "http://dribble.com",
            })
        })

        //Поиск предстоящих фильмов. Инициализация массива films_new для блока 5
        for (let i = 0; i < filmsForSlider.length; i++) {
            let now = new Date()
            let today = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate()

            if (filmsForSlider[i].release_date > today) {
                films_new.push(filmsForSlider[i])
            }
        }

        //Вставка новых фильмов в блоке 5
        let films_new_HTML = document.getElementById("filmsNew");
        for (let i = 0; i < films_new.length; i++) {
            let current_film = films_new[i];
            let film_newHTML = film.out_new_film.bind(current_film)();
            let div = document.createElement("div");
            div.classList.add("block-05__col");
            div.innerHTML = film_newHTML;
            films_new_HTML.appendChild(div);

        }
        owl();
    })

    const owl = function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                600: {
                    items: 3
                }
            }
        })
    }

    //Инициализация массива films_hire
    for (let i = 0; i < films.length; i++) {
        if (films[i].hire === true) {
            films_hire.push(films[i])
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
        },
        getLink: function () {
            return this.link
        },
        out_new_film: function () {
            const film_name = this.name_film;
            const film_image = this.poster_path;
            const film_description = this.overview;
            const film_fb = this.fb;
            const film_tw = this.twitter;
            const film_bh = this.behance;
            const film_dribble = this.dribble;
            const film_link = this.link;

            filmHTML = `
        <img src="${film_image}" alt="">
        <div class="block-05__slide-block">
            <div class="block-05__slide-text">
                <a href="${film_link}" target="_blank">
                    ${film_name}
                </a>
            </div>
            <hr>
            <p>${film_description}</p>
            <div class="block-05__links">
                <a href="${film_fb}" title="fb" target="_blank">
                    <svg class="block-05__svg" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34">
                        <defs>
                            <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px" width="34px"
                                height="34px">
                                <feOffset in="SourceAlpha" dx="0" dy="1" />
                                <feGaussianBlur result="blurOut" stdDeviation="1" />
                                <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                                <feComposite operator="atop" in="floodOut" in2="blurOut" />
                                <feComponentTransfer>
                                    <feFuncA type="linear" slope="0.25" />
                                </feComponentTransfer>
                                <feMerge>
                                    <feMergeNode />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#Filter_0)">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                d="M16.350,30.764 C7.872,30.764 1.000,23.882 1.000,15.393 C1.000,6.903 7.872,0.021 16.350,0.021 C24.828,0.021 31.700,6.903 31.700,15.393 C31.700,23.882 24.828,30.764 16.350,30.764 ZM16.721,6.969 C13.254,6.969 14.044,11.088 13.929,12.590 C13.929,12.601 11.809,12.590 11.809,12.590 L11.809,15.384 L13.922,15.384 L13.922,25.220 L17.434,25.220 L17.426,15.384 L19.779,15.384 L20.240,12.574 L17.434,12.605 C17.434,10.610 17.280,9.799 18.445,9.799 C18.549,9.799 20.251,9.795 20.251,9.795 L20.255,6.969 L16.721,6.969 Z" />
                        </g>
                    </svg>
                </a>
                <a href="${film_tw}" title="twitter" target="_blank">
                    <svg class="block-05__svg" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34">
                        <defs>
                            <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px" width="34px"
                                height="34px">
                                <feOffset in="SourceAlpha" dx="0" dy="1" />
                                <feGaussianBlur result="blurOut" stdDeviation="1" />
                                <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                                <feComposite operator="atop" in="floodOut" in2="blurOut" />
                                <feComponentTransfer>
                                    <feFuncA type="linear" slope="0.25" />
                                </feComponentTransfer>
                                <feMerge>
                                    <feMergeNode />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#Filter_0)">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                d="M16.537,30.747 C8.060,30.747 1.187,23.865 1.187,15.375 C1.187,6.885 8.060,0.003 16.537,0.003 C25.015,0.003 31.887,6.885 31.887,15.375 C31.887,23.865 25.015,30.747 16.537,30.747 ZM24.698,13.855 C23.512,9.722 20.664,9.722 20.664,9.722 C20.664,9.722 21.873,9.034 21.838,8.615 C21.466,8.348 20.720,8.883 20.657,8.883 C20.845,8.751 20.733,8.373 20.489,8.231 C20.129,8.266 19.815,8.930 19.815,8.930 C19.815,8.930 19.638,8.604 19.478,8.604 C17.571,9.128 16.228,13.535 16.234,13.541 C10.007,9.332 9.595,10.141 9.595,10.152 C9.106,11.247 11.001,12.633 11.001,12.633 L10.460,12.649 C10.460,12.649 9.663,12.623 9.837,13.192 C10.015,13.920 10.959,14.674 10.967,14.682 C11.432,14.903 12.013,14.693 12.013,14.693 C12.013,14.693 11.397,15.016 11.007,15.260 C10.364,15.675 10.826,16.044 10.896,16.114 C11.733,17.011 13.048,16.953 13.048,16.953 C13.048,16.953 12.437,17.686 12.432,17.965 C12.432,18.419 12.839,18.699 12.873,18.734 C13.237,18.984 13.776,19.013 13.780,19.013 C10.411,22.588 6.351,18.992 6.351,18.979 C6.804,21.598 10.653,24.125 17.420,23.147 C22.908,22.274 24.663,16.254 24.663,16.254 C24.663,16.254 26.931,16.382 27.187,15.031 C26.477,15.159 25.454,14.950 25.454,14.950 C25.454,14.950 27.198,14.193 27.280,13.285 C26.256,14.076 24.733,13.855 24.698,13.855 Z" />
                        </g>
                    </svg>
                </a>
                <a href="${film_bh}" title="behance" target="_blank">
                    <svg class="block-05__svg" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34">
                        <defs>
                            <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px" width="35px"
                                height="34px">
                                <feOffset in="SourceAlpha" dx="0" dy="1" />
                                <feGaussianBlur result="blurOut" stdDeviation="1" />
                                <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                                <feComposite operator="atop" in="floodOut" in2="blurOut" />
                                <feComponentTransfer>
                                    <feFuncA type="linear" slope="0.25" />
                                </feComponentTransfer>
                                <feMerge>
                                    <feMergeNode />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#Filter_0)">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                d="M16.806,30.764 C8.328,30.764 1.456,23.882 1.456,15.393 C1.456,6.903 8.328,0.021 16.806,0.021 C25.283,0.021 32.156,6.903 32.156,15.393 C32.156,23.882 25.283,30.764 16.806,30.764 ZM16.969,12.741 C16.969,9.268 13.194,9.547 13.194,9.547 L7.596,9.549 L7.603,21.872 L12.826,21.837 C12.826,21.837 17.320,22.183 17.360,18.148 C17.360,15.798 15.465,15.234 15.465,15.234 C15.465,15.234 16.969,14.689 16.969,12.741 ZM25.305,10.217 L20.513,10.217 L20.513,11.592 L25.305,11.592 L25.305,10.217 ZM22.854,12.325 C18.267,12.325 18.493,17.138 18.493,17.138 C18.493,17.138 18.237,21.877 22.944,21.877 C26.568,21.877 27.094,18.885 27.094,18.885 L24.763,18.885 C24.763,18.885 24.387,19.940 23.004,19.924 C20.733,19.924 20.809,17.726 20.809,17.726 L27.199,17.695 C27.199,17.695 27.861,12.325 22.854,12.325 ZM22.839,14.292 C24.808,14.292 24.854,16.160 24.854,16.160 L20.854,16.190 C20.854,16.190 21.004,14.292 22.839,14.292 ZM12.723,19.704 L10.117,19.694 L10.107,16.410 C10.107,16.410 11.692,16.421 12.758,16.421 C12.754,16.421 14.768,16.280 14.768,17.947 C14.768,19.944 12.723,19.704 12.723,19.704 ZM12.743,14.398 L10.112,14.413 L10.112,11.687 L12.385,11.699 C12.385,11.699 14.518,11.416 14.518,13.012 C14.518,14.609 12.743,14.398 12.743,14.398 Z" />
                        </g>
                    </svg>
                </a>
                <a href="${film_dribble}" title="dribble" target="_blank">
                    <svg class="block-05__svg" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34">
                        <defs>
                            <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px" width="34px"
                                height="34px">
                                <feOffset in="SourceAlpha" dx="0" dy="1" />
                                <feGaussianBlur result="blurOut" stdDeviation="1" />
                                <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                                <feComposite operator="atop" in="floodOut" in2="blurOut" />
                                <feComponentTransfer>
                                    <feFuncA type="linear" slope="0.25" />
                                </feComponentTransfer>
                                <feMerge>
                                    <feMergeNode />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <g filter="url(#Filter_0)">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                d="M16.644,31.009 C8.166,31.009 1.294,24.126 1.294,15.636 C1.294,7.146 8.166,0.265 16.644,0.265 C25.121,0.265 31.994,7.146 31.994,15.636 C31.994,24.126 25.121,31.009 16.644,31.009 ZM16.546,3.731 C9.946,3.731 4.595,9.100 4.595,15.724 C4.595,22.347 9.946,27.716 16.546,27.716 C23.147,27.716 28.498,22.347 28.498,15.724 C28.498,9.100 23.147,3.731 16.546,3.731 ZM19.404,15.210 C19.132,14.525 18.850,13.854 18.553,13.209 C22.130,11.829 24.182,9.458 24.182,9.458 C24.182,9.458 26.206,11.638 26.388,15.193 C26.388,15.178 22.467,14.623 19.404,15.210 ZM14.049,6.157 C14.049,6.157 18.845,4.626 22.988,8.237 C20.753,10.510 17.771,11.625 17.771,11.625 C16.451,8.648 14.049,6.157 14.049,6.157 ZM6.905,13.641 C6.905,13.641 7.620,9.210 12.104,6.893 C14.554,9.848 15.825,12.313 15.825,12.313 C15.825,12.313 12.168,13.504 6.905,13.641 ZM17.441,15.644 C17.441,15.644 12.774,16.496 9.041,22.138 C6.368,19.036 6.702,15.348 6.702,15.329 C13.430,15.117 16.642,13.880 16.642,13.880 L17.441,15.644 ZM18.121,17.369 C19.233,19.948 20.084,24.955 20.084,24.955 C20.084,24.955 15.249,27.144 10.494,23.529 C10.502,23.529 13.193,18.747 18.121,17.369 ZM26.331,16.982 C25.687,21.930 21.967,23.990 21.967,23.990 C21.345,20.359 20.052,16.938 20.052,16.938 C20.052,16.938 23.030,16.445 26.331,16.982 Z" />
                        </g>
                    </svg>
                </a>
            </div>
        </div>
        `;
            return filmHTML;
        }
    }

    //Окно заказа фильма (блок 8)
    let booking_window = document.getElementById('block-08');
    booking_window.addEventListener('click', orderBubble);
    let close_booking_window = document.getElementById('block-08__close-booking-window');
    close_booking_window.onclick = function () {
        booking_window.style.display = 'none'
    }

    let button_book = document.getElementById('block-08__book');
    //parent_book = button_book.parentNode;
    let booking_container = document.querySelector('#block-08__booking-window');
    let places_div = document.createElement('div');
    places_div.classList.add("block-08__places");
    let first_input = booking_container.getElementsByTagName('input')[0];
    let first_input_div = first_input.parentNode;
    //console.log(first_input)
    booking_container.insertBefore(places_div, first_input_div);
    //$(booking_container).insertAfter(places_div, first_input_div);

    for (place of places) {
        let place_div = document.createElement('div');
        //place_div.addEventListener('click', order);
        place_div.addEventListener('click', placeToggle);
        place_div.addEventListener('contextmenu', placeContext);
        place_div.addEventListener('mousemove', placeHover);
        place_div.addEventListener('mouseout', placeHoverOut);
        place_div.innerHTML = place.number;
        place_div.classList.add("block-08__place_div")

        if (place.booking) {
            place_div.classList.toggle("block-08__place_booked");
        }
        // else {
        //     place_div.classList.add("block-08__place_free");
        // }
        places_div.append(place_div)
    }

    let inp = document.querySelector('#block-08__client-phone');

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
        if (booking_client_phone.value.length == 13 && booking_client_name.value) {
            booking_window.style.display = 'none'
            cons()
        }
    }

    //Функции, обрабатывающие окно бронирования билетов
    function order(e) {
        let el = e.target.innerHTML;
        if (places[el - 1].booking == true) {
            alert('Место занято!');
        }
        else {
            let chosen_place = document.getElementById('block-08__chosen_place');
            chosen_place.value = el;
            let booking_film_price2 = document.getElementById('block-08__film-price2');
            booking_film_price2.innerHTML = places[el - 1].price;
            places[el - 1].booking = true;
            //console.log(places);
        }
    }
    function orderBubble(e) {
        if (e.target.classList.contains("block-08__place_div") == true) {
            order(e);
        }
    }
    function placeToggle(e) {
        //e.target.classList.remove("block-08__place_free");
        e.target.classList.toggle("block-08__place_booked");
    }
    function placeContext(event) {
        event.preventDefault();
        let pc = event.target.innerHTML;
        alert(places[pc - 1].price);
    }
    function placeHover(e) {
        e.target.classList.add("block-08__place_hover");
    }
    function placeHoverOut(e) {
        e.target.classList.remove("block-08__place_hover");
    }

    //Вставка фильмов в прокате в таблице блока 3
    for (let i = 0; i < films_hire.length; i++) {
        const film_name = film.getName.bind(films_hire[i])()
        const film_start = film.getStart.bind(films_hire[i])()
        const film_genre = film.getGenre.bind(films_hire[i])()
        const film_price = film.getPrice.bind(films_hire[i])()
        let films_hireHTML = document.getElementById('films_hire')

        let film_HTML = `
        <td id="start_film_${i}" class="block-03__table_centr">${film_start}</td>
        <td id="name_film_${i}">${film_name}</td>
        <td id="genre_film_${i}">${film_genre}</td>
        <td id="price_film_${i}" title="рублей" class="block-03__table_centr">${film_price}</td>
        <td><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 34 34">
            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                d="M16.505,32.994 C7.393,32.994 0.005,25.606 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.606 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.778 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z" />
        </svg>
        </td>
        `

        let tr = document.createElement("tr")
        tr.innerHTML = film_HTML
        films_hireHTML.appendChild(tr)

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

            // let booking_film_value = document.getElementById('block-08__film-value');
            // let booking_total_price = document.getElementById('block-08__total-price');

            // booking_total_price.innerHTML = film_price * booking_film_value.value;

            // booking_film_value.onchange = function () {
            //     booking_total_price.innerHTML = film_price * booking_film_value.value
            //}
        }

        //Вывод заказа (запуск ниже)
        function cons() {
            console.group('Ваш заказ:')
            console.log(film_name)
            console.log(film_start)
            console.groupEnd
        }
    }
}



