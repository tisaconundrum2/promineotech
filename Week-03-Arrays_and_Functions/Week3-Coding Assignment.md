# Week 3: Coding Assignment
### URL to GitHub Repository:
https://github.com/tisaconundrum2/promineotech

### URL to Your Coding Assignment Video:


## Instructions:
- In Visual Studio Code, write the code that accomplishes the objectives listed below and ensures that the code compiles and runs as directed. 
- Create a new repository on GitHub for this week’s assignments and push this document, with your project code, to the repository.
- Include the URLs for this week’s repository and video where instructed.
- Submit this document as a .PDF file in the LMS.

## Coding Steps:
All questions must be printed to your Browser’s console:

1 . Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
a. Programmatically subtract the value of the first element in the array from the value in the last element of the array
   - Do not use numbers to reference the last element, find it programmatically, 
   - ages[7] – ages[0] is not allowed!
```
// Programmatically subtract the value of the first element in the array from the value in the last element of the array
/*
Citation
https://www.w3schools.com/jsref/jsref_length_array.asp
https://stackoverflow.com/questions/1617157/how-to-get-the-first-item-from-an-associative-php-array
*/
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var lastEl = ages.length - 1;

console.log(ages[lastEl] - ages[0])
```

```
"C:\Program Files\nodejs\node.exe" ".\Week 3 - Coding Assignment.js"
90
``` 
b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

```
/*
Citation
https://www.google.com/search?client=firefox-b-1-d&q=add+element+to+array+javascript
*/
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(52)
var lastEl = ages.length - 1;

console.log(ages[lastEl] - ages[0])
```

```
"C:\Program Files\nodejs\node.exe" ".\Week 3 - Coding Assignment.js"
49
```
c. Use a loop to iterate through the array and calculate the average age. 

```
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(52);
var lastEl = ages.length - 1;

var total = 0;
for (const age of ages) {
    total += age;
}
var average = total / lastEl;
console.log(average)
```
```
"C:\Program Files\nodejs\node.exe" ".\Week 3 - Coding Assignment.js"
35.25
```

2 . Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
- Use a loop to iterate through the array and calculate the average number of letters per name. 
- Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
```
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
```
```
"C:\Program Files\nodejs\node.exe" ".\Week 3 - Coding Assignment.js"
3.7142857142857144
```

3 .	How do you access the last element of any array?
You can access the element by utilizing array.length property, which gives you the total size of the array.
You can then use a bracket `[]` with th `array.length` inside to get the last element.

4 .	How do you access the first element of any array?
You can simply use `[0]` to get the first element.

5 .	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:
```
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array
```

```
// Create a new array called nameLengths. 
// Write a loop to iterate over the previously created names array 
// add the length of each name to the nameLengths array.


var namesArray = ["Kelly", "Sam", "Kate"] //given this array
var nameLengths = [] //create this new array

for (const name of namesArray) {
    nameLengths += name.length;
}
console.log(nameLengths)
```

6 .	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
```

```

7 . Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

8 . Write a function that takes two parameters, firstName and lastName, and returns a full name.
- The full name should be the first and the last name separated by a space.

9 . Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

10 . Write a function that takes an array of numbers and returns the average of all the elements in the array.

11 . Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

12 .	Write a function called willBuyDrink that takes a booleanisHotOutside, and a numbermoneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

13 .	Create a function of your own that solves a problem. 
- In comments, write what the function does and why you created it.


## Video Steps:
- Create a video, up to five minutes max, showing and explaining how your project works with an emphasis on the portions you contributed. 
- This video should be done using screen share and voice over. 
- This can easily be done using Zoom, although you don't have to use Zoom, it's just what we recommend. 
- You can create a new meeting, start screen sharing, and start recording. 
  - This will create a video recording on your computer. 
- This should then be uploaded to a publicly accessible site, such as YouTube. 
  - Ensure the link you share isPUBLIC or UNLISTED!
  - If it is not accessible by your grader, your project will be graded based on what they can access.