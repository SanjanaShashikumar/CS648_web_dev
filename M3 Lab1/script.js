//1. Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
var movies = ["Inception", "Interstellar", "The Dark Knight", "Arrival", "Spirited Away"];
console.log(movies[1]); // second movie (index 1)

//2. Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
var movies = new Array(5);
movies[0] = "Inception";
movies[1] = "Interstellar";
movies[2] = "The Dark Knight";
movies[3] = "Arrival";
movies[4] = "Spirited Away";

console.log(movies[0]);



// 3. Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
var movies = new Array(5);
movies[0] = "Inception";
movies[1] = "Interstellar";
movies[2] = "The Dark Knight";
movies[3] = "Arrival";
movies[4] = "Spirited Away";

movies.splice(2, 0, "The Matrix"); // insert at index 2
console.log(movies.length); // 6


// 4. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
var movies = ["Inception", "Interstellar", "The Dark Knight", "Arrival", "Spirited Away"];
delete movies[0];

console.log(movies);


// 5.Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.
var movies = ["Inception", "Interstellar", "The Dark Knight", "Arrival", "Spirited Away", "The Matrix", "Blade Runner 2049"];

for (var index in movies) {
  console.log(movies[index]);
}


// 6. Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
var movies = ["Inception", "Interstellar", "The Dark Knight", "Arrival", "Spirited Away", "The Matrix", "Blade Runner 2049"];

for (var movie of movies) {
  console.log(movie);
}

// 7. Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
var movies = ["Inception", "Interstellar", "The Dark Knight", "Arrival", "Spirited Away", "The Matrix", "Blade Runner 2049"];

var sortedMovies = movies.slice().sort();

for (var movie of sortedMovies) {
  console.log(movie);
}


// 8. Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):

// Movies I like:

// Movie 1
// Movie 2
// Movie 3
// …

// Movies I regret watching:

// Movie 1
// Movie 2
// Movie 3
// …
var movies = ["Inception", "Interstellar", "The Dark Knight", "Arrival", "Spirited Away", "The Matrix", "Blade Runner 2049"];
var leastFavMovies = ["Movie 43", "Cats", "The Last Airbender"];

console.log("Movies I like:\n");
for (var movie of movies) {
  console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (var badMovie of leastFavMovies) {
  console.log(badMovie);
}



// 9. Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
var movies = ["Inception", "Interstellar", "The Dark Knight", "Arrival", "Spirited Away", "The Matrix", "Blade Runner 2049"];
var leastFavMovies = ["Movie 43", "Cats", "The Last Airbender"];

movies = movies.concat(leastFavMovies);

var reverseSorted = movies.slice().sort().reverse();
for (var movie of reverseSorted) {
  console.log(movie);
}


// 10. Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
var movies = ["Inception", "Interstellar", "The Dark Knight", "Arrival", "Spirited Away", "The Matrix", "Blade Runner 2049"];
var leastFavMovies = ["Movie 43", "Cats", "The Last Airbender"];
movies = movies.concat(leastFavMovies);

var lastMovie = movies.slice(-1)[0];
console.log(lastMovie);


// 11. Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
var movies = ["Inception", "Interstellar", "The Dark Knight", "Arrival", "Spirited Away", "The Matrix", "Blade Runner 2049"];
var leastFavMovies = ["Movie 43", "Cats", "The Last Airbender"];
movies = movies.concat(leastFavMovies);

var firstMovie = movies.shift();
console.log(firstMovie);


// 12. Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.
var movies = ["Inception", "Interstellar", "The Dark Knight", "Arrival", "Spirited Away", "The Matrix", "Blade Runner 2049"];
var leastFavMovies = ["Movie 43", "Cats", "The Last Airbender"];

movies = movies.concat(leastFavMovies);

// find indices of movies you don't like
var badIndices = [];
for (var i = 0; i < movies.length; i++) {
  if (leastFavMovies.indexOf(movies[i]) !== -1) {
    badIndices.push(i);
  }
}
console.log("Bad indices:", badIndices);

// replace them with movies you do like (same count as bad indices)
var replacements = ["Dune", "Parasite", "Mad Max: Fury Road"];

for (var j = 0; j < badIndices.length; j++) {
  movies[badIndices[j]] = replacements[j];
}

console.log(movies);


// 13. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:
// movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
// Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

var movies = [
  ["Inception", 1],
  ["Interstellar", 2],
  ["The Dark Knight", 3],
  ["Arrival", 4],
  ["Spirited Away", 5]
];

for (var item of movies) {
  var namesOnly = item.filter(function(x) {
    return typeof x === "string";
  });
  console.log(namesOnly[0]);
}


// 14. Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
// Employees:

// ZAK
// JESSICA
// MARK
// FRED
// SALLY

var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

var showEmployee = function(list) {
  console.log("Employees:\n");
  for (var name of list) {
    console.log(name.toUpperCase());
  }
};

showEmployee(employees);


// 15. Write a JavaScript function to filter false, null, 0 and blank values from an array.
// Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
// Expected Result: [58, "abcd", true]
function filterValues(arr) {
  return arr.filter(function(item) {
    return item !== false && item !== null && item !== 0 && item !== "";
  });
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
// Expected: [58, "abcd", true]


// 16. Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
function getRandomItem(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(getRandomItem(numbers));

// 17. Write a JavaScript function to get the largest number from a numeric array.
function getLargestNumber(arr) {
  return Math.max.apply(null, arr);
}

console.log(getLargestNumber([10, 4, 88, 2, 99, 30])); // 99