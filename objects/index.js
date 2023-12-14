//? Objects

let marvelHero = {
    fullName: "Peter Parker",
    codeName: "Spider-Man",
    age: 25,
    active: true,
};

/*
?   Object Literal
    * When our values are written within our keys
        * Are hardocded

?   Structure
    
    keyword objectName = {
        key: value;
    }

    *Objects are considered Dictionaries
*/

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
//? Dot Notation
console.log(theSimpsons.genre); // animated
//? Square Bracket Notation
console.log(theSimpsons["genre"]); // animated
//? Accessing a key with spaces
console.log(theSimpsons.seasons["Season One"]);
//? Accessing further into a key
console.log(theSimpsons.seasons["Season One"][0]);
//? Adding a new key
theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
console.log(theSimpsons);

/*
    - Use an array method to add another character to the character array
    - console.log just the characters from theSimpsons object
*/

theSimpsons.characters.push("Krusty");
console.log(theSimpsons.characters);

theSimpsons.seasons["Season One"][1].aired= "1990-01-14";
console.log(theSimpsons.seasons["Season One"][1]);

