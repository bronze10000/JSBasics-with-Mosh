// Array from range exercise

const numbers = arrayFromRange(-11,4);

console.log(numbers);


function arrayFromRange(min, max) {
    let rangeArray = [];
    for (let i = min; i <= max; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}