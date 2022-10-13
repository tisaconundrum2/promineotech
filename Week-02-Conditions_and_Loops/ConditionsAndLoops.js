// Create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100
var speedLimit = 60;
var mySpeed = 65;

// using a conditional, determine if mySpeed is greater than the speedLimit
// if true, print "Slow Down! Mom is mad!" to the console
// if mySpeed is equal to the speedLimit, print "Everyone is Happy!" to the console
// if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"

if (mySpeed < speedLimit) {
    console.log("Speed up! Dad is mad!");
} else if (mySpeed > speedLimit) {
    console.log("Slow Down! Mom is mad!");
} else {
    console.log("Everyone is happy!");
};

// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value

var alarmSet = true;
var openDoor = true;

// using a conditional, determine if alarm is set.
// if alarm is set and door is set to open, print "Sound Alarm!" to the console
// otherwise, print "Everything is fine." to the console.

/* alarmSet, true; openDoor, true; Alarm
 * alarmSet, false; openDoor, true; Ok
 * alarmSet, true; openDoor, false; Ok
 * alarmSet, false; openDoor, false; Ok
 */

if (alarmSet === true && openDoor === true) {
    console.log("Sound Alarm!");
} else {
    console.log("Everything is fine.");
};

// Create two variables, username and password
// create a conditional, if the username "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to console
// otherwise, print "Admin Access Denied"

var username = "";
var password = "";

if ((username === "Tommy123" && password === "12345") ||
    (username === "Timmy456" && password === "6789")) {
    console.log("Admin Login Successful");
} else {
    console.log("Admin Access Denied");
};

// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman
// 10 Sophmore
// 11 Junior
// 12 Senior
// Anything other than these values will return "Error" to the console

const key = {
    "K": "Elementary",
    "1": "Elementary",
    "2": "Elementary",
    "3": "Elementary",
    "4": "Elementary",
    "5": "Elementary",
    "6": "Elementary",
    "7": "Middle",
    "8": "Middle",
    "9": "Freshman",
    "10": "Sophmore",
    "11": "Junior",
    "12": "Senior"
}

var studentClass = 