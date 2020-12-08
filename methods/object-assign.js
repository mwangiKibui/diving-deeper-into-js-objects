let person_a = {
    name:"John Doe",
    position:"software developer",
    nationality:"kenyan"
};

let person_b = {
    name:"Jane Doe",
    specialization:'JavaScript'
};

//copy properties of person_b to person_a.

let person = Object.assign(person_a,person_b);

console.log(person);