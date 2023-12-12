/*
?   Array Destructuring
    * Syntax is on the left side of the assignment operator
    * Great for pulling info out of an array and assigning data to it's own variable
*/

const fullName = ["John", "Doe"];

const [fName, lName] = fullName;

console.log(fName, lName);

//? Spread
/*
    * Denoted by 3 consecutive periods ...
    * Pulls out all elements of an array and gives them to you as a standalone list of elements
*/

const fullName2 = ["Rocket", "Raccoon"];
console.log(...fullName2);


//? Rest

const fullName3 = [
    "Jane",
    "Doe",
    "Mrs.",
    {month: 3, date: 22, year: 1973},
    "testOne",
    2,
    "test3",
    4,
    true,
    false,
]

const [fName3, lName3] = fullName3

console.log(fName3, lName3);

