/*
!   Challenge Details:
    - Create an object called "hulu". - DONE

    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies. - DONE
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an integer
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects. - DONE
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/

let hulu = {
    id: 1,
    movies: [
        {
            title: "Time Flies",
            genre: ["Fantasy", "Adventure"],
            rating: "PG-13",
            runtime: 135,
            year: 2000,
        },
        {
            title: "Time Flies 2",
            genre: ["Fantasy","Adventure"],
            rating: "PG-13",
            runtime: 155,
            year: 2004,
        },    
    ],
    shows: [
        {
            title: "Loki",
            numOfSeasons: 2,
            seasons: [
                {
                    season: 1,
                    numOfEpisodes: 2,
                    episodes: [
                        {
                            episode_title: "Loki",
                            aired: "2020-01-01"
                        },
                        {
                            episode_title: "Loki 2",
                            aired: "2020-02-01"
                        }
                    ]
                },
                {
                    season: 2,
                    numOfEpisodes: 2,
                    episodes: [
                        {
                            episode_title: "Loki 2-1",
                            aired: "2023-01-01"
                        },
                        {
                            episode_title: "Loki 2-2",
                            aired: "2023-02-01"
                        },
                    ],
                },
            ],
        },
    ],
};

console.log(hulu.movies);
console.log(hulu.shows[0].title);
console.log(hulu.shows[0].seasons[1].episodes[0].episode_title);