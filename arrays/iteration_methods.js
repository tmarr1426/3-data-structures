/*
?   Iteration Methods
    * Do not destroy/alter original array
    * Take in a callback function
    * Loop through arrays
    * Must have a return
*/
//* .filtered
let fruits = ["Apple", "Pear", "Mango", "Orange", "Pineapple"];

const filteredFruit = fruits.filter((fruit) => {
    let result = fruit != "Mango";
    return result;
});

console.log(filteredFruit);

let fruit1 = "Pineapple";

console.log(fruits[4]);
console.log(fruits[4].includes(fruit1)); // Returns 'True'

const filteredFruit2 = fruits.filter((fruit)=> !fruit.includes("Apple"));

function removeMango (fruit) {
    let results = fruit != "Mango";
    return results;
}

const filteredFruit3 = fruits.filter(removeMango);
console.log(filteredFruit3);

let myNumArray = [1,3,5,6,5,7,3,9,5];

let newNumArray = myNumArray.filter((num)=> num != 5);
console.log(newNumArray);

let movies = [
    { name: "Top Gun 2", category: "Action"},
    { name: "Scary Movie 5", category: "Horror"},
];

movies.push({name: "It", category: "Horror"})
movies.push({name: "Get Out", category: "Horror"})
movies.push({name: "Taken", category: "Action"})

let actionMovies = movies.filter((movie) => movie.category === "Action");
console.log(actionMovies);
let horrorMovies = movies.filter((movie) => movie.category === "Horror");
console.log(horrorMovies);

//* forEach()

let newFoodList = ["apple", "pear", "mushgroom", "cheese", "peach"];

// for (let i=0; i< newFoodList.length; i++) {
//     console.log(newFoodList[i]);
// } //? Oldschool approach

newFoodList.forEach((item) => {
    console.log(item);
});

let movieList = ["Matrix", "Babe", "Little Mermaid", "The Two Towers"];

movieList.forEach((movie) => console.log(movie))
movieList.push("Aladdin");
console.log(movieList);

movieList.splice(1,1,"Hot Rod")
console.log(movieList);












