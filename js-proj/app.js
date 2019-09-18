// classes


console.log('learning about classes from ES6');

class Human {
    // constructor() {
    //     this.gender = 'male';
    // }

    // same as above, using ES6 syntax
    gender = 'male';

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {


    // constructor() {
    //     super();
    //     this.name = 'Tate';
    //     this.gender = 'not female'
    // }

    // same as above, using ES6 syntax
    name = 'Tate';
    gender = 'female';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();

person.printMyName();
person.printGender();



// Spread and Rest Operators
//
// Spread
// '...'
// Used to split up array elements OR object properties

const numbers = [1,2,3];
const newNumbers = [...numbers, 4 ,5];

console.log(newNumbers);

const newPerson = {
    ...person,
    age: 21
}

console.log(newPerson);

// Rest
// Used to merge a list of function arguments into an array

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3,1));


// Destructuring
/*
 Easily extract array elements or object properties and store them
 in variables
 */

 [num1, , num3] = numbers;

 console.log(num1, num3);

// Array functions

const doublNumArray = numbers.map((num) => {
    return num*2;
});

console.log(doublNumArray);