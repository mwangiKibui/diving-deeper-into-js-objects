let js_developer = {
    position:"Software developer",
    specialization:"JavaScript"
};

//create a child object.
let person = Object.create(js_developer);

//set child specific attributes.
person['name'] = "John Doe";
person['nationality'] = "kenyan";

//accessing parent attributes from the child.
console.log(person['position']);

//accessing attributes of the child.
console.log(person);