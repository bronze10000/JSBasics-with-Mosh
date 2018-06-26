showStars(5);

function showStars(rows) {
    // use '/n' for linebreak
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        
        for (let i=0; i < row; i++){
            pattern += '*';
        }
        console.log(pattern);}
}