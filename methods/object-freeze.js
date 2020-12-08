let person = {
    name:"John Doe",
    nationality:"kenyan"
};

//freezing the object.
Object.freeze(person);

//setting another property
person['salary'] = 100.00;

console.log(person);