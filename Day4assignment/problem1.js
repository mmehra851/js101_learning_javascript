//Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties


let yob = 1998;
 
let curr_year = 2022;

let age = curr_year - yob; 


if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else if (age >= 20 && age <= 29) {
  console.log("Twenties");
}





