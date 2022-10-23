// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));

    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0){
        return 0;
    }
    
    moviesArray.forEach(element => {
        let hasScore = 'score' in element;
        if (!hasScore) {
            element['score'] = 0;
        }
    });
    
    const totalScore = moviesArray.reduce(function (total, item) {
        return total + item.score
    }, 0);

    const averageScore = (totalScore / moviesArray.length);
    const final = Math.round(averageScore * 100) / 100;
    return final;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const allDramas = moviesArray.filter(movie => movie.genre.includes("Drama"));

    if(allDramas.length === 0) {
        return 0;
    }

    const allDramasScore = allDramas.reduce(function (accumulador, movie) {
		return accumulador + movie.score
	}, 0);
	
	const roundScore = Math.round((allDramasScore / moviesArray.length) * 100) / 100;
    return roundScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arrCopy = moviesArray.map((arrMovies) => arrMovies);
	
	arrCopy.sort(function(a, b){
		
		if (a.year > b.year) return 1;
		if (a.year < b.year) return -1;
		
		if (a.title > b.title) return 1;
		if (a.title < b.title) return -1;
		
	});
    
	
	return arrCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arrCopy = moviesArray.map(movies => movies.title);

    arrCopy.sort();

	arrCopy.splice(20, arrCopy.length - 20);
    return arrCopy;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
