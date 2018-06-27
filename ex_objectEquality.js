// Object Equality exercise


// using constructor function
function Address(street, city, zipcode) {
    this.street = street,
    this.city = city,
    this.zipcode = zipcode
}

const myAddress1 = new Address('Twin Spring', 'Diamond Bar', 91765);
const myAddress2 = new Address('Twin Spring', 'Diamond Bar', 91765);


function areEqual(myAddress1, myAddress2){
    return (myAddress1.street === myAddress2.street  &&
        myAddress1.city === myAddress2.city &&
        myAddress1.zipcode === myAddress2.zipcode) ? true: false; 
}

function areSame(myAddress1, myAddress2) {
    return (myAddress1 === myAddress2) ? true: false;
}
console.log(areEqual(myAddress1, myAddress2));
console.log(areSame(myAddress1, myAddress2));

