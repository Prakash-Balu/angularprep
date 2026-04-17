//Call method
console.log(" --- Call method --- ");
let nameObj = {
    name: 'John'
}

let PrintName = {
    name: 'Smith',
    sayHi : function(age) {
        console.log(this.name + " age is " + age);
    }
}

PrintName.sayHi.call(nameObj, 42);

const person = {
    firstName: 'John',
    lastName: 'Smith'
}

function greet(city, country) {
    console.log(`Hello my name is ${this.firstName} ${this.lastName} from ${city} ${country}`);
}

greet.call(person, 'Mumbai', 'India');

//Apply method
console.log(" --- Apply method --- ");

greet.apply(person, ['Mumbai', 'India']);

//Bind method
console.log(" --- Bind method --- ");

const bound = greet.bind(person, 'Mumbai', 'India');
bound();


