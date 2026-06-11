var student = { 
    name: "John",
    score: 90
};

console.log(student.name);
console.log(student.score);

//Default behaviour
for(var item in student) {
    console.log(item);
    // console.log(student[item]);
}

for(var [key, value] of Object.entries(student)) {
    console.log(key);
    console.log(value);
}

