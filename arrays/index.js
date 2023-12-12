/*
?   Arrays
    * Denoted with square brackets []
    * Indices start at zero 0
    * Using a property called "length", we can find the sum of data stored
*/

let list = ["Milk", "Bread", "Chicken", "Coffee"];

//console.log(list[1]); //Outputs 'Bread'

list[0] = "Chocolate Milk";
// console.log(list);

let avengers = ["Nick", 2, false, "Steve", "Bruce", ["Tony", 8, true]];

console.log(typeof avengers); // outcome 'Object' as all options in js are objects

console.log(avengers [4]);
console.log(avengers [5][2]);
// let subArray = avengers [5];
// console.log(subArray [2]);

console.log(`Hello ${avengers[0]}. Hello ${avengers[5][0]}.`);

/*
?   Reference
    * Important to note, when an Array is created, it is being stored in memory
    * Assigning a new variable to initial array will reference the same array in memorr.
    * It can be important when working with imutable data
*/

let myPubInfo = ["Travis", 31];
let myPrivateInfo = myPubInfo /// ["Travis", 31]

let ssn = "555-55-5555";

myPrivateInfo.push(ssn); // Pushes new information in parameter to the old array. SSN pushed to myPrivateInfo.

console.log(myPrivateInfo);

//? Array Methods
//* .push (item to add to the end of array)

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

food.push("Pizza");
console.log("PUSH:", food);

//* .splice (target position, how many removed, replaced with what)

food.splice(1, 1, "Tacos");
console.log("SPLICE:", food);

food.splice(1, 0, "Steak");
console.log("SPLICE2:", food);

//* .slice() - Can store a segment of an array

let sliced = food.slice(1, 3);
console.log(sliced);

//* .pop() - Removes the last item in an array

food.pop();
console.log("POP:", food);

//* .shift() - Removes item from beginning of array

food.shift();
console.log("SHIFT:", food);

//* .unshift() - Add items
food.unshift("Hamburger", "Salad");
console.log("UNSHIFT:", food);

//* .toString ();

let rgb = ["Red", "Green", "Blue"];

console.log(rgb.toString());