let genres = ['фантастика', 'боевик', 'приключения',
'фэнтези', 'драмма', 'комедия', 'мультфильм']

let films = [
    ['10:00', 'Человек-паук', 0],
    ['12:00', 'Собачья жизнь 2', 3],
    ['14:00', 'История игрушек 4', 6],
    ['16:00', 'Люди в черном: Интернэшнл', 0]
]
console.log(films[0][2])

let element_start_film_1 = document.getElementById('start_film_1')
let element_name_film_1 = document.getElementById('name_film_1')
let element_genre_film_1 = document.getElementById('genre_film_1')
element_start_film_1.innerHTML = films[0][0]
element_name_film_1.innerHTML = films[0][1]
element_genre_film_1.innerHTML = genres[films[0][2]]

let element_start_film_2 = document.getElementById('start_film_2')
let element_name_film_2 = document.getElementById('name_film_2')
let element_genre_film_2 = document.getElementById('genre_film_2')
element_start_film_2.innerHTML = films[1][0]
element_name_film_2.innerHTML = films[1][1]
element_genre_film_2.innerHTML = genres[films[1][2]]

let element_start_film_3 = document.getElementById('start_film_3')
let element_name_film_3 = document.getElementById('name_film_3')
let element_genre_film_3 = document.getElementById('genre_film_3')
element_start_film_3.innerHTML = films[2][0]
element_name_film_3.innerHTML = films[2][1]
element_genre_film_3.innerHTML = genres[films[2][2]]

let element_start_film_4 = document.getElementById('start_film_4')
let element_name_film_4 = document.getElementById('name_film_4')
let element_genre_film_4 = document.getElementById('genre_film_4')
element_start_film_4.innerHTML = films[3][0]
element_name_film_4.innerHTML = films[3][1]
element_genre_film_4.innerHTML = genres[films[3][2]]

// console.log('start_film_1')
// const genre_2 = 'боевик'
// const genre_3 = 'приключения'
// const genre_4 = 'фэнтези'
// const genre_5 = 'драмма'
// const genre_6 = 'комедия'
// const genre_7 = 'мультфильм'
// let start_film_2 = '12:00'
// let start_film_3 = '14:00'
// let start_film_4 = '16:00'
// let name_film_1 = 'Человек-паук'
// let name_film_2 = 'Собачья жизнь 2'
// let name_film_3 = 'История игрушек 4'
// let name_film_4 = 'Люди в черном: Интернэшнл'
// let genre_film_1 = genre_1 + ', ' + genre_2 + ', ' + genre_3
// let genre_film_2 = genre_4 + ', ' + genre_5 + ', ' + genre_6
// let genre_film_3 = genre_7 + ', ' + genre_4 + ', ' + genre_6
// let genre_film_4 = genre_1 + ', ' + genre_2 + ', ' + genre_3
