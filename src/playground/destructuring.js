// 
// Object destructuring
//

// const person = {
//     name: 'Foster',
//     age: 28,
//     location: {
//         city: 'Oyibi',
//         temp: 88
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); // Penguin else Self-Published


//
// Array destructuring
//

// const address = [
//     '1299 S Juniper',
//     'Oyibi',
//     'Accra',
//     '19147'
// ];
// const [, city, state = 'Oti', zip] = address;
// console.log(`You are in ${city} ${state}.`);

const item = [
    'Coffee (hot)',
    '$2.00',
    '$2.50',
    '$2.75'
];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);