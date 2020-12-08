let person = {
    name:"John Doe",
    nationality:"kenyan",
    position:"Software developer"
};

//Loop through the keys and the values.
for(const [key,value] of Object.entries(person)){
    console.log(key,value)
};