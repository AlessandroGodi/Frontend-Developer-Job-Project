// SLIDER
var slider = document.getElementById('slider')
var output = document.getElementById('year');

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

// MOVIE API - CALLING
// https://www.omdbapi.com/?i=tt3896198&apikey=2ac18e86

