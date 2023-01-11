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

// $('#myTable tr:last').after('<tr>...</tr><tr>...</tr>');
// https://stackoverflow.com/questions/171027/adding-a-table-row-in-jquery

for (const elem of input_table) {
  $('#customer-table tr:last').after(
    `
              <tr>
                  <td>${elem.firstName}</td>
                  <td>${elem.lastName}</td>
                  <td>${elem.email}</td>
              </tr>
  `);
}