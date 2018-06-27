// Object exercise - factory and constructor function

// street
// city
// zipcode
// showAddress(address)

// using constructor function
function Address(street, city, zipcode) {
    this.street = street,
    this.city = city,
    this.zipcode = zipcode
}

const myAddress = new Address('Twin Spring', 'Diamond Bar', 91765);


// using factory function
function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    };
}

let myAddressAccordingToFactory = createAddress('Twin Spring', 'Fullerton', 00000);

console.log(myAddress);

console.log(myAddressAccordingToFactory);