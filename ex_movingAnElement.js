// Moving an element exercise
// original array should be unaffected!

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);


function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset');
        return;
    }
    
    let final = [...array];
    const element = final.splice(index, 1)[0];
    final.splice(element, 0, position);
    return final;
}

console.log(output);
