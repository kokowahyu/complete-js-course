///////////////////////////////////////
// Lecture: Hoisting
/*
// FUNCTION HOISTING
// This function call can be executed
calculcateAge(1985);

function calculcateAge(year) {
    console.log(2018 - year);
}

// This function call CANNOT be executed
// retirement(1985);

var retirement = function (year) {
    console.log(60 - (2018 - year));
}

// This function call can be executed
retirement(1985);

// VARIABLES HOISTING

console.log(age);
var age = 56;

function foo() {
    var age = 25;
    console.log(age);
}

foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example


/* var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
} */




// Example to show the differece between execution stack and scope chain

/* 
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
 */



///////////////////////////////////////
// Lecture: The this keyword

/* calculcateAge(1985);

function calculcateAge(year) {
    console.log(2018 - year);
    console.log(this);
    
} */

var john = {
    name: "John",
    yearOfBirth: 1985,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);
        
        /* innerFunction();
        function innerFunction() {
            console.log(this);
            
        } */
    }
}

john.calculateAge();

var mike = {
    name: "Mike",
    yearOfBirth: 1990
}


// Method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();
