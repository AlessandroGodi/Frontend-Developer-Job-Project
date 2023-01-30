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
    const movies = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=2ac18e86&s=fast');
    const movieData = await movies.json();
    const movieResultElem = document.querySelector('.movie__results')
    const movieResult = Object.entries(movieData);
    
    console.log(movieResult)

    movieResultElem.innerHTML = movieResult.map(movie => movieHTML(movie)).join('');
}

function movieHTML(movie) {
    return `<div class="movie__result">
        <div class="box__top">
            <h3 class="movie__result--title">
                ${movie.Title}
            </h3>
            <figure class="movie__result--img-wrapper">
                <img src="https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg" class="movie__result--img">
            </figure>
        </div>
        <div class="box__middle">
            <p class="movie__result--text">
                <span class="text-yellow">${movie.Year}</span>
            </p>
            <p class="movie__result--text">
                ${movie.Yype}
                <!-- movie or series -->
            </p>
        </div>
        <div class="box__bottom">
            <h3 class="movie__result--imdbID">
                ${movie.ImdbID}
            </h3>
        </div>
    </div>`
}

main();

