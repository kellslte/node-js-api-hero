// Basic Concepts Contd.
// 4. Control Flow
// 5. Functions
// 6. Objects
// 7. Arrays
// 8. Loops
// 9. ECMAScript Specifications
// 10. Modules and Common JS

// 4. Control Flow
// 4.1. If-Else
// 4.2. Switch
// 4.3. Ternary Operator
// 4.4. Loops
// 4.5. Break and Continue
// 4.6. Loops with Labels
// 4.7. Loops with Labels
// 4.8. Loops with Labels

// If-Else
let age = 18;

if (age < 18) {
//   console.log("You are a minor and you cannot vote");
}
if ( age >= 18 && age <= 30 )
{
    // console.log( "You are an adult, you can vote and contest elections" );
}

// Switch
// switch (age) {
//   case age < 18:
//     console.log("You are a minor, you cannot vote");
//     break;
//   case age >= 18 && age <= 30:
//     console.log("You are an adult, you can vote and contest elections");
//     break;

//   default:
//     console.log("You can vote");
//     break;
// }

// Tenary Operator
const  canVote = age < 18 ? "You cannot vote" : "You can vote";

// Loops
// 1. For Loop
// for (let i = 0; i < 10; i++) {
//     if ( i % 2 === 0 ) continue;
//     console.log( `i is ${i} in the for loop` );
// }

// 2. While Loop
// let i = 0;
// while (i < 10) {
//   console.log(`i is ${i} in the while oop`);
//   i++;
// }

// 3. Do-While Loop
// do {
//   console.log(`i is ${i} in the do-while loop`);
//   i++;
// } while ( i < 10 );

// Objects
let person = {
    name: "John",
    age: 20,
    city: "New York",
    walk: function() {
        console.log( "I am walking" );
    }
};

// person.forEach(function(key, index) {
//     console.log( key, index );
// } );

for ( let key in person ) {
    console.log( key, person[key] );
}

console.log( person.age );
console.log( person["age"] );

// Arrays
let fruits = [ "apple", "banana", "cherry" ];
let numbers = [];
numbers.push( 1 );


console.log( "Obi is a boy".length );

// 4.8. Loops with Labels


// 4.9. Loops with Labels