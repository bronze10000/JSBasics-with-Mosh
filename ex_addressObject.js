// Object exercise 

// street
// city
// zipcode
// showAddress(address)

const myAddress = {
    street: 'Twin Spring',
    city: 'Diamond Bar',
    zipcode: 91765
}

function showAddress(myAddress) {
    for(let key in myAddress) 
        console.log(key, myAddress[key]);
}

showAddress(myAddress);