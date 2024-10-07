const students = ["Matt", "Mark", "Josephine", "Thomas"];
console.log(students[0]);
students.forEach((student) => console.log(student)); //loops through each element in the list
const movie = {
  //Object
  title: "Star Wars",
  release: 1977,
  actors: ["Mark", "Harrison", "Carrie"],
};
movies.forEach((movie) => console.log(movie.title));
//Array name DOT Array command then arrow function that accepts singular element of array
const newMovies = movies.filter((movie) => movie.release > 1990);
