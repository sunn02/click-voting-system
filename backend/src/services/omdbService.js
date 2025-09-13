const axios = require('axios');

function fetchMovies(title) {
    return axios.get('https://www.omdbapi.com/', {
        params: {
        apikey: process.env.API_KEY,
        s: title,
        type: 'movie',
        }
    }).then(response => response.data);
}


function getMovie(imdbID) {
    return axios.get('https://www.omdbapi.com/', {
        params: {
        apikey: process.env.API_KEY,
        i: imdbID,
        }
    }).then(response => response.data);
}

module.exports = { fetchMovies, getMovie };