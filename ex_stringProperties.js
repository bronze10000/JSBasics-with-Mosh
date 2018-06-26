const movie = {
    title: 'a',
    year: 2011,
    gross: 2000000, 
    director: 'James Kim'
}

showProperties(movie);


function showProperties(obj) {
    for (property in obj) {
        if (typeof obj[property] === 'string') {
            console.log(property, obj[property]);
        }
    }
}