let person = {name:"John Doe",nationality:"kenyan",salary:100.00};
let car = {name:'Toyota MarkX',color:'white',price:1000};

//freeze the car object.
Object.freeze(car);

console.log(Object.isFrozen(person));
console.log(Object.isFrozen(car));