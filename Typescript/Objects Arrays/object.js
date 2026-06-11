"use strict";
var student = {
    name: "John",
    score: 90
};
console.log(student.name);
console.log(student.score);
for (var [key, value] of Object.entries(student)) {
    console.log(key);
    console.log(value);
}
