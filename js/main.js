'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// 1 способ

function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
            personalMoviesDB.movies[a] = b;
            console.log('done');
    
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


// 2 способ
// let x = 0

// while ( i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//             b = prompt('На сколько оцените его?', '');

//     if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
//         personalMoviesDB.movies[a] = b;
//         console.log('done');

//     } else {
//         console.log('error');
//         x--;
//     }
//     x++
// }

// 3 способ

// let x = 0

// do {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//           b = prompt('На сколько оцените его?', '');
    

//     if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
//         personalMoviesDB.movies[a] = b;
//         x++;
//         console.log('done');
        
//     } else {
//         console.log('error');
//     }
// }

function detectPersonalLevel() {

    if (personalMoviesDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMoviesDB.count <= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Ошибка!");
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }
}

showMyDB(personalMoviesDB.privat);


function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
    
}

writeYourGenres();