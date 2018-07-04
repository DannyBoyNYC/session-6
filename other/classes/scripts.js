class MovieCollection extends Array {
  constructor(name, ...items) {
    super(...items);
    this.name = name;
  }
  add(movie) {
    this.push(movie);
  }
}

const movies = new MovieCollection(
  'My Favorite Movies',
  { name: 'Sausage Party', stars: 10 },
  { name: 'Star Wars Trek', stars: 1 },
  { name: 'Virgin Suicides', stars: 7 },
  { name: 'Alice in the Cities', stars: 8 }
);

movies.add({ name: 'Titanic', stars: 5 });

console.table(movies);