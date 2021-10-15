const name = 'Abhinav'
const age = 25;


const user = {
    name: name,
    age: age,
    location: 'England'
}
const user2 = {
    name,
    age,
    location: 'Manchester'
}

console.log(user, user2)


// Destructuring objects


const bike = {
    label: 'CBR',
    cc: 649,
    price: 6500,
    isNew: false
}

// const cc = bike.cc;
// const label = bike.label;

const { label, isNew, cc } = bike;
const { price: bikePriceInGBP } = bike;
console.log(label, cc, isNew);
console.log(bikePriceInGBP, '£')


const buyBike = (type, { cc, isNew }) => {
    console.log(type, cc, isNew)
}

buyBike('BUY BIKE', bike);