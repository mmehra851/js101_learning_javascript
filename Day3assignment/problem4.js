//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

// username and password stored in database.

let username = "manishmehra123";
let password = "M@nish777";

// Entered username and password
let ent_username = "manishmehra124";
let ent_password = "M@nish777";

if (username==ent_username) {
  if (password==ent_password) {
    console.log("user can login");
  } else {
    console.log("wrong password") ;
  }
} else {
  console.log("user can not login");
}