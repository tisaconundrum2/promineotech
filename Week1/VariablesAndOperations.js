//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 10;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 10.00;

//create a variable to hold a person's middle initial
let personMiddleInitial = "M"

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = true;
isHotOutside = false;

//create a variable to hold a customer's first name
let customerFirstName = "Mike";

//create a variable to hold a street address
let streetAddr = "1234 W Easy St"

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(personMiddleInitial);
console.log(isHotOutside);
console.log(customerFirstName);
console.log(streetAddr);

//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats -= 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
personMiddleInitial = "G";
console.log(personMiddleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let fullName = customerFirstName + " " + personMiddleInitial  + " Johnson";
console.log(fullName)

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hi my name is " + fullName + " and I live at " + streetAddr + ".");