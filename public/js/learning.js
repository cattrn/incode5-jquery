// $( "button.continue" ).html( "Next Step..." ) // change the inner html of an element

// // runs when button with class of "continue" is clicked
// $("button.continue").click(() => {
//   $("button.continue").html("Good job!")
// })

// $("button.add").click(() => {
//   $("#insert-here").append("<p>Paragraph appended, amazing!")
// })

// $("a#google-link").attr("href", "https://www.google.com")
const base_URL = "https://api.themoviedb.org/3"
const api_key = "?api_key=141aeff6699de660e1fd52ed6be89c45"
const image_URL = "https://image.tmdb.org/t/p/w185"

function getMovies(page) {
  $.getJSON(base_URL + "/discover/movie" + api_key + "&page=" + page)
    .then(data => {
      console.log(data)
      const movies = data.results
      for (let i = 0; i < movies.length; i++) {
        const movie = movies[i]
        const movieHTML = $("<div>")
          .append(`<h2 class="movie-title">${movie.title}</h2>`)
          .append(
            `<a href="/movie/${movie.id}"><img src="${image_URL + movie.poster_path}" alt="${
              movie.title
            } poster"></a>`
          )
        $("#insert-here").append(movieHTML)
      }
    })
    .catch(err => {
      console.log(err)
      $("#insert-here").append(`<p>${err.responseJSON.status_message}</p>`)
    })
}

let page = 1
getMovies(page)

$("#next-page").click(() => {
  page = page + 1
  $("#insert-here").empty()
  getMovies(page)
})
