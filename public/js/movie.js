const image_URL = "https://image.tmdb.org/t/p/w185"

$.getJSON('/api/individual-movie/' + movie_id + '?token=')
  .then(data => {
    console.log(data)
    $("main")
      .prepend(`<p class="movie-overview">${data.overview}</p>`)
      .prepend(
        `<img class="movie-poster" src="${
          image_URL + data.poster_path
        }" alt="">`
      )
      .prepend(`<h1 class="movie-title">${data.title}</h1>`)
  })
  .catch(err => {
    console.log(err)
  })

$("form").submit(e => {
  e.preventDefault()

  $.ajax({
    method: "POST",
    url: "/movie/" + movie_id,
    data: {
      rating: $("#rating").val(),
    },
  })
    .done(data => {
      console.log(data)
      console.log("Inserted into db successfully!")
    })
    .fail(err => {
      console.log("Insert failed")
      $(".error").remove()
      $("main").append("<p class='error'>" + err.statusText + "</p>")
    })
})
