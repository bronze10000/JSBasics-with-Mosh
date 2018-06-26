showNumbers(21);

function showNumbers(limit) {
    for (let i = 0; i < limit + 1; i++) {
        if (i % 2 === 0) {
            console.log(i, "EVEN");
        } else {
        console.log(i, "ODD")
        }
    }
}