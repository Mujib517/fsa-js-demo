// Add, Edit, Delete, Search
// Firstname, middelname, lastname, contactNumber, email, address

var contact = {
    firstName: 'abc',
    lastName: 'xyz',
    middleName: '',
    mobile: [{ type: 'mobile', number: '91-22929292' }],
    email: [{
        type: 'Personal',
        email: 'abc@gmail.com'
    }, {
        type: 'Work',
        email: 'xyz@work.com'
    }],
    address: {
        type: 'Primary',
        hNo: '8-124',
        city: 'Hyderabad',
        state: 'TS',
        country: 'IN',
        pin: 500001
    }
}

var contact2 = {};

var phoneBook = [contact, contact2];

function hasMatch(name) {
    return phoneBook[i].firstName === name
        || phoneBook[i].lastName === name
        || phoneBook[i].middleName === name;
}

function search(name) {
    for (var i = 0; i < phoneBook.length; i++) {
        if (hasMatch(name)) console.log(phoneBook[i]);
    }
}

search('xyz');


