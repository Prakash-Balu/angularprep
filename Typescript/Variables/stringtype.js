"use strict";
var s1 = "<a href='' />";
var userName = "Prakash";
var s2 = `My \\ \n \t \s \v name is ${userName}`;
console.log(s2);
console.log(s2.length);
console.log(s2.charAt(0));
console.log(s2.indexOf('n'));
console.log(s2.lastIndexOf('n'));
