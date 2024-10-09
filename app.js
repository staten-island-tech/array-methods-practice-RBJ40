const movie = {
  //Object
  title: "Star Wars",
  release: 1977,
  actors: ["Mark", "Harrison", "Carrie"],
};
movies.forEach((movie) => console.log(movie.title));
//Array name DOT Array command then arrow function that accepts singular element of array
const newMovies = movies.filter((movie) => movie.release > 1990);

const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];
students.forEach((student) => console.log(student.name, student.grade));
const topStudents = students.filter((students) => students.grade > 80);
topStudents.forEach((topStudent) => console.log(topStudents.name));
const youngStudents = youngStudents.filter((students) => students.age <= 21);
youngStudents.forEach((youngStudent) => console.log(youngStudents.name));
