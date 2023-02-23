//1. 
let str1 = 'My name is:';
let name = 'Dylan';

let str2 = `${str1} ${name}`
console.log(str2);

2//

let information = { firstName: 'Dylan', lastName: 'Israel' };

let { firstName, lastName } = information;
console.log(firstName);
console.log(lastName);

//3
let [firstName] = ['Dylan', 'Israel'];
console.log(firstName);

//4
let firstName = 'Dylan';
let information = { firstName };
console.log(information);
//5

let str = 'hello';

for (let char of str) { console.log(char); }// "h"// "e"// "l"// "l"// "o"

//6
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];

console.log(arr3);
//6.1
function findLength(...args) { console.log(args.length); }

findLength();
findLength(1);
findLength(2, 3, 4);

//7.
const square = num => num * num;
console.log(square(2));

//7.1

let str = 'Hello World';

console.log(str.includes('Hello'));
//8

class Car {
    constructor(wheels, doors) {
        this.wheels = wheels;
        this.doors = doors;
    }
    describeMe() {
        console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
    }
}


const car1 = new Car(4, 2);
car1.describeMe(); 
//9
function takeLongTimeAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test() {
    const v = await takeLongTimeAsync();
    console.log(v);
}

test();





