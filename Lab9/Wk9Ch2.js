//popup asking for user age
var userAge = prompt ("Enter your age");
console.log(userAge);

//calls current date and picks out just the year
var now = new Date();
var theYear = now.getFullYear();
console.log(theYear);

//subtracts age from current year to get birth year
var birthYear = theYear - userAge;
console.log(birthYear);

//prints it on page
document.write("You were born in " + birthYear);
