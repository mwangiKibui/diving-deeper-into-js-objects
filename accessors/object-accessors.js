let person = {
    name:"John Doe",
    nationality:"",
    set NATIONALITY(value){
        return this.nationality = value[0].toUpperCase() + value.slice(1)
    },
    get NATIONALITY(){
        return `${this.name} is a ${this.nationality}`
    }
};

//we set the nationality value
person.NATIONALITY = "kenyan";

//we get the nationality value
console.log(person.NATIONALITY);