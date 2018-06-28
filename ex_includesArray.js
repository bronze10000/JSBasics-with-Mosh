//  Includes exercise

const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(1));
console.log(includes(numbers, 1));

function includes(array, searchElement) {
//   should return a boolean to see if searchElement is present or not
    // let found = false;
    for (numberInQuestion of array) {
        if (numberInQuestion === searchElement) 
            return true;
    } return false;
}