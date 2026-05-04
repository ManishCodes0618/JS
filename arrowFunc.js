//actual explicit return
const add = (x, y) => {
  return x + y;
};

//implicit return(WORKS ONLY WHEN THERE IS A SINGLE EXPRESSION)
// const add = (x, y) => x + y;
// //or
// const add = (x, y) => x + y;

const square = (x) => {
  return x * x;
};
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach((num) => {
  console.log(num * num);
});

nums.forEach((num) => {
  if (num % 2 == 0) {
    console.log(num);
  }
});

const movies = [
  {
    title: "The Matrix",
    director: "The Wachowskis",
    score: 90,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    score: 95,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    score: 97,
  },
  {
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    score: 99,
  },
];

const arr = movies.map((movie) => {
  return movie.title;
});

const mvs = movies.map((movie) => {
  return `${movie.title} - ${movie.director}`;
});

console.log("YO!");
setTimeout(() => {
  console.log("Hello");
}, 3000);

setInterval(() => {
  console.log("HEY YOU THERE?!");
}, 3000);

clearInterval(2); //2 is the id of the above setInterval function which i got to know after i stored it in a variable id and printed the id.
//to stop executing the above setInterval function, we store it in a variable and execute clearInterval(id)..
//eg const id = setInterval(() => {console.log("HEY YOU THERE?!");}, 3000);
//clearInterval(id);

//filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odds = numbers.filter((x) => {
  return x % 2 === 0;
});
const spec = numbers.filter((x) => {
  return x > 5;
});

//filter and map together
const goodMovies = movies.filter((x) => {
  return x.score > 95;
});

const goodTitles = goodMovies.map((x) => {
  return x.title;
});

//every and some
const lessThan11 = numbers.every((x) => {
  return x < 10;
});

const equals7 = numbers.some((x) => {
  return x === 7;
});

//reduce method
const total = numbers.reduce((accumulator, curr) => {
  return accumulator + curr;
});

const mini = numbers.reduce((min, curr) => {
  if (curr < min) {
    return curr;
  }
  return min;
});
