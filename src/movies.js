// Iteration 1: All directors? - Get the array of all directors.
// Done
function getAllDirectors(movies) {
  let directors = movies.map(function (movie) {
    return movie.director;
  });
  return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//Done
function howManyMovies(movies) {
  let result = movies.filter(
    (elem) =>
      elem.director === 'Steven Spielberg' && elem.genre.includes('Drama')
  );
  return result.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// revisar
function scoresAverage() {}

// Iteration 4: Drama movies - Get the average of Drama Movies
// Nao está correto
function dramaMoviesScore(movies) {
  let drama = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre[i] === 'Drama') {
      drama.push(movies.length);
    }
  }
  console.log(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// resposta incompleta
function orderByYear(movies) {
  movies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year && a.title - b.title;
    } else if (a.year === b.year) {
      return a.year - b.year;
    }
  });

  return movies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies
    .map((movie) => movie.title)
    .sort((a, b) => {
      const firstMovie = a.toLowerCase();
      const secondMovie = b.toLowerCase();
      if (firstMovie > secondMovie) {
        return 1;
      } else if (firstMovie < secondMovie) {
        return -1;
      } else {
        return 0;
      }
    });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
