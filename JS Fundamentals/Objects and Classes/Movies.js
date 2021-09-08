function solve(input) {
    let movies = [];
    for (const line of input) {
        if (line.includes('addMovie')) {
            let currentMovie = {};
            currentMovie.name = line.substring(9);
            movies.push(currentMovie);
        } else if (line.includes('directedBy')) {
            let [movie, directorName] = line.split(' directedBy ');
            movies.find(x => {
                if (x.name === movie) {
                    x.director = directorName;
                }
            })
        } else {
            let [movie, onDate] = line.split(' onDate ');
            movies.find(x => {
                if (x.name === movie) {
                    x.date = onDate;
                }
            })
        }
    }
    movies.forEach(sex => {
        if (sex.name && sex.director && sex.date) {
            console.log(JSON.stringify(sex));

        }
    })
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)