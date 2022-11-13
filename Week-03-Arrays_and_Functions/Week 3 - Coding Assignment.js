
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

var names = ['Sam', 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

var sum = 0
var count = 0
for (const name of names) {
    sum += name.length;
    count += 1;
}

console.log(sum/count)


nameString = "";
for (const name of names) {
    nameString += name + " "
}
console.log(nameString)