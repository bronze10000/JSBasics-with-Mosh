// Sum of Arrays function exercise

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    
    return items.reduce((a,b) => a + b);
    //     let add = 0;
    //     for(element of arguments) {
    //         add += element;
    //     }
    //     return add;
    // }
}

console.log(sum(1,2,3,4,5));
