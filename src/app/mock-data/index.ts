import uuid4 from 'uuid/v4';

export default [
  {
    id: uuid4(),
    Title: 'Joker',
    Year: '2019',
    Rated: 'R',
    Released: '04 Oct 2019',
    Runtime: '121 min',
    Genre: 'Crime, Drama, Thriller',
    Director: 'Todd Phillips',
    Writer: 'Todd Phillips, Scott Silver',
    Actors: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy',
    Plot:
      'A gritty character study of Arthur Fleck, a man disregarded by society.',
    Language: 'English',
    Country: 'USA, Canada',
    Awards: 'N/A',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '9.1/10' },
      { Source: 'Rotten Tomatoes', Value: '77%' },
      { Source: 'Metacritic', Value: '58/100' },
    ],
    Metascore: '58',
    imdbRating: '9.1',
    imdbVotes: '87,202',
    imdbID: 'tt7286456',
    Type: 'movie',
    DVD: 'N/A',
    BoxOffice: 'N/A',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True',
    videoURL: 'https://www.youtube.com/embed/zAGVQLHvwOY'
  },
  { id: uuid4(), "Title": "Black Panther", "Year": "2018", "Rated": "PG-13", "Released": "16 Feb 2018", "Runtime": "134 min", "Genre": "Action, Adventure, Sci-Fi", "Director": "Ryan Coogler", "Writer": "Ryan Coogler, Joe Robert Cole, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel Comics by)", "Actors": "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira", "Plot": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.", "Language": "English, Swahili, Nama, Xhosa, Korean", "Country": "USA", "Awards": "14 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.3/10" }, { "Source": "Rotten Tomatoes", "Value": "96%" }, { "Source": "Metacritic", "Value": "88/100" }], "Metascore": "88", "imdbRating": "7.3", "imdbVotes": "545,565", "imdbID": "tt1825683", "Type": "movie", "DVD": "15 May 2018", "BoxOffice": "$501,105,037", "Production": "Marvel Studios", "Website": "https://www.marvel.com/movies/black-panther", "Response": "True", videoURL: "https://www.youtube.com/embed/vt9UZo32KMk" },
  {
    id: uuid4(),
    Title: 'Gemini Man',
    Year: '2019',
    Rated: 'PG-13',
    Released: '11 Oct 2019',
    Runtime: '117 min',
    Genre: 'Action, Drama, Sci-Fi, Thriller',
    Director: 'Ang Lee',
    Writer:
      'David Benioff (screenplay), Billy Ray (screenplay), Darren Lemke (screenplay), Darren Lemke (story), David Benioff (story)',
    Actors: 'Will Smith, Mary Elizabeth Winstead, Clive Owen, Benedict Wong',
    Plot:
      'An over-the-hill hitman faces off against a younger clone of himself.',
    Language: 'English',
    Country: 'China, USA',
    Awards: 'N/A',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMWVmZmQ1YzEtOTI0OS00MjUyLWI5OWQtMTcyNjlhN2E1OWViXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '4.9/10' },
      { Source: 'Rotten Tomatoes', Value: '43%' },
      { Source: 'Metacritic', Value: '33/100' },
    ],
    Metascore: '33',
    imdbRating: '4.9',
    imdbVotes: '294',
    imdbID: 'tt1025100',
    Type: 'movie',
    DVD: 'N/A',
    BoxOffice: 'N/A',
    Production: 'Paramount Pictures',
    Website: 'N/A',
    Response: 'True',
    videoURL: "https://www.youtube.com/embed/rF_SBbGfQPQ"
  },

  { id: uuid4(), "Title": "Deadpool", "Year": "2016", "Rated": "R", "Released": "12 Feb 2016", "Runtime": "108 min", "Genre": "Action, Adventure, Comedy, Sci-Fi", "Director": "Tim Miller", "Writer": "Rhett Reese, Paul Wernick", "Actors": "Ryan Reynolds, Karan Soni, Ed Skrein, Michael Benyaer", "Plot": "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.", "Language": "English", "Country": "USA", "Awards": "Nominated for 2 Golden Globes. Another 27 wins & 73 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.0/10" }, { "Source": "Rotten Tomatoes", "Value": "84%" }, { "Source": "Metacritic", "Value": "65/100" }], "Metascore": "65", "imdbRating": "8.0", "imdbVotes": "839,040", "imdbID": "tt1431045", "Type": "movie", "DVD": "10 May 2016", "BoxOffice": "$328,674,489", "Production": "20th Century Fox", "Website": "N/A", "Response": "True", videoURL: 'https://www.youtube.com/embed/D86RtevtfrA' },
  {
    id: uuid4(),
    Title: 'Aquaman',
    Year: '2018',
    Rated: 'PG-13',
    Released: '21 Dec 2018',
    Runtime: '143 min',
    Genre: 'Action, Adventure, Fantasy, Sci-Fi',
    Director: 'James Wan',
    Writer:
      'David Leslie Johnson-McGoldrick (screenplay by), Will Beall (screenplay by), Geoff Johns (story by), James Wan (story by), Will Beall (story by), Paul Norris (Aquaman created by), Mort Weisinger (Aquaman created by)',
    Actors: 'Jason Momoa, Amber Heard, Willem Dafoe, Patrick Wilson',
    Plot:
      'Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.',
    Language: 'English, Russian, Maori, Italian',
    Country: 'USA, Australia',
    Awards: 'N/A',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.0/10' },
      { Source: 'Rotten Tomatoes', Value: '65%' },
      { Source: 'Metacritic', Value: '55/100' },
    ],
    Metascore: '55',
    imdbRating: '7.0',
    imdbVotes: '299,582',
    imdbID: 'tt1477834',
    Type: 'movie',
    DVD: 'N/A',
    BoxOffice: 'N/A',
    Production: 'Warner Bros. Pictures',
    Website: 'http://www.aquamanmovie.com/',
    Response: 'True',
    videoURL: "https://www.youtube.com/embed/WDkg3h8PCVU"
  },
  {
    id: uuid4(),
    Title: '2 Fast 2 Furious',
    Year: '2003',
    Rated: 'PG-13',
    Released: '06 Jun 2003',
    Runtime: '107 min',
    Genre: 'Action, Crime, Thriller',
    Director: 'John Singleton',
    Writer:
      'Gary Scott Thompson (characters), Michael Brandt (story), Derek Haas (story), Gary Scott Thompson (story), Michael Brandt (screenplay), Derek Haas (screenplay)',
    Actors: 'Paul Walker, Tyrese Gibson, Eva Mendes, Cole Hauser',
    Plot:
      "Former cop Brian O'Conner is called upon to bust a dangerous criminal and he recruits the help of a former childhood friend and street racer who has a chance to redeem himself.",
    Language: 'English, Spanish',
    Country: 'USA, Germany',
    Awards: '4 wins & 13 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '5.9/10' },
      { Source: 'Rotten Tomatoes', Value: '36%' },
      { Source: 'Metacritic', Value: '38/100', },
    ],
    Metascore: '38',
    imdbRating: '5.9',
    imdbVotes: '235,844',
    imdbID: 'tt0322259',
    Type: 'movie',
    DVD: '30 Sep 2003',
    BoxOffice: '$127,083,765',
    Production: 'Universal Pictures Distributio',
    Website: 'N/A',
    Response: 'True',
    videoURL: "https://www.youtube.com/embed/F_VIM03DXWI"
  },
  {
    id: uuid4(),
    Title: 'Johnny English',
    Year: '2003',
    Rated: 'PG',
    Released: '18 Jul 2003',
    Runtime: '87 min',
    Genre: 'Action, Adventure, Comedy',
    Director: 'Peter Howitt',
    Writer: 'Neal Purvis, Robert Wade, William Davies',
    Actors: 'Rowan Atkinson, Tasha de Vasconcelos, Ben Miller, Greg Wise',
    Plot:
      "After a sudden attack on the MI5, Johnny English, Britain's most confident yet unintelligent spy, becomes Britain's only spy.",
    Language: 'English, French, Japanese',
    Country: 'UK, France, USA',
    Awards: '6 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDkxODhlNmItYjhiMC00ZjNmLWE2YmMtOTQ3NmQxM2YzOGFiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '6.2/10' },
      { Source: 'Rotten Tomatoes', Value: '33%' },
      { Source: 'Metacritic', Value: '51/100' },
    ],
    Metascore: '51',
    imdbRating: '6.2',
    imdbVotes: '139,284',
    imdbID: 'tt0274166',
    Type: 'movie',
    DVD: '13 Jan 2004',
    BoxOffice: '$27,972,410',
    Production: 'Universal Pictures',
    Website: 'N/A',
    Response: 'True',
    videoURL: "https://www.youtube.com/embed/7mT8El4mBVw"
  },
  { id: uuid4(), "Title": "Avengers: Endgame", "Year": "2019", "Rated": "PG-13", "Released": "26 Apr 2019", "Runtime": "181 min", "Genre": "Action, Adventure, Sci-Fi", "Director": "Anthony Russo, Joe Russo", "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (Thanos, Gamora & Drax created by), Jack Kirby (Groot created by)", "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth", "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", "Language": "English, Japanese, Xhosa", "Country": "USA, UK, Canada", "Awards": "N/A", "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.6/10" }, { "Source": "Rotten Tomatoes", "Value": "94%" }, { "Source": "Metacritic", "Value": "78/100" }], "Metascore": "78", "imdbRating": "8.6", "imdbVotes": "561,813", "imdbID": "tt4154796", "Type": "movie", "DVD": "30 Jul 2019", "BoxOffice": "N/A", "Production": "Marvel Studios", "Website": "N/A", "Response": "True", videoURL: "https://www.youtube.com/embed/TcMBFSGVi1c" },

  { id: uuid4(), "Title": "Avatar", "Year": "2009", "Rated": "PG-13", "Released": "18 Dec 2009", "Runtime": "162 min", "Genre": "Action, Adventure, Fantasy, Sci-Fi", "Director": "James Cameron", "Writer": "James Cameron", "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang", "Plot": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.", "Language": "English, Spanish", "Country": "USA", "Awards": "Won 3 Oscars. Another 85 wins & 128 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.8/10" }, { "Source": "Rotten Tomatoes", "Value": "82%" }, { "Source": "Metacritic", "Value": "83/100" }], "Metascore": "83", "imdbRating": "7.8", "imdbVotes": "1,059,860", "imdbID": "tt0499549", "Type": "movie", "DVD": "22 Apr 2010", "BoxOffice": "$749,700,000", "Production": "20th Century Fox", "Website": "N/A", "Response": "True", videoURL: "https://www.youtube.com/embed/6ziBFh3V1aM" },

  { id: uuid4(), "Title": "Ready Player One", "Year": "2018", "Rated": "PG-13", "Released": "29 Mar 2018", "Runtime": "140 min", "Genre": "Action, Adventure, Sci-Fi", "Director": "Steven Spielberg", "Writer": "Zak Penn (screenplay by), Ernest Cline (screenplay by), Ernest Cline (based on the novel by)", "Actors": "Tye Sheridan, Olivia Cooke, Ben Mendelsohn, Lena Waithe", "Plot": "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.", "Language": "English", "Country": "USA, India", "Awards": "N/A", "Poster": "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.5/10" }, { "Source": "Rotten Tomatoes", "Value": "72%" }, { "Source": "Metacritic", "Value": "64/100" }], "Metascore": "64", "imdbRating": "7.5", "imdbVotes": "316,225", "imdbID": "tt1677720", "Type": "movie", "DVD": "03 Jul 2018", "BoxOffice": "N/A", "Production": "Warner Bros. Pictures", "Website": "N/A", "Response": "True", videoURL: "https://www.youtube.com/embed/cSp1dM2Vj48" },

  { id: uuid4(), "Title": "The Matrix Reloaded", "Year": "2003", "Rated": "R", "Released": "15 May 2003", "Runtime": "138 min", "Genre": "Action, Sci-Fi", "Director": "Lana Wachowski, Lilly Wachowski", "Writer": "Lilly Wachowski, Lana Wachowski, Lilly Wachowski (characters), Lana Wachowski (characters)", "Actors": "Ray Anthony, Christine Anu, Andy Arness, Alima Ashton-Sheibu", "Plot": "Following the events of The Matrix (1999), Neo and the rebel leaders estimate they have 72 hours until 250,000 probes discover Zion and destroy it and its inhabitants. Neo must decide how he can save Trinity from a dark fate in his dreams.", "Language": "English, French", "Country": "USA", "Awards": "8 wins & 31 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.2/10" }, { "Source": "Rotten Tomatoes", "Value": "73%" }, { "Source": "Metacritic", "Value": "62/100" }], "Metascore": "62", "imdbRating": "7.2", "imdbVotes": "485,741", "imdbID": "tt0234215", "Type": "movie", "DVD": "14 Oct 2003", "BoxOffice": "$281,500,000", "Production": "Warner Bros. Pictures", "Website": "N/A", "Response": "True", videoURL: "https://www.youtube.com/embed/m8e-FF8MsqU" },

  { id: uuid4(), "Title": "Scarface", "Year": "1983", "Rated": "R", "Released": "09 Dec 1983", "Runtime": "170 min", "Genre": "Crime, Drama", "Director": "Brian De Palma", "Writer": "Oliver Stone (screenplay by)", "Actors": "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio", "Plot": "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.", "Language": "English, Spanish", "Country": "USA", "Awards": "Nominated for 3 Golden Globes. Another 4 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.3/10" }, { "Source": "Rotten Tomatoes", "Value": "81%" }, { "Source": "Metacritic", "Value": "65/100" }], "Metascore": "65", "imdbRating": "8.3", "imdbVotes": "676,724", "imdbID": "tt0086250", "Type": "movie", "DVD": "30 Sep 2003", "BoxOffice": "$656,161", "Production": "Universal Films", "Website": "N/A", "Response": "True", videoURL: "https://www.youtube.com/embed/vREl66xmXsE" },


  { id: uuid4(), "Title": "Shaolin Soccer", "Year": "2001", "Rated": "PG", "Released": "12 Jul 2001", "Runtime": "87 min", "Genre": "Action, Comedy, Fantasy, Sport", "Director": "Stephen Chow", "Writer": "Stephen Chow, Kan-Cheung Tsang, Min Hun Fung, Chi Keung Fung, Marc Handler (dubbed version), Wei Lu", "Actors": "Stephen Chow, Man-Tat Ng, Wei Zhao, Yin Tse", "Plot": "A young Shaolin follower reunites with his discouraged brothers to form a soccer team using their martial art skills to their advantage.", "Language": "English, Cantonese, Mandarin", "Country": "Hong Kong, China", "Awards": "12 wins & 14 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BZjdiYTBiMDUtNTg0Yy00N2NhLWIxZmEtMTEwNDNlYzRkMGY3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.2/10" }, { "Source": "Rotten Tomatoes", "Value": "90%" }, { "Source": "Metacritic", "Value": "68/100" }], "Metascore": "68", "imdbRating": "7.2", "imdbVotes": "69,486", "imdbID": "tt0286112", "Type": "movie", "DVD": "24 Aug 2004", "BoxOffice": "$172,448", "Production": "Miramax Films", "Website": "N/A", "Response": "True", videoURL: "https://www.youtube.com/embed/6FAaOwNnHTA" },
];

