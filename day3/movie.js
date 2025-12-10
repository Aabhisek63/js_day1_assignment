let movies = ["Inception", "Interstellar", "Avatar"];

movies.push("The Dark Knight");

movies.pop();

console.log("Final Movie List:");
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}
