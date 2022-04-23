const movies = [
    { title:'a', year: 2018, rating:4.5 }, 
    { title:'b', year: 2018, rating:4.3 }, 
    { title:'c', year: 2018, rating:4.4 }, 
    { title:'d', year: 2022, rating:4.5 }, 
];

// All movies in 2018 with rating > 4
// Sort by rating in descending order
// Pick their title and display on console

//Result would be => b and a

const title = movies
    .filter(movie=> movie.rating >= 4 && movie.year === 2018)
    .sort((movieA,movieB) => movieA.rating - movieB.rating )
    .reverse()
    .map(movie => movie.title)

console.log(title);