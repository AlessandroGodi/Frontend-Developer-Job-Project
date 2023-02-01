// SLIDER
var slider = document.getElementById('slider')
var output = document.getElementById('year');

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

// MOVIE API - CALLING
// https://www.omdbapi.com/?i=tt3896198&apikey=2ac18e86

async function main() {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=2ac18e86&s=iron man`);
    const movieData = await movies.json();
    const movieResultElem = document.querySelector('.movie__results')

    const movieResult = Object.entries(movieData);
    const arrayData = movieResult[0][1]
    // need to access and array within an array
    console.log(arrayData)

    movieResultElem.innerHTML = arrayData.map(movie => movieHTML(movie)).join('');
}

function movieHTML(movie) {
    return `<div class="movie__result">
        <div class="box__top">
            <h3 class="movie__result--title">
                ${movie.Title}
            </h3>
            <figure class="movie__result--img-wrapper">
                <img src="${movie.Poster}" class="movie__result--img no-click">
            </figure>
        </div>
        <div class="box__middle">
            <p class="movie__result--text">
                <span class="text-yellow">${movie.Year}</span>
            </p>
            <p class="movie__result--text">
                ${movie.Type}
                <!-- movie or series -->
            </p>
        </div>
        <div class="box__bottom">
            <h3 class="movie__result--imdbID">
                ${movie.imdbID}
            </h3>
        </div>
    </div>`
}

main();

// function to search within API -- FAILED TO MAKE WORKABLE 1/02/2023
const searchBar = document.getElementById('search__bar');
searchBar.addEventListener('keyup', searchForMovie);

function searchForMovie(title) {
    return searchMovie = title.target.value;
}
// https://blog.logrocket.com/localstorage-javascript-complete-guide/

