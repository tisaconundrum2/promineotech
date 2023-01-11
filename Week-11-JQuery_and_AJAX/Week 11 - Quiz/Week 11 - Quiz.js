/**
Assume that you have an array of customer objects like this:

[
  {
    firstName: "Sam",
    lastName: "Smith",
    email: "sam.smith@gmail.com"
  },
  {
    firstName: "Tom",
    lastName: "Jones",
    email: "tom.jones@gmail.com"
  },
......
]

[x] Also, assume your HTML contains a table with an id of "customer-table" 
[ ] columns First Name, Last Name, and Email Address. 
[ ] Using JQuery, write the code needed to add a new row to the table for each customer in the returned array.

 */

let input_table = [
  {
    firstName: "Sam",
    lastName: "Smith",
    email: "sam.smith@gmail.com"
  },
  {
    firstName: "Tom",
    lastName: "Jones",
    email: "tom.jones@gmail.com"
  },
  {
    firstName: "Scott",
    lastName: "King",
    email: "ScottNKing@dayrep.com"
  },
  {
    firstName: "Martin",
    lastName: "Earl",
    email: "EarlHMartin@jourrapide.com"
  }
]

for (const elem of input_table) {
  console.log(elem.firstName);
  console.log(elem.lastName);
  console.log(elem.email);
}