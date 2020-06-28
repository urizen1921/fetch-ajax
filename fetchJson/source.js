$(document).ready(function() {

  submitMovie();

});

function getMovies(movie) {

  $.ajax({
    url: 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + movie,
    async: true,
    success: getNumberOfMovies,
    error: () => { console.log("error"); }
   });
}
  

  function submitMovie() {

    $('#submit').click(function() {
      var movie = $('#movie').val();
      getMovies(movie);
      console.log(movie);
    });

  }

  function getNumberOfMovies(data) {
    console.log(data);
    console.log(data.data.length);
  }
