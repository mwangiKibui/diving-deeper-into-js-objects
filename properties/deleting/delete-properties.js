let person = {
    name:"John Doe",
    salary:100.00,
    age:30,
    marital_status:"Single"
};

//delete the marital_status property
delete person.marital_status;

console.log(person);