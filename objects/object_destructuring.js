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
    characters: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
    currently_running: true,
};

let {characters} = theSimpsons;
console.log(characters); // console shows the character values

characters.push("Moe");
console.log(characters); // Adds Moe to character key

let {currently_running: on_air} = theSimpsons;
console.log(on_air);

let on_air2 = theSimpsons.currently_running;
console.log(on_air2);

//? Spread with Objects - Makes a new object with the objects listed under it

let simpsonsCharacters = {
    simpsonHouse: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
    moesTavern: ["Moe", "Barney"],
};

let generalLocations = {
    park: "Statue",
    beach: "Dock",
    lake: "3 Eyed Fish",
};

let locations = {
    ...simpsonsCharacters,
    dmv: ["Patty", "Selma"],
    ...generalLocations,
}

console.log(locations);

console.log(locations.simpsonHouse);

theSimpsons = {
    ...theSimpsons,
    locations: {...locations},
};

console.log(theSimpsons);