


function FizzBuzz(input) {
    if ((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz';
    } else if ((input % 5 === 0) && (input % 3 !== 0)) {
        return 'Buzz';
    } else if ((input % 3 === 0 ) && (input % 5 !== 0)) {
        return 'Fizz';
    } else if ((input % 3 !== 0) && (input % 5 !== 0)) {
        return input;
    } else if (typeof input !== 'number') {
        return NaN;
    }
}

console.log(FizzBuzz(true));
