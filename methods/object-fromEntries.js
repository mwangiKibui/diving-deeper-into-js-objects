//from an array
let person = [ ['name','John Doe'], ['nationality','Kenyan'],['salary',100]];

person = Object.fromEntries(person);

console.log(person);

//from a map
let car = new Map([ ['name','Toyota MarkX'], ['color','white'],['price',1000] ]);

car = Object.fromEntries(car);

console.log(car);

//object transformations
let friends = {'jane':3,'john':5,'mark':10};

//step 1: make an iterable
friends = Object.entries(friends).map(([key,value]) => [key,value + 2]);

//step 2: regain the transformed object.
friends = Object.fromEntries(friends);

console.log(friends);