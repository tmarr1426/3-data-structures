let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
        "Season One" : [
            {
                episode_title: "Simpsons Roasting on an open fire",
                aired: "1989-12-17",
            },
            {
                episode_title: "Bart the Genius",
                aired: "1990-01-01",
            },
        ],
        "Season Two" : [
            //...
        ],
        "Season Three" : [
            //...
        ],
    },
    currently_running: true,
};

/*
?   Object.keys()
    * Returns back an array of keys
*/

console.log(Object.keys(theSimpsons));

/*
?   Object.values()
    * Returns back an array of values
*/

console.log(Object.values(theSimpsons));

/*
?   Object.assign()
    * Copies all enumerable properties from one or more sources
*/

let obj1 = {name: "Bob", age: 50};
let obj2 = {work: "Manager"};

let newObj = Object.assign(obj1, obj2);
console.log(newObj);

//? Delete object.key

delete theSimpsons.currently_running;

console.log(theSimpsons);

/*
?   Object.freeze()
    * Does not allow for reassignments
*/

Object.freeze(theSimpsons);
theSimpsons.id = 2;

console.log(theSimpsons.id);


