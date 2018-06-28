//   array except exercise

const numbers = [1,2,3,4,1,1];

const output = except(numbers, [1,2]);


function except(array, excluded) {
    let outputArray = [];
    // for (let i = 0; i < excluded.length; i++) {
    //     for (let j = 0; j < array.length; j++) {
    //         if (excluded[i] !== array[j]) {
    //             outputArray.push(array[j]);
    //         }
    //     }
    //     return outputArray;
    // }

    for (let element of array)
        if (!excluded.includes(element))
        outputArray.push(element);
    return outputArray;
}
console.log(output);