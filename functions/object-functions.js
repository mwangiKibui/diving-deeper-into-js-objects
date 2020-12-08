let person = {
    name:"John Doe",
    age:30,
    married:false,
    salary:100.00,
    marital_status:function(){
        return this.married ? 'Married' : 'Single'
    }
};

//accessing all properties.
console.log(person);

//accessing the marital status property
console.log(person.marital_status());