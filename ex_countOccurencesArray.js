// Count occurrences exercise
// Do it the simple way 1st; then refactor with 'reduce'

const numbers = [1, 2, 3, 4, 1, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
    let happened = 0;
    // for (let element of array)
    //     if (element === searchElement)
    //         happened++;
    // return happened;

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement)
        return accumulator + occurrence;
    }, 0);
}