var s1:string = "<a href='' />";
var userName = "Prakash";
var s2:string = `My \\ \n \t \s \v name is ${userName}`;

console.log(s2);
console.log(s2.length);
console.log(s2.charAt(0));
console.log(s2.indexOf('n'));
console.log(s2.lastIndexOf('n'));