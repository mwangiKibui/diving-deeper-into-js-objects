let person = {
    name:"John Doe"
};

//define different properties on the person object.
Object.defineProperties(person,{
    position:{
        value:"software developer",
        writable:true
    },
    specialization:{
        value:"JavaScript",
        writable:true
    }
});

//accessing attributes of person
console.log(person);

//accessing the defined attributes of person.
console.log(person['position']);
console.log(person['specialization']);