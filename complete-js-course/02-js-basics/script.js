// Lecture: Variables
/* var name = "Tony";
console.log(name);

var lastName = "Stark";
console.log(lastName);

var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);
 */

 // Lecture: Variables Part 2
 /*
 var name = "Bruce";
 var age = 26;

//  console.log(name + age);
//  console.log(age + age);

 var job, isMarried;
 
//  console.log(job);

 job = "teacher";
 isMarried = false;

 console.log(name + " is a " + age + " years old "  + job + ". Is he married? " + isMarried + ".");

 age = "twenty six";
 job = "driver";

 console.log(name + " is a " + age + " years old "  + job + ". Is he married? " + isMarried + ".");

 var lastName = prompt("What is the last name?");
 console.log(lastName);

 alert(name + " is a " + age + " years old "  + job + ". Is he married? " + isMarried + ".");
*/


// Lecture: Operators
/*
var now = 2018;
var birthYear = now - 33;

birthYear = now - 33 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);

*/

// ---------------------------
// Lecture: IF/ELSE statements
// ---------------------------
/*
var name = "John";
var age = 26;
var isMarried = "yes";

if (isMarried === "yes") {
    console.log(name + " is married!");
} else {
    console.log(name + " will hopefully marry soon :)");    
}

isMarried = false;

if (isMarried) {
    console.log("YES!");
} else {
    console.log("NO!");    
}

if (23 === "23") {
    console.log("Something to print...");
}
*/


// ---------------------------------
// Lecture: Boolean logic and SWITCH
// ---------------------------------
/*
var age = 20;

if (age < 20) {
    console.log("John is a teenager");
} else if (age >= 20 && age < 30) {
    console.log("John is a young man");
} else {
    console.log("John is a man");
}

var job = "teacher";

job = prompt("What does John do?");

switch (job) {
    case "teacher":
        console.log("John teaches kids.");
        break;

    case "driver":
        console.log("John drives a cab in Lisbon");
        break;

    case "cop":
        console.log("John helps fight crimes.");
        break;

    default:
        console.log("John does something else");
        break;
}
*/

// ---------------------
// CODING CHALLENGE #1
// ---------------------
/*
var tonyHeight, tonyAge;
var steveHeight, steveAge;
var bruceHeight, bruceAge;

tonyHeight = 180;
tonyAge = 54;

steveHeight = 191;
steveAge = 114;

bruceHeight = 220;
bruceAge = 45;

var tonyScore = tonyHeight + 5 * tonyAge;
var steveScore = steveHeight + 5 * steveAge;
var bruceScore = bruceHeight + 5 * bruceAge;

console.log("Tony with " + tonyScore + " pts.");
console.log("Steve with " + steveScore + " pts.");
console.log("Bruce with " + bruceScore + " pts.");

if (tonyScore > steveScore && tonyScore > bruceScore) {
    console.log("Tony wins this one.");
} else if (steveScore > tonyScore && steveScore > bruceScore) {
    console.log("Steve wins this one.");
} else if (bruceScore > tonyScore && bruceScore > steveScore) {
    console.log("Bruce wins this one.");    
} else {
    console.log("It's a draw.");
}
*/

// --------------------
// Lecture: Functions
// --------------------
/*
function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);

function yearsUntilRetirement(name, yearOfBirth) {
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(name + " retires in " + retirement + " year(s).");    
    } else {
        console.log(name + " is already retired.");
    }
    
}

yearsUntilRetirement("John", 1990);
yearsUntilRetirement("Mike", 1969);
yearsUntilRetirement("Mary", 1948);
*/

// ------------------------------------
// Lecture : Statements and Expressions
// ------------------------------------
/*
// Statement --> produces nothing 
// Statement sample 1
if (x === 5) {
    // Do something
    
}

// Statement sample 2
function someFunction() {
    // Do something
}

// Expression --> produces a value
// Expression sample 1
3 + 4;
var x = 9;

// Expression sample 2
var otherFunction = function () {
    // Do something
}
*/

// -----------------
// Lecture : Arrays
// -----------------
/*
var names = ["John", "Jane", "Mark"];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);

names[1] = "Ben";
console.log(names);

var john = ["John", "Smith", 1990, "designer", false];

john.push("blue");
john.unshift("Mr.");
john.pop();
john.shift();
console.log(john);

if (john.indexOf("teacher") === -1) {
    console.log("John is NOT a teacher.");
}
*/

// -----------------
// Lecture : Objects
// -----------------
/*
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false
}

console.log(john.lastName);
console.log(john["lastName"]);

var xyz = "job";
console.log(john[xyz]);

john.lastName = "Miller";
john["job"] = "programmer";

console.log(john);

var jane = new Object();
jane.name = "Jane";
jane.lastName = "Smith";
jane["yearOfBirth"] = 1969;
jane["job"] = "retired";
jane["isMarried"] = true;

console.log(jane);
*/

// -----------------------------
// Lecture : Objects and Methods
// -----------------------------
/*
// version 1.0
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ["Jane", "Mark", "Bob"],

    calculateAge: function() {
        return 2018 - this.yearOfBirth;
    }
}


console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

// version 2.0
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ["Jane", "Mark", "Bob"],

    calculateAge: function() {
        this.age = 2018 - this.yearOfBirth;
    }
}

john.calculateAge();
console.log(john);

var mike = {
    name: "Mike",
    lastName: "Tyson",
    yearOfBirth: 1960,
    
    calculateAge: function() {
        this.age = 2018 - this.yearOfBirth;
    }
}

mike.calculateAge();
console.log(mike);
*/

// ---------------
// Lecture: Loops
// ---------------
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ["John", "Jane", "Mary", "Mark", "Bob"];

for (var index = 0; index < names.length; index++) {
    console.log(names[index]);
    
}

for (var index = names.length - 1; index >= 0; index--) {
    console.log(names[index]);
    
}

var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (var index = 0; index <= 5; index++) {
    console.log(index);

    if (index === 3) {
        break;
    }
}

for (var index = 0; index <= 5; index++) {
    if (index === 3) {
        continue;
    }

    console.log(index);
}
*/

// ------------------------
// CODING CHALLENGE PART 2
// ------------------------


function printFullAge(years) {
    var ages = [];
    var isFullAge = [];
    
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2018 - years[i];
    }
    
    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log("Person #" + (i + 1) + " is " + ages[i] + " years old, and is of full age.");
            isFullAge[i] = true;
        } else {
            console.log("Person #" + (i + 1) + " is " + ages[i] + " years old, and is NOT of full age.");
            isFullAge[i] = false;
        }
    }

    return isFullAge;
}

console.log("-- Function call #1 --");
var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);

console.log("-- Function call #2 --");
var full_2 = printFullAge([2012, 1915, 1999]);