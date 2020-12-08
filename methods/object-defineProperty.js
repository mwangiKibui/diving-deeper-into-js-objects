let person = {
    name:"John Doe"
};

//define a nationality property
Object.defineProperty(person,'nationality',{
    value:'kenyan',
    writable:true
});

//acccessing all attributes of person.
console.log(person);

//accessing the attribute defined.
console.log(person.nationality);