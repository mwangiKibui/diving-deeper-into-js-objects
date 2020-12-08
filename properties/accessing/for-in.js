let person = {
    firstName:'John',
    lastName:'Doe',
    age:30,
    salary:100.00,
    married:false,
    friends:['Jane Doe','Jennifer Doe'],
    fullName:function (){
        return `${this.firstName} ${this.lastName}`
    }
};

for(const key in person){
    console.log(key);
};