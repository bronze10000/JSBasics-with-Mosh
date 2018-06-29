// Get Max - array exercise
// Do it the simple way 1st; then refactor with 'reduce'

const numbers = [1, 2, 3, 4, 10];

const count = getMax(numbers);

console.log(count);

function getMax(array) {
    // let higher = array[0];
    // for (let element of array)
    //     if (element > higher) 
    //     higher = element;
    // return higher;
    
    return array.reduce((accumulator, current) => (current > accumulator)
        ? current : accumulator);
}